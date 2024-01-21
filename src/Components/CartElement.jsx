import React,{useContext} from 'react';
import contextShare from '../Fonction/contextShare';

const CartElement = ({Img,nbre,id,size,Color,Label}) => {
    const conShare=useContext(contextShare);
    const addNumber=()=>{
        conShare.setAddedItems(conShare.addedItems.map((a)=>{
            if(a.id==id && a.color==Color && a.size==size) a.number++;
            return a;
        }))
    }
    const minusNumber=()=>{
        conShare.setAddedItems(conShare.addedItems.map((a)=>{
            if(a.id==id && a.color==Color && a.size==size) a.number--;
            return a;
        }))
        conShare.setAddedItems(conShare.addedItems.filter((a)=>{return a.number >0 }))
    }
  return (
    <div className='cartElement'>
        <div className='cartImg'>
            <img src={Img} alt='item image'/>
        </div>
        <div className='cartInfos'>
            <h1>Product: <span>{Label}</span></h1>
            <h1>ID: <span>{id}</span></h1>
            <div style={{backgroundColor:Color}}></div>
            <h1>SIZE: <span>{size.toUpperCase()}</span></h1>
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