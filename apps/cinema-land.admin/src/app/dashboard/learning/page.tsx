'use client';

import { useOptimistic, useState, useRef } from 'react';

let id = 1;

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 5000));
  throw new Error('!!!');
  return message;
}

function Thread({ messages, sendMessage }) {
  const formRef = useRef();
  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );
  console.log(messages, optimisticMessages);
  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: 'Hello there!', sending: false, key: id },
  ]);
  async function sendMessage(formData) {
    try {
      const sentMessage = await deliverMessage(formData.get('message'));
      setMessages((messages) => [
        ...messages,
        { text: sentMessage + '---', key: ++id },
      ]);
    } catch (e) {}
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}
