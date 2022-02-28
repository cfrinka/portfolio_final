import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className='footer__logo'>LOGO</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><BsFacebook /></a>
                <a href="https://instagram.com"><BsInstagram /></a>
                <a href="https://twitter.com"><BsTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Developed by Carlos Frinka Neto</small>
                <small>Design by <a href=" https://www.youtube.com/channel/UCL8l_VxCAN0jOpaLaRAm8sQ">Egator</a></small>
            </div>
        </footer>
    )
}

export default Footer