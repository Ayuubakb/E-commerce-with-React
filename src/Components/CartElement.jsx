import React,{useContext, useEffect} from 'react';
import contextShare from '../Fonction/contextShare';

const CartElement = ({Img,nbre}) => {
    const conShare=useContext(contextShare);
    const addNumber=()=>{
        conShare.setAddedItems(conShare.addedItems.map((a)=>{
            if(a.img === Img) a.number++;
            return a;
        }))
    }
    const minusNumber=()=>{
        conShare.setAddedItems(conShare.addedItems.map((a)=>{
            if(a.img === Img) a.number--;
            return a;
        }))
    }
    useEffect(()=>{
        conShare.setAddedItems(conShare.addedItems.filter((a)=>{return a.number >0 }))
    },[minusNumber])
  return (
    <div className='cartElement'>
        <div className='cartImg'>
            <img src={Img} alt='item image'/>
        </div>
        <div className='cartInfos'>
            <h1>Product: <span>Jessie Thunder Show</span></h1>
            <h1>ID: <span>25KJ565M</span></h1>
            <div></div>
            <h1>SIZE: <span>M</span></h1>
        </div>
        <div className='cartOptions'>
            <div className='plusMinus'>
                <h1><span onClick={addNumber}>+</span> {nbre} <span onClick={minusNumber}>-</span></h1>
            </div>
            <div className='itemPrice'>
                <h2>50 $</h2>
            </div>
        </div>
    </div>
  )
}

export default CartElement