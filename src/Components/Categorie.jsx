import React from 'react'
import { Link } from 'react-router-dom'

const Categorie = ({bg,paragraph,title}) => {
  return (
    <div className='categorie'>
        <img src={bg}></img>
        <div className='categorieDesc'>
            <h1>{title}</h1>
            {(paragraph)?<p>{paragraph}</p>:null}
            <Link to='/shop'><button>SHOP NOW</button></Link>
        </div>
    </div>
  )
}

export default Categorie