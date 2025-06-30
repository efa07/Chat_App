import React, { useEffect, useRef } from 'react'
import Message from "./Message"
import useGetMessages from "../../Hooks/useGetMessages"
import { ClipLoader } from "react-spinners";

const Messages = () => {
  const { messages, loading } = useGetMessages()
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div ref={containerRef} className='px-4 flex-1 overflow-auto'>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <ClipLoader />
        </div>
      ) : !messages || messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No messages yet</p>
        </div>
      ) : (
        <div>
          {messages.map(message => (
            <Message key={message._id} message={message} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Messages
