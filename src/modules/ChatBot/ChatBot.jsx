import { useState } from "react";
import ChatHistory from "./Components/ChatHistory";
import ChatWindow from "./Components/ChatWindow";
import ChatInput from "./Components/ChatInput";
import "./ChatBot.css";
import Agents from "./Components/Agents";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);

    setTimeout(() => {
      const botResponse = { sender: "bot", text: "Resposta do chatbot..." };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <ChatHistory messages={messages} />
      <div className="chat-main">
        <Agents onSendMessage={handleSendMessage} />

        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
