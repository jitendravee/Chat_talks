import React, { useState, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import socketIO from 'socket.io-client';
import ReactScrollToBottom from 'react-scroll-to-bottom';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');

  const ENDPOINT = 'http://localhost:3500/';



  useEffect(() => {
    let socket = socketIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      alert('Connected');
      setId(socket.id);

    })
    console.log(socket);
    socket.emit('joined', socket.id )

    socket.on('welcome', (data) => {
      setMessage([...message, data]);
      console.log(data.socket.id, data.message);
    })

    socket.on('userJoined', (data) => {
      setMessage([...message, data]);
      console.log(data.socket.id, data.message);
    })

    socket.on('leave', (data) => {
      setMessage([...message, data]);
      console.log(data.socket.id, data.message)
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [])

  useEffect(() => {
    socketIO.on('sendMessage', (data) => {
      setMessage([...message, data]);
      console.log(data.socket.id, data.message, data.id);
    })

    return (
      <div className="bg-slate-600 min-w-full text-slate-100 min-h-full">
        <div className="flex flex-col">

          <ReactScrollToBottom className="chatBox">
            {message.map((item, i) => <message user={item.id === id ? '' : item.user} message={item.message} />)}
          </ReactScrollToBottom>


          <div className="flex flex-row">
            <input
              id="chatInput"
              onChange={(e) => setChatInput(e.target.value)}
              value={chatInput}
              className="bg-slate-500 mx-4 absolute inset-x-0 rounded-lg bottom-1 p-3 text-md text-medium"
              type="text"
              placeholder="Enter the chat"
            />
            <IoSend onClick={sendButton} className="absolute right-6 bottom-1 mb-4 cursor-pointer" />
          </div>
        </div>
      </div>
    );
  })
}
export default Chat;
