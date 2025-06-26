import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <>
    <img
          src="../public/logo.png"
          alt="Login Visual"
          className="-z-1 absolute w-full h-full object-cover"
        />
    <div className="bg-gray-100  w-[calc(100vw-200px)] h-[calc(100vh-50px)] flex p-2 rounded-3xl">
      {/* Left side: Login Form */}
      <div className="z-10 w-full bg-gray-100 md:w-1/2 flex flex-col justify-center items-center p-8 md:p-20">
        <h2 className="text-3xl font-bold mb-2 ">Login</h2>
        <p className="text-gray-900 mb-6">Enter your credentials to get in</p>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="aimerpaix@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2 bg-amber-50" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition duration-300"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Not a member?{" "}
            <Link to="/signup" className="font-semibold text-black hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>

      {/* Right side: Image + Text */}
      <div className=" bg-gray-100 hidden md:flex w-150 relative items-center justify-center overflow-hidden rounded-3xl p-4">
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
  );

}
