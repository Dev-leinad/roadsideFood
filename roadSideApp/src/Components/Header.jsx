// import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";


const Header = () => {
  return (
    <header>
    <div className="nav__brand">
    <a href="index.html">Road Side Foods</a>
    </div>
     <div className="nav__links">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="# ">About us</a></li>
        <li><a href="#">Contact us</a></li>
        </ul>
     </div>

     <div className="nav__icon">
       <FaCartShopping 
       role='button'
        style={{color: 'white'}} 
        />
       <FaRegCircleUser 
       role="button"
        style={{color: 'white'}}
         />
     </div>
    </header>
  )
}

export default Header
