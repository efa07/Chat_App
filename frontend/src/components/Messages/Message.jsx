import React from 'react';
import useConversion from '../../Store/useConverstion';
import { useAuthContext } from '../../context/authContext';
import { extractTime } from '../../utils/extractTime';
import { motion } from 'framer-motion';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversion } = useConversion();

  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversion?.profilePic;
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`flex ${fromMe ? 'justify-end' : 'justify-start'} mb-4`}>
      {/* Avatar (only for received messages) */}
      {!fromMe && (
        <div className="w-9 h-9 mr-2 shrink-0">
          <img
            src={profilePic}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full border border-gray-300 shadow-sm"
          />
        </div>
      )}

      {/* Message Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-[80%] sm:max-w-[70%] md:max-w-[65%] relative"
      >
        <div
          className={`p-3 rounded-2xl shadow-md text-sm break-words whitespace-pre-wrap
            ${fromMe
              ? 'bg-blue-600 text-white rounded-br-sm'
              : 'bg-gray-100 text-gray-900 rounded-bl-sm'
            }`}
        >
          {message.message}
        </div>
        <div
          className={`mt-1 text-[11px] text-gray-500 px-1 ${fromMe ? 'text-right' : 'text-left'}`}
        >
          {formattedTime}
        </div>
      </motion.div>

      {/* Optional sender avatar (hidden for now) */}
      {fromMe && (
        <div className="w-9 h-9 ml-2 invisible" />
      )}
    </div>
  );
};

export default Message;
