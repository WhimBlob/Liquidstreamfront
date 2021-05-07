// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import Input from './Input';

// function Chat() {
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('');
//     const [users, setUsers] = useState('');
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//   const chatForm = document.getElementById('chat-form');
//   const chatMessages = document.querySelector('.chat-messages');

//   const socket = io();

//   // Message from server
//   socket.on('message', message =>{
//     console.log(message);
//     outputMessage(message);

//     // Scroll down
//     chatMessages.scrolltop = chatMessages.scrollHeight;


//   });

//   // Message submit
//   useEffect(() => {
//     socket.on('message', message => {
//       setMessages(messages => [ ...messages, message ]);
//     });
    
//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if(message) {
//       socket.emit('sendMessage', message, () => setMessage(''));
//     }
//   }


//   // Output message to DOM
//   function outputMessage(message) {
//     const div = document.createElement('div');
//     div.classList.add('message');
//     div.innerHTML = `<p class="meta"> ${message.username} <span>${message.time}</span></p>
//     <p class="text">
//       ${message.text}
//     </p>`;
//     document.querySelector('.chat-messages').appendChild(div);
//   }

//     return(
//       <section className="chat-container">
//         <div className="chat-main">
//           <div className="chat-sidebar">
//             <h3><i className="fas fa-comments"></i>Chat</h3>
//             <h3><i className="fas fa-users"></i> Users</h3>
//             <ul id="users"></ul>
//           </div>
//           <div className="chat-messages"></div>
//         </div>
//         <div className="chat-form-container">
//           <Messages messages={messages} name={name} />
//           <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
//         </div>
//       </section>
//     )
//   }

// export default Chat;