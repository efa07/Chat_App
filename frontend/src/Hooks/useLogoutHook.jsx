import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

export const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async () => {
        setLoading(true)
        try{
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem("user")
            setAuthUser(null)

        }catch(error){
            console.error(error.message)
            toast.error(error.message)

        }
        finally{
            setLoading(false)
        }
    }
    return {logout} 
}