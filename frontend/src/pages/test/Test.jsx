import React from 'react'
import {motion ,AnimatePresence} from "framer-motion"
import { useState } from 'react'

const Test = () => {
    const [show, setShow] = useState(true)

  return (
    <div>
        <AnimatePresence>
        { show &&
        <motion.div 
        initial={{ rotate: '0deg', scale: 0 }}
        animate={{ rotate:"360deg", scale: 1 ,borderRadius:"50%"}}
        transition={{
            duration:1
        }}
        exit={{
            rotate:"0deg",
            scale:0
        }}
        className='w-70 h-70 bg-black absolute left-10 text-white top-10 flex flex-col items-center justify-center text-2xl font-bold'>
        <p>Hi</p>
        </motion.div>
}
</AnimatePresence>
        <button 
        onClick={() => setShow(!show)}
        className='bg-red-500 p-2 w-40 rounded-2xl left-0.5 absolute top-100 h-10 text-white'>
            Hide/show
        </button>


    </div>
  )
}

export default Test