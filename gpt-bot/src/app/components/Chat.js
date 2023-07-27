import { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    const response = await axios.post('/api/chat', { message });
    setChatHistory([...chatHistory, { message: response.data.message, from: 'bot' }]);
    setMessage('');
  };

  return (
    <div>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      {chatHistory.map((chat, index) => (
        <p key={index}>{chat.from}: {chat.message}</p>
      ))}
    </div>
  );
}

export default Chat;