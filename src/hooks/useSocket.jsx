import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL;

export const useSocket = (sessionId) => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL);

      socketRef.current.on("connect", () => {
        socketRef.current.emit("initial-chat", { session_id: sessionId });
      });

      socketRef.current.on("message", (response) => {
        setMessages((prev) => [...prev, response]);
        setIsLoading(false);
      });
    }

    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
      setMessages([]);
    };
  }, [sessionId]);

  const sendMessage = (message, type = "text") => {
    if (!socketRef.current || !sessionId) return;

    const newMessage = { type, emitter: "user", body: message };

    setIsLoading(true);
    socketRef.current.emit("chat-message", {
      session_id: sessionId,
      message: newMessage,
    });

    setMessages((prev) => [...prev, newMessage]);
  };

  const disconnectSocket = () => {
    if (socketRef.current) {
      setMessages([]);
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  };

  return { messages, sendMessage, isLoading, disconnectSocket };
};
