import Searchbar from "./Searchbar";
import Conversations from "./Conversations"
import LogoutBtn from "./LogoutBtn"
const Sidebar = () => {
  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col p-4 shadow-md">
      {/* Search */}
     <Searchbar />

      {/* Online Users */}
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">Online Users</h2>
        <Conversations />
      </div>
        <LogoutBtn />
    </div>
  );
};

export default Sidebar;
