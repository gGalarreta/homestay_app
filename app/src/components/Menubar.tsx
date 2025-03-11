import React from 'react'
import houseIcon from '../images/house.png'
import campingIcon from '../images/camping.png'
import cabinIcon from '../images/cabin.png'
import containerIcon from '../images/container.png'
import roomIcon from '../images/room.png'
import skiingIcon from '../images/skiing.png'
import topIcon from '../images/top.png'
import viewIcon from '../images/view.png'

const Menubar = () => {
  return (
    <div className='flex pt-8 '>
      <div className='ml-11 cursor-pointer'>
        <img src={houseIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>house</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={cabinIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Cabin</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={containerIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Container</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={roomIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Room</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={skiingIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Skiing</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={topIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Top</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={viewIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>View</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={campingIcon} className='w-6 h-6'/>
        <h1 className='text-xs font-semibold hover:underline'>Camping</h1>
      </div>
    </div>
  )
}

export default Menubar