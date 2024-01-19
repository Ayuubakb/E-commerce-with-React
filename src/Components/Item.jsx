import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import contextShare from '../Fonction/contextShare';
import { Link } from 'react-router-dom';

const Item = ({srcImg}) => {
 const conShare= useContext(contextShare)
 const [clicked,setClicked]=useState(false);
 const addCart=()=>{
    setClicked(c=> !c );
 }
 useEffect(()=>{
  clicked?conShare.setAddedItems(a => {return [...a,{img:srcImg,number:1}]}):conShare.setAddedItems(conShare.addedItems.filter(item=>{return item.img!==srcImg}));
 },[addCart])
  return (
    <div className='item'>
        <img src={srcImg}></img>
        <div className='choices'>
            {!clicked?<i class="fa-solid fa-cart-shopping fa-xl" onClick={addCart}></i>:<i class="fa-solid fa-x fa-xl" onClick={addCart}></i>}
            <Link to={`/singleItem?img=${srcImg}`}><i class="fa-solid fa-magnifying-glass fa-xl"></i></Link>
            <i class="fa-regular fa-heart fa-xl"></i>
        </div>
    </div>
  )
}

export default Item