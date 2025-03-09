import { useEffect, useState } from "react";
import ChatHistory from "./Components/ChatHistory";
import ChatWindow from "./Components/ChatWindow";
import "./ChatBot.css";
import { useAssistents } from "../hooks/useAssistents";
import { useStartSession } from "../hooks/useStartSession";
import { useHistoryAssistent } from "../hooks/useHistoryAssistent";
import { useSocket } from "../../../hooks/useSocket";
import SideAgent from "../Agents/Agents";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [assistentId, setAssistentId] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [initialMessages, setInitialMessages] = useState([]);

  const { disconnectSocket } = useSocket(sessionId);

  const { data: sessionData, isFetched } = useStartSession(assistentId);
  const { data: historyAssistentData } = useHistoryAssistent(assistentId);

  useEffect(() => {
    if (isFetched && sessionData) {
      setSessionId(sessionData.data.id);
    }
  }, [isFetched]);
  const { data } = useAssistents();

  const handleSendMessage = (message) => {
    const newMessages = [...initialMessages, ...message];
    setMessages(newMessages);
  };
  const handleStartSession = (id) => {
    disconnectSocket();
    setMessages([]);
    setInitialMessages([]);
    setAssistentId(id);
  };

  return (
    <div className="chat-container">
      <ChatHistory
        data={historyAssistentData?.data}
        messages={messages}
        setMessages={handleSendMessage}
        setInitialMessages={setInitialMessages}
      />

      <SideAgent
        data={historyAssistentData?.data}
        messages={messages}
        setMessages={handleSendMessage}
        setInitialMessages={setInitialMessages}
        agents={data?.data}
        onSubmit={handleStartSession}
      />

      <div className="chat-main">
        {/* <Agents agents={data?.data} onSubmit={handleStartSession} /> */}
        {!assistentId ? (
          <div className="chat-header">
            <h2>Selecione um assistente para iniciar</h2>
          </div>
        ) : (
          <>
            <ChatWindow
              messages={messages}
              sessionId={sessionId}
              handleSendMessage={handleSendMessage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
