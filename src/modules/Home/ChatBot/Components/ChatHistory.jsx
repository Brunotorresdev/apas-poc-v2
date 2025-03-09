import dayjs from "dayjs";
import logoApas from "../../../../assets/logoapas.png";
import iconChat from "../../../../assets/icon-white.svg";

const ChatHistory = ({ data, messages, setMessages, setInitialMessages }) => {
  return (
    <div className="chat-history">
      <img src={logoApas} width={"150px"} alt="" />

      <div className="intelligent-agent">
        <img className="icon-chat-apas" src={iconChat} width={"20px"} alt="" />
        <p>Agente Inteligente</p>
      </div>
      <div className="chat-history-content">
        <h3>Histórico de pesquisa</h3>
        <ul>
          {data?.data?.map((msg, index) => {
            if (!msg.messages?.history || msg.messages.history.length === 0) {
              return null;
            }

            return (
              <li key={index}>
                <button
                  className={"option-history"}
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
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChatHistory;
