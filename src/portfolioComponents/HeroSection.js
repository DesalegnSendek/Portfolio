import './heroSection.css';
import background from '../portfolioAssets/background 3.jpg'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import  Navbar  from './Navbar';

const HeroSection = () => {
  return (
    <>
    <div className='hero'>
        <div className='mask'  >
            <img className='hero-img' src={background} alt='image1'/>
            <div className='content'>
                <p>I am a FreeLancer,</p>
                <h1>Software Engineer and Web developer.</h1>
                <Link to="/Products"><button className='btn'>Projects</button></Link>
                <Link to="/Contact"><button className='btn btn-light'>Contact</button></Link>
            </div> 
        </div>
    </div>
    
     </>
  )
}

export default HeroSection