import { createContext, useState, useEffect,useContext } from "react";
import { useAuthContext } from "./authContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuthContext();

 useEffect(() => {
  if (authUser) {
    const socket = io("http://localhost:5000", {
      query: {
        userId: authUser._id,
      },
    });
    setSocket(socket);
    socket.on("getOnlineUser", (users) => {
      setOnlineUser(users);
    });

    return () => socket.close();
    
  } else {
    if (socket) {
      socket.close();
      setSocket(null);
      setOnlineUser([]);
    }
  }
}, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
