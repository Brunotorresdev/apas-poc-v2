import { useEffect, useState } from "react";
import { useSocket } from "../../../../hooks/useSocket";
import sendIcon from "../../../../assets/send-icon.svg";
import MicComponent from "./MicComponent";

const ChatInput = ({ sessionId, onSendMessage, handleEndSession }) => {
  const [input, setInput] = useState("");
  const [audioBase64, setAudioBase64] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const { messages, sendMessage, isLoading } = useSocket(sessionId);

  useEffect(() => {
    if (messages.length && messages) {
      onSendMessage(messages);
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input, "text");
    setInput("");
  };

  useEffect(() => {
    if (audioBase64) {
      sendMessage(audioBase64, "audio");
      setAudioBase64("");
    }
  }, [audioBase64]);

  return (
    <div className="chat-input-container">
      <div className="chat-input">
        {!isRecording && (
          <textarea
            type="text"
            placeholder="Digite uma mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        )}
        {!isRecording && (
          <button>
            <img
              onClick={handleSend}
              className="icon-chat-apas"
              src={sendIcon}
              alt=""
            />
          </button>
        )}
        <MicComponent
          audioBase64={audioBase64}
          setAudioBase64={setAudioBase64}
          setIsRecording={setIsRecording}
        />
      </div>
      <a onClick={handleEndSession}>Limpe a conversa.</a>
    </div>
  );
};

export default ChatInput;
