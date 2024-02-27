import './workCard.css'
import pro1 from '../portfolioAssets/Image 1.jpg'

import { NavLink } from 'react-router-dom'

//images
import educationImg from '../portfolioAssets/education.jpg'
import commerceImg from '../portfolioAssets/ecommerce.jpg'
import blogImg from '../portfolioAssets/blog.jpg'
import govtImg from '../portfolioAssets/government.jpg'
import portfolioImg from '../portfolioAssets/portfolio.jpg'
import nonprofitImg from '../portfolioAssets/nonprofit.jpg'
import businessImg from '../portfolioAssets/business.jpg'
import newsImg from '../portfolioAssets/news.jpg'
import membershipImg from '../portfolioAssets/membership.jpg'



import React from 'react'
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>

            <div className='project-card'>
                    <img src={commerceImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>E-commerce Website Design</h2>
                    <div className='project-details'>
                        <p>
                            Turn clicks into conversions. Ignite your online sales
                            with a stunning, user-friendly e-commerce website designed
                            to convert browse to buy. We build platforms that showcase
                            your products beautifully and guide customers seamlessly 
                            through checkout. Get ready to watch your business boom!
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={businessImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Business websites Design</h2>
                    <div className='project-details'>
                        <p>
                           Build a digital presence that reflects your brand's 
                           professionalism and expertise. Our team crafts bespoke
                           business websites that tell your story, highlight your
                           services, and attract qualified leads. Stand out from
                           the competition and win the trust of your clients with
                           a website that means business.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={newsImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>News websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Deliver the story, captivate the audience. We 
                            design fast-loading, visually engaging news 
                            websites that keep readers informed and coming 
                            back for more. With intuitive content management
                            systems and real-time updates, your news will 
                            always be front and center. Break the story, 
                            captivate the audience.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={blogImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Blog websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Share your voice, amplify your reach. We craft vibrant,
                            engaging blog platforms that capture your unique style
                             and captivate your audience. With intuitive back-end 
                             tools and SEO optimization, your voice will resonante
                              across the digital landscape. Let your story go viral.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={portfolioImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Portfolio websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Let your work do the talking. Showcase your talent and
                            expertise with a stunning portfolio website designed
                            to impress. We create platforms that present your 
                            projects in a captivating light, attracting your 
                            dream clients and propelling your career forward.
                            Get discovered, get hired.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={membershipImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Membership websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Build a vibrant online community, cultivate exclusivity. 
                            We design and develop secure, engaging membership websites
                            that foster connection and drive value. From gated content
                            to member forums, we create a digital space where your community
                            thrives. Build loyalty, generate recurring revenue, and watch your
                            community blossom.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={nonprofitImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Non-profit websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Inspire action, make a difference. We craft compelling
                            non-profit websites that resonate with donors and 
                            volunteers, amplifying your mission and driving impact.
                            With clear calls to action and powerful storytelling, 
                            we help you change the world, one click at a time. Touch 
                            hearts, raise funds, make a difference.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div> 

            <div className='project-card'>
                    <img src={govtImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Government websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Enhance transparency, improve accessibility. We develop
                            user-friendly, information-rich government websites that
                            streamline services and connect citizens with their public
                            officials. Foster trust, improve citizen engagement, and 
                            bridge the digital divide with a website that serves all.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>

            <div className='project-card'>
                    <img src={educationImg} alt='project 1' style={{width:"100%"}}/>
                    <h2 className='project-title'>Educational websites Design</h2>
                    <div className='project-details'>
                        <p>
                            Empower educators, engage students. We create interactive,
                            dynamic educational platforms that enhance learning and 
                            inspire curiosity. From online courses to gamified learning
                            experiences, we build tools that transform education and ignite
                            potential. Learn smarter, achieve more.
                        </p>
                        <div className='pro-btn'>
                            <NavLink to="/products" className="btn">View</NavLink>
                            <NavLink to="/products" className="btn">Source</NavLink>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}


export default Work