import React from 'react'
import useConversion from "../../Store/useConverstion"
import {useAuthContext} from '../../context/authContext'
import {extractTime} from "../../utils/extractTime"

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const {selectedConversion} = useConversion()
  const fromMe = message.senderId === authUser._id
  const profilePic = fromMe ? authUser?.profilePic : selectedConversion?.profilePic
  const bubbleBg = fromMe ? "bg-blue-500" : "bg-gray-400"
  const hideImg = fromMe ? "hidden": ""
  const formatedDate = extractTime(message.createdAt)
  const chatClass = fromMe ? "chat-end" : "chat-start"
  return (
   <>
  <div className={`chat ${chatClass}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
      className={hideImg}
        alt="Tailwind CSS chat bubble component"
        src={profilePic}
      />
    </div>
  </div>
  <div className={`chat-bubble text-white ${bubbleBg}`}>{message.message}</div>
  </div>
    <div className='chat-footer opacity-50 text-sm flex gap-1 items-center'>
      {formatedDate}
</div>
{/* 

*/}
   </>
  )
}

export default Message