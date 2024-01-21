import React, { useEffect, useState } from 'react'
import Slides from '../Components/Slides';
import Categorie from '../Components/Categorie';
import Item from '../Components/Item';

const Home = () => {
   const [item,setItem]=useState([{check:null}]);
   const [popular,setPopular]=useState([{id:null,img:null,colors:[],label:null}]);
   useEffect(()=>{
    fetch('/api').then(
        res=>res.json()
    ).then(
        data=>{
            setItem(data.categories)
            setPopular(data.popularProducts)
        }
    )
   },[])
  return (
    <>
        <section className='slides'>
           <Slides/>
        </section>
        <section className='categorieSec'>
            {
                item.map(categorie =>{
                    return <Categorie bg={categorie.img} title={categorie.title}/>
                })
            }
        </section>
        <section className='popular'>
            {
               popular.map(item =>{
                    return <Item srcImg={item.img} Id={item.id} Label={item.label} Color={item.colors[0]} />
                })
            }
        </section>
    </>
  )
}

export default Home;