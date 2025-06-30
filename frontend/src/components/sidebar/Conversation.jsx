import useConversion from "../../Store/useConverstion"


const Conversation = ({conversion}) => {
  const {selectedConversion,setSelectedConversion} = useConversion()
  const isSelected = selectedConversion?._id === conversion._id  

  return (
    <div>
<div 
onClick={() => setSelectedConversion(conversion)}
className={`${isSelected ? "bg-blue-300" : " " } flex gap-2 items-center hover:bg-green-100 rounded p-2 py-1 cursor-pointer`}>
<div className="avatar avatar-online ">
  <div className="w-12 rounded-full">
    <img src={`${conversion.profilePic}`} />
  </div>
</div>

<div className='flex flex-col flex-1'>
    <div>
        <p className='font-bold text-gray-600'>
{conversion.fullName}
        </p>
    </div>

</div>
</div>

<div></div>

    </div>
    
  )
}

export default Conversation