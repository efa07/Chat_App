import Searchbar from "./Searchbar";
import Conversations from "./Conversations"
import LogoutBtn from "./LogoutBtn"
const Sidebar = () => {
  return (
<div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col p-2 shadow-md">
  {/* Search */}
  <Searchbar />

  <div className="flex flex-col flex-4 overflow-auto  rounded-md">
    {/* Header */}
    <div className="flex items-center justify-center ">
      <h2 className="text-sm font-semibold text-gray-700">Online Users</h2>
    </div>

    <div className="overflow-auto bg-gray-50 rounded-3xl">
      <Conversations />
    </div>
   
  </div>
 <div className="flex-1 items-center justify-center rounded-xl ">
    <LogoutBtn />
  </div>
</div>

  );
};

export default Sidebar;
