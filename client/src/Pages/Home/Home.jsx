import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'


const Home = () => {
  return (
    <div className='home'>
        <Slider/>
        <FeaturedProduct type="featured"/>
        <Categories/>
        <FeaturedProduct type="trending" />
    </div>
  )
}

export default Home