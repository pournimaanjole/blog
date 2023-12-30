import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from './logo1.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {

   
    
   

    

    return (
        <div>
            <div className='navbar'>
                <div className='navlogo'>
                    <img src={logo} />
                    <p>E-commers</p>

                </div>
                <ul className='navlist'>
                    <li ><Link to='/' style={{ textDecoration: "none" }}>shop </Link>  </li>

                </ul>

                


                <div className='login-add-tocard'>

                    <Link to='/login'>  <button type='button'>login</button></Link>

                    <div> <Link to='/order'>   <FontAwesomeIcon icon={faCartShopping} className='cart' /></Link> </div>

                    <div className='nav-cart-cout'>0</div>



                </div>
            </div>

           
        </div>
    )
}

export default Navbar
