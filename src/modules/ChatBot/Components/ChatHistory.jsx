const ChatHistory = ({ messages }) => {
  return (
    <div className="chat-history">
      <h3>Histórico</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className={msg.sender}>
            {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
