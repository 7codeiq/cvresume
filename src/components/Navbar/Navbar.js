import Logo from '../../assets/images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <>
            <header>
                <div>
                    <a href="/cvresume/"><img src={Logo} /></a>
                </div>
                <nav ref={navRef}>
                
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>about</Link></li>
                        <li><Link to='/Portfolio'>portfolio</Link></li>
                        <li><Link to='/Education'>education</Link></li>
                        <li><Link to='/Skills'>Skills</Link></li>
                        <li><Link to='/Contact'>Contact Us</Link></li>

                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </>

    )
}

export default Navbar
