import { useState } from "react";
import {toast} from "react-toastify"
import {useAuthContext} from "../context/authContext"


const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const login = async (username,password) => {
        const handleInputError = (username,password) => {
if(!username || !password){
  toast.error('Pleas Fill all inputs');
  return false
}

if(password.length < 6 ){
    toast.error("Password must be at least 6 character 😬");
    return false
}

return true
}

        setLoading(true)
        const sucess = handleInputError(username,password)
        if(!sucess){
            setLoading(false)
            return
        }
        try{
            const res = await fetch("/api/auth/login", {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })

            const data = await res.json()
            if(data.error){
                toast.error(data.error)
                throw new Error(data.error)
            }
            localStorage.setItem("user",JSON.stringify(data))
            setAuthUser(data)
        }catch(error){
            console.error(error.message)

        }finally{
            setLoading(false)
        }
    }
    
    return {loading,login}
    
}

export default useLogin
