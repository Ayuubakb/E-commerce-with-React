import React, { useEffect } from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useContext } from 'react'
import contextShare from '../Fonction/contextShare'

const Nav = () => {
    const conShare=useContext(contextShare)
  return (
    <>
    <div className='NavBar'>
        <div className='solde'>
            <h2>Super Deal Free Shipping On Orders Over 50$</h2>
        </div>
        <nav>
            <div className='searchBar'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder='search...' name='searchBar' id='searchBar'/>
            </div>
            <div>
                <Link to='/' style={{textDecoration:'none'}}><h1>Ayoub's Store</h1></Link>
            </div>
            <div>
                <ul>
                    <Link to='/Register'><li>Register</li></Link>
                    <Link to='/SignUp'><li>Sign Up</li></Link>
                    <Link to='/Cart'><li><i class="fa-solid fa-cart-shopping" style={{color:'rgba(30,30,30)'}}></i><span>{conShare.addedItems.length}</span></li></Link>
                </ul>
            </div>
        </nav>
    </div>
    <Outlet/>
    </>
  )
}

export default Nav