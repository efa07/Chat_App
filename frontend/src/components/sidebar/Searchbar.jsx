import { Search } from "lucide-react"

const Searchbar = () => {
  return (
    <form>
         <div className="relative mb-4">
        <input
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