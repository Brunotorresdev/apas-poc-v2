import dayjs from "dayjs";
import iconChat from "../../../assets/icon-black.svg";
import "./Agents.css";
import { useState } from "react";

const SideAgent = ({ data, messages, setMessages, onSubmit, agents }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  return (
    <div className="chat-agent">
      <h3 className="title-agent-apas">
        Agentes de I.A. do Escritório de Projetos e Processos APAS
      </h3>

      <div className="ask-whatever">
        <img className="icon-chat-apas" src={iconChat} width={"20px"} alt="" />
        <p>Pergunte o que quiser!</p>
      </div>
      <div className="chat-agent-content">
        <h3>Agentes APAS</h3>
        <ul>
          {/* {data?.data?.map((msg, index) => {
            if (!msg.messages?.history || msg.messages.history.length === 0) {
              return null;
            }

            return (
            c
                <button
                  className={"option-agent"}
                  onClick={() => {
                    setInitialMessages(msg.messages.history);
                    setMessages(msg.messages.history);
                  }}
                >
                  {`${msg.messages.history[0]?.body} - ${dayjs(
                    msg.updatedAt
                  ).format("DD/MM/YYYY")}` || "Sem histórico"}
                </button>
              </li>
            );
          })} */}
          {agents?.map((agent) => (
            <div className="assistents-item">
              <img
                className="icon-chat-apas"
                src={iconChat}
                width={"20px"}
                alt=""
              />
              <button
                key={agent.id}
                className={"option-agent"}
                onClick={() => {
                  onSubmit(agent.id);
                  setSelectedAgent(agent.id);
                }}
              >
                {agent.name}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideAgent;
