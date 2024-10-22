import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null); // Initialize state with default values
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  const router = useRouter(); 

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    } else {
      router.push("/"); // Redirect to home if no user info
    }
  }, [router]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
