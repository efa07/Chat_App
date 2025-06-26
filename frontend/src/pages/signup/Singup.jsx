import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import useSignup from "../../Hooks/userSignupHook"

const Signup = () => {
  const { SignUp, loading } = useSignup()
  const [input, setInput]  = useState({
    fullName: "",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
    email:""
})

const handleSubmit = async (e) => {
e.preventDefault()
await SignUp(input)
}
  return (
    <>
      <img
        src="../public/logo.png"
        alt="Login Visual"
        className="-z-1 absolute w-full h-full object-cover"
      />
      <div className="bg-white w-[calc(100vw-200px)] h-[calc(100vh-50px)] flex p-2 rounded-3xl">
        {/* Left side: Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center  rounded-xl p-6 md:p-10 ">
          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-900 mb-6">Fill your info to create your account</p>

          <form className="w-full max-w-sm overflow-y-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
              <input id="fullName" 
              required
              value={input.fullName}
              onChange={(e) => setInput({...input, fullName: e.target.value})}
              type="text" 
              placeholder="Efa Tariku" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
              <input 
              id="username"
              required
              autoComplete="off"
              value={input.username}
              onChange={(e) => setInput({...input, username: e.target.value})}
               type="text" 
               placeholder="username" 
               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input 
              id="email" 
              required
              value={input.email}
              onChange={(e) => setInput({...input, email:e.target.value})}
              type="email"
               placeholder="efa@email.com" 
               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="gender">Gender</label>
              <select 
              id="gender" 
              required
              value={input.gender}
              onChange={(e) => setInput({...input,gender:e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="profilePic">Profile Picture</label>
<input
  id="profilePic"
  type="file"
  accept="image/*"
  onChange={(e) => setInput({ ...input, profilePic: e.target.files[0] })}
  className="w-full px-4 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
/>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
<input
  id="password"
  required
  type="password"
  autoComplete="off"
  value={input.password}
  onChange={(e) => setInput({ ...input, password: e.target.value })}
  placeholder="••••••"
  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
/>            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
<input
  id="confirmPassword"
  required
  type="password"
  autoComplete="off"
  value={input.confirmPassword}
  onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
  placeholder="••••••"
  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
/>            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember" className="mr-2 bg-amber-50" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition duration-300">Sign Up</button>

            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-black hover:underline">Log in</Link>
            </p>
          </form>
        </div>

        {/* Right side: Image + Text */}
        <div className="bg-white hidden md:flex w-150 relative items-center justify-center overflow-hidden rounded-3xl p-4">
          <img
            src="../public/logo.png"
            alt="Login Visual"
            className="absolute w-full h-full object-cover rounded-3xl"
          />
          <div className="z-10 absolute bottom-4 left-4 text-white text-center align-bottom">
            <h3 className="text-2xl md:text-3xl font-extralight ">
              Be part of the
              <br />
              <span className="text-3xl font-bold text-rose/60 backdrop-blur-sm drop-shadow-lg bg-black rounded-2xl px-4">community!</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
