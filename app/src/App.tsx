import Login from "./components/Login"
import Signup from "./components/Signup"
import Main from "./components/Main"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Main/>}/>
    </Routes>
  )
}

export default App