import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg,setSelectedImg]= useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://i.ibb.co/X2pYxtJ/pexels-photo-1304647.webp",
    "https://i.ibb.co/y8Y5ZLG/pexels-cottonbro-4066290.jpg"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>{'\u20B9'}599</span>
        <p>Introducing our classic white cotton t-shirt, a timeless staple for any wardrobe. 
          Made from soft, breathable cotton, this tee is designed for comfort and versatility. 
          With a relaxed fit and a clean, crisp design, it's perfect for everyday wear, whether you're running errands,
           hanging out with friends, or just lounging around. Pair it with your favorite jeans, shorts, or even a flowy 
           skirt for a chic, effortless look. 
          And with its durable construction and easy care, this tee is sure to become a trusted favorite in your wardrobe.</p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon/> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon/> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon/> ADD TO COMPARE
            </div>
          </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info1">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          </div>
  )
}

export default Product