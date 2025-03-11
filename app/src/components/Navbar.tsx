import React, { useState } from 'react'
import logo from "../images/logo.png"
import searchImg from "../images/search.png"
import menuImg from "../images/menu.png"
import userImg from "../images/user.png"
import Login from './Login'
import Signup from './Signup'

const Navbar = () => {

  const [popUp, setPopUp] = useState(false)
  const [sign, setSign] = useState(false)
  const [login, setLogin] = useState(false)

  const handlePopUp = () => {
    setPopUp(!popUp)
  }

  const handleLogin = () => {
    setLogin(true)
  }

  const handleSignIn = () => {
    setSign(true)
  }

  return (
    <div className='flex items-center p-3 border border-b-gray-300'>
      <img src={logo} className="w-24 h-16 ml-10"/>
      <div className='ml-80 flex items-center rounded-3xl border border-gray-300 p-3 shadow-lg'>
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Place" required /> |
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Date" required /> |
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Guests" required />
        <img src={searchImg} className='w-8 h-8'/>
      </div>
      <div onClick={handlePopUp} className='cursor-pointer flex items-center border border-spacing-1 rounded-full p-2 ml-80'>
        {popUp &&
          <div className='shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 pt-1'>
            <h1 onClick={handleSignIn} className='font-semibold text-sm'>SignUp</h1>
            <hr className='mt-2'/>
            <h1 onClick={handleLogin} className='font-thin text-sm'>Login</h1>
          </div>
        }
        <img src={menuImg} className='w-5 h-5'/>
        <img src={userImg} className='w-5 h-5'/>
        {login && <Login setLogin={setLogin}/> }
        {sign && <Signup setSign={setSign} /> }
      </div>
    </div>
  )
}

export default Navbar