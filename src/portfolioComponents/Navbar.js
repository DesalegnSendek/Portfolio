import { Link } from 'react-router-dom';
import './navbar.css';
import React, { useState } from 'react'
import Hamburgermenu from '../portfolioAssets/Humbergermenu.png'
import crossImage from '../portfolioAssets/xcross.png';
//import pages 


 const Navbar = () => {

    const [hamburgerMenuClick,sethumbergerMenuClick] = useState(false);
    const handleClickEvent = ()=>{
          sethumbergerMenuClick(!hamburgerMenuClick);
    }

    const [color, setColor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY>=100){
         setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener("scroll",changeColor)


  return (
    <div className={color ? "navbar" : "navbar-bg"}>
        
        <Link to="/">
            <h1>dEss Portfolio</h1>
        </Link>

        <ul className={hamburgerMenuClick ? "nav-menu active" : "nav-menu"}>
           
            <li><Link to="/">Home</Link></li>
            
            <li><Link to="/Products">Projects</Link></li>
           
            <li><Link to="/About">About</Link></li>
           
            <li><Link to="/Contact">Contact</Link></li>

            <li><Link to="/LoginSignup">Login</Link></li>

       
        </ul>
        <div className='humberger-menu' onClick={handleClickEvent}>
            {hamburgerMenuClick ? (<img src={Hamburgermenu} alt='image2'/>):(<img src={crossImage} alt=''/>)}
        </div>
    </div>
  )
}
export default Navbar

