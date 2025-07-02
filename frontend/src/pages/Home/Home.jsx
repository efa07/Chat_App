import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      <div className="w-full md:w-[30%] lg:w-[25%] border-r border-gray-200">
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-50">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
