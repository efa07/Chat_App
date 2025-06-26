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
    <div className='bg-blue-100 rounded-2xl flex items-center justify-center w-full h-full'>
      <div className="flex justify-center items-center w-[240px] h-[360px] relative overflow-hidden rounded-[20px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)] bg-white/15 backdrop-blur-[20px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-[linear-gradient(180deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.3))]">
<h3>Hello Efa  select a chat to message</h3>
</div>


    </div>
  )
}