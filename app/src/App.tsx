import Login from "./components/Login"
import Signup from "./components/Signup"
import Main from "./components/Main"
import { Routes, Route } from "react-router-dom"
import Detail from "./components/Detail"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/details' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App