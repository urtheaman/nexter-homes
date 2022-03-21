import React from 'react'
import HomeCard from '../components/HomeCard'
import HOMES_DATA from '../homes.data.json'

const Homes: React.FC = () => {
  return (
    <div className='homes'>
      {HOMES_DATA.map(({name, area, imageSource, price, location, rooms}, index) => {
        return <HomeCard key={index} area={area} imageSource={imageSource} location={location} name={name} price={price} rooms={rooms} />
      })}
    </div>
  )
}

export default Homes