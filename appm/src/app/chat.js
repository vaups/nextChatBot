// pages/chat.js
import { useChat } from 'ai/react'
import React from 'react'
import styles from './chat.module.css'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map((m) => (
          <div key={m.id} className={styles.message}>
            <span className={styles.role}>{m.role}:</span>
            <span className={styles.content}>{m.content}</span>
          </div>
        ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}