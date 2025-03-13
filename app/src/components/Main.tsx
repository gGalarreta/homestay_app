import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Home from './Home'

const Main = () => {

  const [hotels, setHotels] = useState([])
  const [currency, setCurrency] = useState('')

  const getHotels = async () => {
    const baseUrl = 'https://airbnb13.p.rapidapi.com/search-geo';
    const params: Record<string, string> = {
      ne_lat: '52.51',
      ne_lng: '13.41',
      sw_lat: '52.41',
      sw_lng: '13.31',
      checkin: '2025-05-12',
      checkout: '2025-05-13',
      adults: '1',
      children: '0',
      infants: '0',
      pets: '0',
      page: '1',
      currency: currency || 'USD'
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(params).toString();
    const options = {
      method: 'GET',
      headers: {

      }
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHotels(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHotels()
  }, [])

  return (
    <div>
      <Navbar setCurrency={setCurrency}/>
      <Menubar/>
      <Home hotels={hotels} currency={currency}/>
    </div>
  )
}

export default Main