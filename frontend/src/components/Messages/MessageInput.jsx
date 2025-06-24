import { Send } from 'lucide-react';

const MessageInput = () => {
  return (
    <div>
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input
                type="text"
                className="border text-sm rounded-lg block w-full p-2 bg-gray-600 text-white"
                placeholder="send a message"
                />
                <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center p-2"
                >
<Send />
      </button>

            </div>
        </form>
    </div>
  )
}

export default MessageInput