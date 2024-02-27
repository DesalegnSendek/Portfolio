import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer' >
        <div className='footer-container' >
            <div className='left'>
                <div className='location'>
                    <div >
                        <div>
                            <p>123 housing society.</p>
                            <p>Ethiopia, Addis Ababa</p>
                            <div className='phone'><h4> <a href='callto: 0903231332'>Phone: 0903231332</a></h4></div>
                            <div className='email'><h4><a href='mailto:desalegnsendek2@gmail.com'>Email: desalegnsendek2@gmail.com</a></h4></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>This is Desalegn Sendek. CEO and founder of dEss Technologies.</p>
                <p>I enjoy discussing new projects and design challenges.</p>
                <div className='social-media' style={{display:"flex"}}>
                    <ul style={{display:"flex",margin:"30px"}}>
                        <li style={{display:"flex",margin:"30px"}}><a href='http://www.facebook.com/desalegnsendek' target='_blank'>Facebook</a></li>
                        <li style={{display:"flex",margin:"30px"}}><a href='http://www.telegram.com/@desalegn_sendek' target='_blank'>Telegram</a></li>
                        <li style={{display:"flex",margin:"30px"}}><a href='http://www.twitter.com/desalegnsendek' target='_blank'>twitter</a></li>
                        <li style={{display:"flex",margin:"30px"}}><a href='http://www.linkedIn.com/desalegnsendek' target='_blank'>linkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer