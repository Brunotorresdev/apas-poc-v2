import { useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
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
      <button onClick={handleSend}>
        <FaPaperPlane />
      </button>
      <button className="mic-button">
        <FaMicrophone />
      </button>
    </div>
  );
};

export default ChatInput;
