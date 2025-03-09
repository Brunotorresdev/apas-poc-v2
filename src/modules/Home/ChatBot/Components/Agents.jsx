import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuthStore } from "../../../../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

const Agents = ({ agents, onSubmit, onLogout }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuthStore((state) => state);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="agents-input">
      <div className="agents-buttons">
        Selecione um Assistente:
        {agents?.map((agent) => (
          <button
            key={agent.id}
            className={selectedAgent === agent.id ? "selected" : ""}
            onClick={() => {
              onSubmit(agent.id);
              setSelectedAgent(agent.id);
            }}
          >
            {agent.name}
          </button>
        ))}
      </div>
      <div>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Agents;
