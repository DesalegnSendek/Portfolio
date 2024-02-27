import { Link } from 'react-router-dom'
import './pricingCard.css'
import React from 'react'
import Contact from '../pages/Contact'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>

            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                    <p className='btc'>$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- 3 Days -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/Contact" className='btn'>PURCHASE NOW.</Link>
            </div>

            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                    <p className='btc'>$ 200</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- 3 Days -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/Contact" className='btn'>PURCHASE NOW.</Link>
            </div>

            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                    <p className='btc'>$ 300</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- 3 Days -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/Contact" className='btn'>PURCHASE NOW.</Link>
            </div>

         </div>
    </div>
  )
}

export default PricingCard