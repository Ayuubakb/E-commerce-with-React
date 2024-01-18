import React from 'react';
import {sliderItems } from '../data' 


const SlideItem = ({srcImg,title,desc,bg}) => {
  return (
    <div className='slideItem' style={{backgroundColor:'#'+bg+''}}>
        <div className='imgs'>
            <div className='bubble' ></div>
            <div className='imgContainer'>
                <img src={srcImg} alt='descriptifImage'/>
            </div>
        </div>
        <div className='writing'>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default SlideItem