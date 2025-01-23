import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
            </div>
            <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
            </div>
            <div className="item">
            <h1>About</h1>
            <span>
            Arden is a contemporary men's clothing brand dedicated to timeless elegance and modern sophistication. With a focus on quality craftsmanship and sustainable materials, Arden offers a curated collection of versatile, stylish pieces designed to elevate everyday wardrobes. Discover effortlessly chic fashion that embodies both comfort and luxury with Arden.
            </span>
            </div>
            <div className="contactus">
            <h1>Contact</h1>
            <span>
            <Link className='link' to="mailto:service@arden.in">Email Us</Link>     <Link className='link' to="tel:+911234567890">Call Us</Link>
            </span>
            <p>
        <strong>Office Location:</strong>
        <address>
           Uttarakhand, 248001
        </address>
    </p>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
            <Link className ="link" to="/">Arden</Link>
                <span className="copyright">© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="images/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer