import  { useState } from 'react'
import useConversion from "../Store/useConverstion"
const useSendMessage = () => {
    const [loading,setLoading] = useState(false)
    const {messages,setMessages,selectedConversion} = useConversion()
   
    const sendMessage= async (message) => {
        setLoading(true)
        try{
            const res = await fetch(`/api/messages/send/${selectedConversion._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({message})
            })
            const data = await res.json()
            if(data.error){
                console.log(data.error.message)
                throw new Error(data.error)}
            setMessages([...messages,data])
        }catch(error){
            console.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return {sendMessage,loading}
}

export default useSendMessage