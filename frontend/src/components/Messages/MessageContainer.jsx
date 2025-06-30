import Messages from './Messages'
import MessageInput from "./MessageInput"
import useConversion from "../../Store/useConverstion"
import { useEffect } from 'react'
import {useAuthContext} from "../../context/authContext"

const MessageContainer = () => {
    const { authUser } = useAuthContext()
  const {selectedConversion,setSelectedConversion} = useConversion()

  useEffect(() => {
    return () => setSelectedConversion(null)
  },[setSelectedConversion])
  return (
    <div className='md-min-w-[450px] flex flex-col overflow-auto'>
       {!selectedConversion ? (<NoChataSelected />)
       :
        <>
          <div className='bg-slate-400 px-4 py2 mb-2'>
                <span className='label-text'>To </span>
                <span className='text-gray-500 font-bold'>{selectedConversion.fullName}</span>
          </div>
            <Messages />
             <MessageInput />
        </>
}
    </div>
      
  )
}

export default MessageContainer

const NoChataSelected = () => {
      const { authUser } = useAuthContext()

  return (
    <div className='flex items-center justify-center w-full h-full bg-gradient-to-br from-rose-100 to-purple-300 rounded-2xl p-6'>
      <div className="flex flex-col items-center justify-center w-80 h-96 relative overflow-hidden rounded-2xl border border-white/30 shadow-xl backdrop-blur-md bg-white/20">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">👋 Hello {authUser.fullName} !</h3>
        <p className="text-gray-700 text-center px-4">Select a chat to start messaging and stay connected.</p>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
