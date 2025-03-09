import { useEffect, useRef } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import ChatInput from "./ChatInput";

const ChatWindow = ({ messages, sessionId, handleSendMessage }) => {
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <>
          <div key={index} className={`message ${msg.emitter}`}>
            <MarkdownRenderer markdownContent={msg.body} />
          </div>
        </>
      ))}
      {messages[messages.length - 1]?.emitter == "user" && (
        <div key={1646546} className={`message pending`}>
          {"Aguardando a resposta do agente de I.A. da APAS."}
        </div>
      )}
      <div ref={chatEndRef} />
      <ChatInput sessionId={sessionId} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
