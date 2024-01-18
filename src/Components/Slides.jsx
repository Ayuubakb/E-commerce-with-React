import React from 'react'
import SlideItem from './SlideItem';
import { sliderItems } from '../data';
import { useState,useEffect } from 'react';

const Slides = () => {
    const slide=document.querySelectorAll('.slideItem');
    const [position,setPosition]=useState(0);
    const [direction,setDirection]=useState();

    const handleRight=()=>{
        console.log(sliderItems.length)
        if(position < sliderItems.length-1){
            setPosition(p=>p+1);
            setDirection('right')
        }
    }
    const handleLeft=()=>{
        if(position > 0){
            setPosition(p=>p-1);
            setDirection('left')
        }
    }
    
    useEffect(()=>{
        if(direction === 'right'){
            slide.forEach(element => {
                element.style.transform=`translateX(-${position*100}%)`
            });
        }else{
            slide.forEach(element => {
                element.style.transform=`translateX(-${position*100}%)`
            });
        }
    },[position])

  return (
    <>
        <div className='slideIt left' onClick={handleLeft} id='leftDir'><i className="fa-solid fa-arrow-left fa-xl"></i></div>
            <div className='slideContainer'>
            {   
            sliderItems.map(slide=>{
                return <SlideItem srcImg={slide.img} title={slide.title} desc={slide.desc} bg={slide.bg} key={slide.id}/>
            })
            }
            </div>
        <div className='slideIt right' onClick={handleRight} id='rightDir'><i className="fa-solid fa-arrow-right fa-xl"></i></div>
    </>
  )
}

export default Slides