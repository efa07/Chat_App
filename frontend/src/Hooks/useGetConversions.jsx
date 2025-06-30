import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const useGetConversions = () => {
    const [loading, setLoading] = useState(false)
    const [conversions, setConversions] = useState([])

    useEffect(() => {
        const getConversion = async () => {
            setLoading(true)
            try{
                const res = await fetch("/api/users")
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                setConversions(data)
            }catch(error){
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        getConversion()
    },[])

    return {loading,conversions}

}

export default useGetConversions