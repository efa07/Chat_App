import useConversion from "../../Store/useConverstion";
import { useSocketContext } from "../../context/socketContex";

const Conversation = ({ conversion }) => {
  const { selectedConversion, setSelectedConversion } = useConversion();
  const { onlineUser } = useSocketContext();

  const isSelected = selectedConversion?._id === conversion._id;
  const isOnline = onlineUser.includes(conversion?._id);

  return (
    <div
      onClick={() => setSelectedConversion(conversion)}
      className={`flex gap-3 items-center p-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 
        ${isSelected ? "bg-blue-100" : "hover:bg-green-50"}`}
    >
      {/* Avatar with online status */}
      <div className="relative w-12 h-12">
        <img
          src={conversion.profilePic}
          alt="avatar"
          className="w-12 h-12 object-cover rounded-full shadow-sm"
        />
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white 
            ${isOnline ? "bg-green-500" : "bg-gray-400"}`}
        />
      </div>

      {/* Name and other info */}
      <div className="flex flex-col flex-1">
        <p className="font-semibold text-gray-800">{conversion.fullName}</p>
        {/* Optional: Add preview of last message or timestamp here */}
      </div>
    </div>
  );
};

export default Conversation;
