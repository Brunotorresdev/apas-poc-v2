import { useEffect, useRef } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import ChatInput from "./ChatInput";

const ChatWindow = ({
  messages,
  sessionId,
  handleSendMessage,
  currentHistoryActive,
  handleEndSession,
}) => {
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-window-container">
        <div>
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
        </div>

        <div>
          {currentHistoryActive && (
            <ChatInput
              sessionId={sessionId}
              onSendMessage={handleSendMessage}
              handleEndSession={handleEndSession}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
