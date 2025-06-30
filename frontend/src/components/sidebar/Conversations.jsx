import Conversation from "./Conversation"
import useGetConversions from "../../Hooks/useGetConversions"


const Conversations = () => {
  const {loading,conversions} = useGetConversions()
  return (
    <div className="py-2 flex flex-col overflow-auto">
        {
          conversions.map((conversion) => (
            <Conversation 
            key={conversion._id}
            conversion={conversion}

            />
          ))
        }
    </div>
  )
}

export default Conversations