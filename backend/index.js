import express from "express";
import cors from 'cors';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { createServer } from 'http';
import socketIO from 'socket.io';
import usersRoute from './routes/SignUpRoutes.js';
import http from 'http';
const app = express();
config();
const users=[{}];
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());

connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    const server = http.createServer(app);
    const io = socketIO(server);

    io.on("connection", (socket) => {
      
      console.log("New Connection",socket.id);

      socket.on('joined',({user})=>{
        users[socket.id]=user;
        console.log(`${user} has joined `);
        socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
        socket.emit('welcome',{user:"Admin",message:`Welcome to the chat,${users[socket.id]} `})
  })

  socket.on('message',({message,id})=>{
      io.emit('sendMessage',{user:users[id],message,id});
  })

  socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
      console.log(`user left`);
  })

   
    });

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error in mongoose', err);
  });

app.use('/', usersRoute);

app.get('/', (req, res) => {
  res.send('Working in server');
});
