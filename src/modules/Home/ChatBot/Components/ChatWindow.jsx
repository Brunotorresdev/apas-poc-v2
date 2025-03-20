import { useEffect, useRef } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import ChatInput from "./ChatInput";
import ReactPlayer from "react-player";

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
                {msg.type === "audio" ? (
                  <>
                    <audio style={{ width: "100%" }} controls playsInline>
                      <source
                        src={`data:audio/mp3;base64,${msg.body}`}
                        type="audio/mpeg"
                      />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </>
                ) : (
                  <MarkdownRenderer markdownContent={msg.body} />
                )}
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
