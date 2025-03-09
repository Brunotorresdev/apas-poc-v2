import { useState } from "react";

const Agents = ({ onSendMessage }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    { id: "general", label: "Pergunte o que quiser!" },
    { id: "projects", label: "Especialista em projetos!" },
    { id: "processes", label: "Especialista em processos!" },
  ];

  return (
    <div className="agents-input">
      {agents.map((agent) => (
        <button
          key={agent.id}
          className={selectedAgent === agent.id ? "selected" : ""}
          onClick={() => setSelectedAgent(agent.id)}
        >
          {agent.label}
        </button>
      ))}
    </div>
  );
};

export default Agents;
