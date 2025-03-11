import dayjs from "dayjs";
import logoApas from "../../../../assets/logoapas.png";
import iconChat from "../../../../assets/icon-white.svg";

const ChatHistory = ({
  data,
  messages,
  setMessages,
  setInitialMessages,
  setCurrentHistoryActive,
}) => {
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
          {data?.map((dateGroup, dateIndex) => {
            console.log("🚀 ~ ChatHistory ~ dateGroup:", dateGroup);

            return (
              <li key={dateIndex}>
                {dateGroup?.data[0].messages?.history?.length && (
                  <strong>{dayjs(dateGroup.date).format("DD/MM/YYYY")}</strong>
                )}
                <ul>
                  {dateGroup.data.map((msg, index) => {
                    if (dateGroup.date === "2025-03-10") {
                      console.log("🚀 ~ {dateGroup.data.map ~ msg:", msg);
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
                          {`${msg.messages.history[0]?.body} - ${dayjs(
                            msg.createdAt
                          ).format("DD/MM/YYYY")}`}
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
    </div>
  );
};

export default ChatHistory;
