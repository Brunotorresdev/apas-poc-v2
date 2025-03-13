import dayjs from "dayjs";
import logoApasKira from "../../../../assets/logo-apas-kira.jpeg";

import iconChat from "../../../../assets/icon-white.svg";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../hooks/useAuthStore";

const ChatHistory = ({
  data,
  messages,
  setMessages,
  setInitialMessages,
  setCurrentHistoryActive,
}) => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore((state) => state);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="chat-history">
      <div className="logo-apas">
        <img src={logoApasKira} width={"150px"} alt="" />
      </div>

      <div className="intelligent-agent">
        <img className="icon-chat-apas" src={iconChat} width={"20px"} alt="" />
        <p>Agente Inteligente</p>
      </div>

      <div className="chat-history-container">
        <div className="chat-history-content">
          <h3>Histórico de pesquisa</h3>
          <ul>
            {data?.map((dateGroup, dateIndex) => {
              return (
                <li key={dateIndex}>
                  {dateGroup?.data[0].messages?.history?.length && (
                    <strong>
                      {dayjs(dateGroup.date).format("DD/MM/YYYY")}
                    </strong>
                  )}
                  <ul>
                    {dateGroup.data.map((msg, index) => {
                      if (dateGroup.date === "2025-03-10") {
                      }
                      if (
                        !msg.messages?.history ||
                        msg.messages.history.length === 0
                      ) {
                        return null;
                      }

                      return (
                        <li key={msg.id}>
                          <button
                            className={"option-history"}
                            onClick={() => {
                              setInitialMessages(msg.messages.history);
                              setMessages(msg.messages.history);
                              setCurrentHistoryActive(msg.isActived);
                            }}
                          >
                            {`${msg.messages.history[0]?.body} `}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <FaSignOutAlt
          fill="#55CAF5"
          style={{ cursor: "pointer" }}
          fontSize={"25px"}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default ChatHistory;
