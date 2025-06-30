import React, { useEffect, useState } from 'react'
import useConversion from '../Store/useConverstion'

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversion } = useConversion()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversion._id}`)
                const data = await res.json()
                if (data.error) {
                    console.log(data.error)
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        if (selectedConversion?._id) getMessages()
    }, [selectedConversion?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
