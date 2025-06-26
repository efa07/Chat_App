import Home from "./pages/Home/Home"
import Login from "./pages/login/Login"
import Singup from "./pages/signup/Singup"
import { Route ,Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Test from "./pages/test/Test";
function App() {

  return (
    <div className="p-4 w-full h-screen flex items-center justify-center">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Singup />} />
  <Route path="/test" element={<Test />} />

</Routes>
<ToastContainer />

    </div>
  )
}

export default App
