import { Send } from 'lucide-react';
import useSendMessage from "../../Hooks/useSendMessage";
import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-2 bg-white border-t border-gray-200">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
          placeholder="Type a message..."
          className="w-full pl-4 pr-12 py-2 text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 disabled:opacity-40 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
