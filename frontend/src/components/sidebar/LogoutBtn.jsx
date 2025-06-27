import { LogOutIcon } from "lucide-react"
import {useLogout} from "../../Hooks/useLogoutHook"
const LogoutBtn = () => {
  const {logout}  = useLogout()
  return (
    <div className='mt-auto pt-2'>
        <LogOutIcon 
        onClick={logout}
        className="w-6 h-6 cursor-pointer"/>
    </div>
  )
}

export default LogoutBtn