import React from 'react'

const Categorie = ({bg,paragraph,title}) => {
  return (
    <div className='categorie'>
        <img src={bg}></img>
        <div className='categorieDesc'>
            <h1>{title}</h1>
            {(paragraph)?<p>{paragraph}</p>:null}
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Categorie