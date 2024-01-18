import React from 'react';
import { popularProducts } from '../data';

const CartElement = ({srcImg}) => {
  return (
    <div className='cartElement'>
        <div className='cartImg'>
            <img src={srcImg} alt='item image'/>
        </div>
        <div className='cartInfos'>
            <h1>Product: <span>Jessie Thunder Show</span></h1>
            <h1>ID: <span>25KJ565M</span></h1>
            <div></div>
            <h1>SIZE: <span>M</span></h1>
        </div>
        <div className='cartOptions'>
            <div className='plusMinus'>
                <h1>+ 1 -</h1>
            </div>
            <div className='itemPrice'>
                <h2>50 $</h2>
            </div>
        </div>
    </div>
  )
}

export default CartElement