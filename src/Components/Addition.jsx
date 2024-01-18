import React from 'react'

const Addition = () => {
  return (
    <div className='addition'>
        <h1>Order Summary</h1>
        <p>sub-total0<span> 80$</span></p>
        <p>shipping fee  <span>5$</span></p>
        <p>shipping discount  <span>-5$</span></p>
        <h2>Total <span>80$</span></h2> 
        <button>CheckOut</button>
    </div>
  )
}

export default Addition