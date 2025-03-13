import React from 'react'
import { Link } from 'react-router-dom'

interface hotelProps {
  hotels: any
  currency?: any
}

const Home = (props: hotelProps) => {
  return (
    <div className='grid grid-cols-4'>
    {
      // You don't always need a fragment — it's only needed if you are returning multiple elements without a parent.
      props.hotels.map((data: any) => {
        return <>
        <Link to="/details" state={{data: data}}>
          <div key={data.id} className="max-w-sm rounded-t-xl overflow-hidden w-72 h-11/12 ml-11 mt-7">
            <img src={data.images[0]} className="w-72 h-72 rounded-xl"  alt="Sunset in the mountains"/>
            <div className="py-1">
              <h1 className="font-semibold">
                {data.address}
              </h1>
              <p className="text-gray-700 text-sm">
                {data.name}
              </p>
              <h1 className="text-gray-500 text-sm">
                {data.type}
              </h1>
              <h1 className="font-semibold">
                <span className='font-normal'>
                  {props.currency}
                </span>
                {data.price.rate}
              </h1>
            </div>
          </div>
        </Link>
        </>
      })
    }
    </div>
  )
}

export default Home