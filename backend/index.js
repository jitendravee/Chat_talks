
import express, { response } from "express";

import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/SignUpRoutes.js';
import { SignUp } from "./models/SignUpModel.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
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
