import Messages from './Messages'
import MessageInput from "./MessageInput"


const MessageContainer = () => {
  const noChat = 0;

  return (
    <div className='md-min-w-[450px] flex flex-col overflow-auto'>
       {noChat ? (<NoChataSelected />)
       :
        <>
          <div className='bg-slate-400 px-4 py2 mb-2'>
                <span className='label-text'>To </span>
                <span className='text-gray-500 font-bold'>Efa Tariku</span>
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
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
<p>Welcome Efa </p>
<p>Select a chat to start messageing</p>

      </div>

    </div>
  )
}