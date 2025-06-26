import { useState } from "react"
import { toast } from 'react-toastify';

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const SignUp = async ( {fullName,username,password,confirmPassword,gender,email}) => {
    const success  = handleInputError( fullName,username,password,confirmPassword,gender,email)
    if(!success) return
    try{
    const res = await fetch("/api/auth/signup", {
        method: "POST",
                headers:{ "content-type": "application/json" },
                body: JSON.stringify({fullName,username,password,confirmPassword,gender,email})
                
            })
            const data = await res.json()
           if(data){
                if(data.error){
                    toast.error(data.error)
                }else{
                    toast.success("Account created successfully")
                    window.location.href = "/login"
                }
            }
        }catch(error){
            toast.error(error.message)
            setLoading(false)

        }
        finally{
            setLoading(false)
        }

}
return { SignUp, loading }
}


export default useSignup

const handleInputError = ( fullName,username,password,confirmPassword,gender,email) => {
if(!fullName || !username || !password || !confirmPassword || !gender || !email){
  toast.error('Pleas Fill all inputs 😬');
  return false
}

if(password !== confirmPassword){
    toast.error("Password don't match 😬");
    return false
}

if(password.length < 6 ){
    toast.error("Password must be at least 6 character 😬");
    return false
}


return true
}