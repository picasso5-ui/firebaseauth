import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <ToastContainer />
       <Header />
       <Routes>
       <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={ <Register />} /> 
       </Routes>
       <Footer />

    </>
  )
}

export default App
