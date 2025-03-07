import React from 'react'
import logo from "../images/logo.png"
import searchImg from "../images/search.png"
import menuImg from "../images/menu.png"
import userImg from "../images/user.png"

const Navbar = () => {
  return (
    <div className='flex items-center p-3 border border-b-gray-300'>
      <img src={logo} className="w-24 h-16 ml-10"/>
      <div className='ml-80 flex items-center rounded-3xl border border-gray-300 p-3 shadow-lg'>
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Place" required /> |
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Date" required /> |
        <input type="text" className="text-gray-900 text-sm rounded-3xl block w-28 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Add Guests" required />
        <img src={searchImg} className='w-8 h-8'/>
      </div>
      <div className='flex items-center border border-spacing-1 rounded-full p-2 ml-80'>
        <img src={menuImg} className='w-5 h-5'/>
        <img src={userImg} className='w-5 h-5'/>
      </div>
    </div>
  )
}

export default Navbar