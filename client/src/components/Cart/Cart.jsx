import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
          id:1,
          img: "https://i.ibb.co/GVKQxPS/pexels-photo-8532616.webp",
          img2:"https://i.ibb.co/Hh0JSDX/pexels-photo-9558233.webp",
          title:"Black Tshirt",
          desc:"Black Cotton Tshirt",
          isNew:true,
          oldPrice: 519,
          price:412,
        },
        {
            id:3,
            img: "https://i.ibb.co/X2pYxtJ/pexels-photo-1304647.webp",
            img2:"https://i.ibb.co/y8Y5ZLG/pexels-cottonbro-4066290.jpg",
            title:"White Tshirt",
            desc:"White Cotton Tshirt",
            isNew:true,
            oldPrice: 419,
            price:312,
          }
    ]

  return (
    <div className='cart'>
        <h1>Products in your Cart </h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 * {'\u20B9'}{item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>{'\u20B9'}599</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>

  )
}

export default Cart