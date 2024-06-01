import React from 'react'
import instargram_icon from '../Assets/instagram_icon.png'
import footer_logo from '../Assets/logo.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whtasapp_icon from '../Assets/whatsapp_icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer Logo" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instargram_icon} alt="Instagram" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="Pintester" />
            </div>
            <div className="footer-icon-container">
                <img src={whtasapp_icon} alt="Whatsapp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer