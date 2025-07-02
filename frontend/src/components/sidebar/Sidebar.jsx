import Searchbar from "./Searchbar";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <div className="w-full  bg-white border-r border-gray-200 h-full flex flex-col p-2 shadow-sm">
      <Searchbar />

      {/* Online Users Section */}
      <div className="mt-4 flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-center mb-2">
          <h2 className="text-sm font-semibold text-gray-700">Online Users</h2>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          <Conversations />
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-100">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Sidebar;
