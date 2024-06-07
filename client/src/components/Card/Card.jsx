import React from 'react'
import {Link} from "react-router-dom"
import "./Card.scss"

const Card = ({item}) => {
  return (
    <Link className='link' to={'./product/${item.id}'}>
        <div className='card'>
            <div className="image">
                <img src={item.img} alt="" className="mainImg"/>
                <img src={item.img2} alt="" className="secondImg"/>
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>{'\u20B9'}{item.oldPrice}</h3>
                <h3>{'\u20B9'}{item.price}</h3>
            </div>
        </div>
    </Link>
    
  )
}

export default Card