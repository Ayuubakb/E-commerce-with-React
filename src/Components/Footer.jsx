import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='div1'>
            <h1>Ayoub's Store</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate quod eaque et modi molestias, aliquid officia veritatis. Iste corrupti dolor repellendus sit asperiores earum quo quos totam repellat autem.</p>
            <div className='socials'>
                <i class="fa-brands fa-facebook fa-lg"></i>       
                <i class="fa-brands fa-instagram fa-lg"></i>
                <i class="fa-brands fa-x-twitter fa-lg"></i>
            </div> 
        </div>
        <div className='div2'>
            <h1>Usefull Links</h1>
            <div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Men's Fashion</li>
                        <li>Accessories</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Cart</li>
                        <li>Women's Fashion</li>
                        <li>WishList</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='div3'>
            <h1>Contact</h1>
            <p>581° Boaakaz Mhamid Marrakech</p>
            <br></br>
            <p>+212700821400</p>
            <br></br>
            <p>ayoubakoubri@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer