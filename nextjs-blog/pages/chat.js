import { useState } from 'react'
import axios from 'axios'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = async (event) => {
    event.preventDefault()

    setMessages([...messages, { text: input, user: 'You' }])
    setInput('')

    const response = await axios.post('/api/chat', { message: input })
    const botMessage = response.data.message

    setMessages([...messages, { text: input, user: 'You' }, { text: botMessage, user: 'Bot' }])
  }

  return (
    <div>
      <h1>GPT-4 Chatbot</h1>

      <div>
        {messages.map((message, index) => (
          <p key={index}><strong>{message.user}:</strong> {message.text}</p>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}