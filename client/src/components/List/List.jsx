import React from 'react'
import Card from '../Card/Card'
import "./List.scss"

const List = () => {

    const data = [
        {
          id:1,
          img: "https://i.ibb.co/GVKQxPS/pexels-photo-8532616.webp",
          img2:"https://i.ibb.co/Hh0JSDX/pexels-photo-9558233.webp",
          title:"Black Tshirt",
          isNew:true,
          oldPrice: 519,
          price:412,
        },
        {
          id:2,
          img: "https://i.ibb.co/9vWNvX4/pexels-photo-20374524.webp",
          img2:"https://i.ibb.co/T0yV5BB/pexels-photo-17399230.webp",
          title:"Blue Tshirt",
          isNew:true,
          oldPrice: 619,
          price:412,
        },
        {
          id:3,
          img: "https://i.ibb.co/X2pYxtJ/pexels-photo-1304647.webp",
          img2:"https://i.ibb.co/y8Y5ZLG/pexels-cottonbro-4066290.jpg",
          title:"White Tshirt",
          isNew:true,
          oldPrice: 419,
          price:312,
        },
        {
          id:4,
          img: "https://i.ibb.co/pz6d5hz/pexels-photo-19456422.webp",
          img2:"https://i.ibb.co/4Jzy0Nr/free-photo-of-portrait-of-man-wearing-red-t-shirt.jpg",
          title:"Red Tshirt",
          isNew:true,
          oldPrice: 419,
          price:152,
        },
      ]

  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id} />
    ))}</div>
  )
}

export default List