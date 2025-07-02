import Home from "./pages/Home/Home"
import Login from "./pages/login/Login"
import Singup from "./pages/signup/Singup"
import { Route ,Routes,Navigate} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Test from "./pages/test/Test";
import { useAuthContext } from "./context/authContext";


function App() {
  const {authUser} = useAuthContext()

  return (
    <div className="w-full h-screen flex items-center justify-center">
<Routes>
  <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" /> } />
  <Route path="/login" element={authUser ? <Navigate to="/" /> :<Login />} />
  <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Singup />} />
  <Route path="/test" element={<Test />} />
</Routes>
<ToastContainer 
position="top-center"
/>

    </div>
  )
}

export default App
