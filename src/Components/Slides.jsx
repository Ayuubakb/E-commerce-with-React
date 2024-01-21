import React from 'react'
import SlideItem from './SlideItem';
import { useState,useEffect } from 'react';

const Slides = () => {
    const slide=document.querySelectorAll('.slideItem');
    const [sliderItems,setItem]= useState([{}]);
    const [position,setPosition]=useState(0);
    const [direction,setDirection]=useState();

    useEffect(()=>{
        fetch('/api').then(
          res=>res.json()
        ).then(
            data=>{
                setItem(data.sliderItems)
            }
        ) 
      },[])

      
    const handleRight=()=>{
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
            sliderItems.map(i=>{
                return <SlideItem srcImg={i.img} title={i.title} desc={i.desc} bg={i.bg} key={i.id}/>
            })
            }
            </div>
        <div className='slideIt right' onClick={handleRight} id='rightDir'><i className="fa-solid fa-arrow-right fa-xl"></i></div>
    </>
  )
}

export default Slides