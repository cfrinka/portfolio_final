import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/eu.png'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Neto</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt='a picture of me' />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header