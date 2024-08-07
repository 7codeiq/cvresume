import React from 'react'
import './Header.css'
import {Navbar} from '../components/index'
import Person from '../assets/images/man-1.png'
const Header = () => {
    return (
        <>
            <div className='header'>
                <Navbar/>

                <div className='hero'>
                
                    <div className='text-hero'>
                        <h1>مرتـضـــى محمـــد </h1>
                        <h3>Full-Stack <span>Developer</span></h3>
                        <button><a href='https://c.top4top.io/f_1oqYu2KfyoUmMKffbSmHfQ/1668335053/25026s2vg1.pdf'>Download CV</a></button>
                    </div>

                    <div className='img-hero'>
                        <img src={Person} alt='photo' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
