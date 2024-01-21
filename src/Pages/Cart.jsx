import React from 'react'
import { Link } from 'react-router-dom'
import CartElement from '../Components/CartElement'
import Addition from '../Components/Addition'
import { useContext } from 'react';
import contextShare from '../Fonction/contextShare';

const Cart = () => {
    const conShare=useContext(contextShare);
  return (
    <section className='Cart'>
        <div className='headCart'>
            <div className='head'>
                <h1>YOUR BAG</h1>
            </div>
            <div className='bottom'>
                <div><Link to='/shop'><button className='firstBtn'>Continue Shopping</button></Link></div>
                <div className='pContainer'>
                    <p>Shopping Bag</p>
                    <p>Your Wishlist</p>
                </div>
                <div><Link to='/'><button>CheckOut</button></Link></div>
            </div>
        </div>
        <div className='bottomCart'>
            <div className='cartElemContainer'>
                {   
                (conShare.addedItems.length !== 0 )?
                    conShare.addedItems.map(con=>{
                      return  <CartElement Img={con.img} nbre={con.number} id={con.id} size={con.size} Color={con.color} Label={con.label}/>
                    })
                :<h1 style={{textAlign:'center', fontFamily:'Trebuchet MS',marginTop:'60px'}}>NO ITEMS ADDED YET</h1>
                }
            </div>
            <Addition />
        </div>
    </section>
  )
}

export default Cart