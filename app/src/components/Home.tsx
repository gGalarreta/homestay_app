import React from 'react'
import room from '../images/room.jpg'

const Home = () => {
  return (
    <div className="max-w-sm rounded-t-xl overflow-hidden w-72 h-96 ml-11 mt-7">
      <img src={room} className="w-72 h-72 rounded-xl"  alt="Sunset in the mountains"/>
      <div className="py-1">
        <h1 className="font-semibold">Place</h1>
        <p className="text-gray-700 text-sm">
          Name
        </p>
        <h1 className="text-gray-500 text-sm" >Date</h1>
        <h1 className="font-semibold" >Price</h1>
      </div>
    </div>
  )
}

export default Home