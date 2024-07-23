// import React, {useContext} from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Header = () => {
  const { state } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const itemCount = state.items.length;
  

  return (
    <header>
    <div className="nav__brand">
    <Link to='/' >Road Side Foods</Link>
    </div>
     <div className="nav__links">

      <ul>
        <li><Link to ="/">Home</Link></li>
        <li>
        <Link to="/About">About us</Link>
        </li>
        <li>
        <Link to="/Contact">Contact us</Link>
        </li>
        </ul>
     </div>

     <div className="nav__icon">

     <Link to="/Cart"> {itemCount >0 && <span>{itemCount}</span> }<FaCartShopping 
       role='button'
        style={{color: 'white'}} 
        /></Link>
       
       <FaRegCircleUser 
       role="button"
        style={{color: 'white'}}
         />
     </div>
    </header>
  )
}

export default Header
