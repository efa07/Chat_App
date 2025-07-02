import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversion from "../../Store/useConverstion";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";

const MessageContainer = () => {
  const { authUser } = useAuthContext();
  const { selectedConversion, setSelectedConversion } = useConversion();

  useEffect(() => {
    return () => setSelectedConversion(null);
  }, [setSelectedConversion]);

  return (
    <div className="flex flex-col h-full min-w-full md:min-w-[450px]">
      {!selectedConversion ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
            <span className="text-sm text-gray-500">To </span>
            <span className="font-semibold text-gray-800 text-sm">
              {selectedConversion.fullName}
            </span>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-auto px-4 py-2 bg-gray-50">
            <Messages />
          </div>

          {/* Input box */}
          <div className="border-t border-gray-200 px-4 py-3 bg-white">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-rose-100 to-purple-400 animate-pulse">
      <div className="text-center max-w-md p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20">
        <h3 className="text-2xl font-bold text-gray-800  mb-2">
          👋 Hello {authUser.fullName}!
        </h3>
        <p className="text-gray-700">
          Select a conversation to start chatting.
        </p>
      </div>
    </div>
  );
};
