import React, { useState,useEffect } from 'react'
import Item from '../Components/Item'
import contextShare from '../Fonction/contextShare'

export const Shop = () => {
    const [item,setItem]=useState([{img:null,id:null,label:null,colors:[]}]);
   useEffect(()=>{
    fetch('/api').then(
        res=>res.json()
    ).then(
        data=>{
            setItem(data.popularProducts)
        }
    )
   },[])
  return (
    <div>
        <div className='shopHeader'>
            <h1>Shop</h1>
            <div className='filterContainer'>
                <div className='filters fil1'>
                    <p>Filter : </p>
                    <select id='colorFilter'>
                        <option value='white'>White</option>
                        <option value='black'>Black</option>
                        <option value='yellow'>Yellow</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                    <select id='sizeFilter'>
                        <option value='xs'>XS</option>
                        <option value='s'>S</option>
                        <option value='m'>M</option>
                        <option value="l">L</option>
                    </select>
                </div>
                <div className='filters fil2'>
                    <p>Filter Products:</p>
                    <select id='orderFilter'>
                        <option value='lifo'>Newest</option>
                        <option value='fifo'>Oldest</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='popular'>
            {
                item.map(i =>{
                    return <Item srcImg={i.img} Id={i.id} Label={i.label} Color={i.colors[0]} />
                })
            }
        </div>
    </div>
  )
}
