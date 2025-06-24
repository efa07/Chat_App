import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/Messages/MessageContainer"

const Home = () => {
  return (
<>
<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden">
<Sidebar />
<MessageContainer />
</div>
</>
)
}

export default Home