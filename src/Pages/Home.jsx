import React from 'react'
import Slides from '../Components/Slides';
import Categorie from '../Components/Categorie';
import { categories,popularProducts } from '../data';
import Item from '../Components/Item';

const Home = () => {
   
  return (
    <>
        <section className='slides'>
           <Slides/>
        </section>
        <section className='categorieSec'>
            {
                categories.map(categorie =>{
                    return <Categorie bg={categorie.img} title={categorie.title}/>
                })
            }
        </section>
        <section className='popular'>
            {
               popularProducts.map(item =>{
                    return <Item srcImg={item.img} />
                })
            }
        </section>
    </>
  )
}

export default Home;