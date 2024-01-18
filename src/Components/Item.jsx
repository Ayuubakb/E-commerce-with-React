import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import contextShare from '../Fonction/contextShare';

const Item = ({srcImg}) => {
 const conShare= useContext(contextShare)
 const [clicked,setClicked]=useState(false);
 const addCart=()=>{
    setClicked(c=> !c );
    !clicked?conShare.setAddedItems(a => {return [...a,srcImg]}):conShare.setAddedItems(conShare.addedItems.filter(item=>{return item!==srcImg}));
 }
  return (
    <div className='item'>
        <img src={srcImg}></img>
        <div className='choices'>
            {!clicked?<i class="fa-solid fa-cart-shopping fa-xl" onClick={addCart}></i>:<i class="fa-solid fa-x fa-xl" onClick={addCart}></i>}
            <i class="fa-solid fa-magnifying-glass fa-xl"></i>
            <i class="fa-regular fa-heart fa-xl"></i>
        </div>
    </div>
  )
}

export default Item