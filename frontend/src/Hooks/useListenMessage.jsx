import { useEffect } from 'react';
import {useSocketContext} from "../context/socketContex"
import useConversation from "../Store/useConverstion"
import notificationSound from "../assets/sound/notification.mp3"

const useListenMessage = () => {
 const {socket} = useSocketContext()
 const {messages,setMessages} = useConversation()

 useEffect(() => {
   socket?.on("newMessage", (newMessage) => {
     const sound = new Audio(notificationSound)
     sound.play().catch((error) => {
      console.error("error playing sound:",error.messages)
     })
     setMessages([...messages, newMessage])
   })

   return () => {
     socket?.off("newMessage")
   }
 }, [socket, setMessages,messages])  
}

export default useListenMessage