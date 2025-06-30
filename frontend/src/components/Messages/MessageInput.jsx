import { Send } from 'lucide-react';
import useSendMessage from "../../Hooks/useSendMessage"
import { useState } from 'react';

const MessageInput = () => {
  const [message,setMessage] = useState("")
  const {loading,sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")

  }
  return (
    <div>
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="border text-sm rounded-lg block w-full p-2 bg-gray-600 text-white"
                placeholder="send a message"
                />
                <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center p-2 text-white"
                >
<Send />
      </button>

            </div>
        </form>
    </div>
  )
}

export default MessageInput