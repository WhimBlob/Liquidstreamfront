import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      id="msg"
      type="text"
      placeholder="Enter Message"
      value={message}
      value={state.message} onChange={handleChange}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
    <button className="btn" onClick={sendMessage}><i className="fas fa-paper-plane"></i> Send</button>
  </form>
)

export default Input;