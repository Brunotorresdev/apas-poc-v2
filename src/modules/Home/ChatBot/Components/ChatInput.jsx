import { useEffect, useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { useSocket } from "../../../../hooks/useSocket";
import sendIcon from "../../../../assets/send-icon.svg";

const ChatInput = ({ sessionId, onSendMessage }) => {
  const [input, setInput] = useState("");

  const { messages, sendMessage, isLoading } = useSocket(sessionId);

  useEffect(() => {
    if (messages.length && messages) {
      onSendMessage(messages);
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Digite uma mensagem..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button>
        <img
          onClick={handleSend}
          className="icon-chat-apas"
          src={sendIcon}
          // width={"20px"}
          alt=""
        />
      </button>
      {/* <button className="mic-button">
        <FaMicrophone />
      </button> */}
    </div>
  );
};

export default ChatInput;
