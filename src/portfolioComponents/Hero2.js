import './hero2.css'
import heroImage from '../portfolioAssets/Image 1.jpg'
import { Component } from 'react'



class Hero2 extends Component {
  render (){
    return(<>
    <div className='hero'>
        <div className='mask'  style={{width:"100%",marginTop:0}}>
            <img className='hero-img' src={heroImage} alt='image1'/>
        </div>
        <div className='content'>
              <h1 >{this.props.heading}</h1>
              <p>{this.props.text}</p>
        </div>   
    </div>
     </>
    )
}}

export default Hero2
