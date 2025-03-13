import { useEffect, useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { useSocket } from "../../../../hooks/useSocket";
import sendIcon from "../../../../assets/send-icon.svg";

const ChatInput = ({ sessionId, onSendMessage, handleEndSession }) => {
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
    <div className="chat-input-container">
      <div className="chat-input">
        <textarea
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
            alt=""
          />
        </button>
      </div>
      <a onClick={handleEndSession}>Limpe a conversa.</a>
    </div>
  );
};

export default ChatInput;

// import { useEffect, useState } from "react";
// import { Mic, MicOff } from "lucide-react"; // Ícones modernos
// import sendIcon from "../../../../assets/send-icon.svg";
// import { useSocket } from "../../../../hooks/useSocket";

// const ChatInput = ({ sessionId, onSendMessage, handleEndSession }) => {
//   const [input, setInput] = useState("");
//   const { messages, sendMessage, isLoading } = useSocket(sessionId);
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBase64, setAudioBase64] = useState("");

//   useEffect(() => {
//     if (messages.length && messages) {
//       onSendMessage(messages);
//     }
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim() || isLoading) return;
//     sendMessage(input);
//     setInput("");
//   };

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mediaRecorder = new MediaRecorder(stream);
//       const audioChunks = [];

//       mediaRecorder.ondataavailable = (event) => {
//         audioChunks.push(event.data);
//       };

//       mediaRecorder.onstop = async () => {
//         const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
//         const reader = new FileReader();
//         reader.readAsDataURL(audioBlob);
//         reader.onloadend = () => {
//           const base64data = reader.result.split(",")[1];
//           setAudioBase64(base64data);
//           console.log("Base64 do áudio:", base64data);
//         };
//       };

//       mediaRecorder.start();
//       setIsRecording(true);

//       setTimeout(() => {
//         mediaRecorder.stop();
//         setIsRecording(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Erro ao gravar áudio:", error);
//     }
//   };

//   return (
//     <div className="chat-input-container">
//       <div className="chat-input">
//         <textarea
//           type="text"
//           placeholder="Digite uma mensagem..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button onClick={handleSend}>
//           <img className="icon-chat-apas" src={sendIcon} alt="Enviar" />
//         </button>
//         <button onClick={startRecording} className="mic-button">
//           {isRecording ? (
//             <MicOff color="red" size={24} />
//           ) : (
//             <Mic color="black" size={24} />
//           )}
//         </button>
//       </div>
//       <a onClick={handleEndSession}>Limpe a conversa.</a>
//     </div>
//   );
// };

// export default ChatInput;
