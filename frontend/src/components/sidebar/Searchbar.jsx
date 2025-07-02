import { Search } from "lucide-react"
import { useState } from "react"
import useConversation from "../../Store/useConverstion"
import useGetConversions from "../../Hooks/useGetConversions"
import {toast} from "react-toastify"

const Searchbar = () => {
  const  [search, setSearch] = useState("")
  const {setSelectedConversion} = useConversation()
  const {conversions} = useGetConversions()

  const handleSearch = (e) => {
    e.preventDefault()
    if(!search) return
    if(search.length < 3) {
      return toast.error("search must be greater than 3")
  }
  const conversion = conversions.find((con) => con.fullName.toLowerCase().includes(search.toLowerCase()))
  if(conversion){
    setSelectedConversion(conversion)
    setSearch("")

  }else{
    toast.error("No user found")
  }
}
  return (
    <form onSubmit={handleSearch}>
         <div className="relative mb-4">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-100"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>

    </form>
  )
}

export default Searchbar