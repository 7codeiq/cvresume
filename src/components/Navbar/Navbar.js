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
                
                        <li><Link to='/'>الرئيسيـة</Link></li>
                        <li><Link to='/About'>نبـذة عنـي</Link></li>
                        <li><Link to='/Portfolio'>اعمالـي</Link></li>
                        <li><Link to='/Education'>الدراسـة</Link></li>
                        <li><Link to='/Skills'>الخبـرات</Link></li>
                        <li><Link to='/Contact'>التواصـل معـي</Link></li>

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
