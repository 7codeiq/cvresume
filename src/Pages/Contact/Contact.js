import './Contact.css'
import {Navbar} from '../../components/index'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Contact = () => {
    return (
        <>
          <div className="Contact">

            <Navbar/>

            <div className='contact-us'>
                <h1>Contact Us</h1>
            </div>

            <div className='flex-contact'>
                <div className='col-contact'>
                    <FaEnvira className='FaEnvira'/>
                    <h3>Address : Baghdad , Iraq</h3>
                    <h3>Age : 24 Years</h3>
                    <h3>Birth : 1998/11/29</h3>
                </div>
                <div className='col-contact'>
                    <FaComments className='FaComments'/>
                    <h3>Phone : 07733013115</h3>
                    <h3>Phone : 07509151360</h3>
                    <h3>Email : mortada.teach@outlook.com</h3>

                </div>
                <div className='col-contact'>
                    <FaGlobe className='FaGlobe'/>
                    <h3>FaceBook </h3>
                    <a href="https://www.facebook.com/mortadha.dev" target='_blank'> <FaFacebookF className='social'/></a>
                    <h3>Linkedin </h3>
                    <a href="https://www.linkedin.com/in/mortada-al-jazaery-91970922b/" target='_blank'> <FaLinkedinIn className='social'/></a>
                    <h3>Twitter </h3>
                    <a href="https://twitter.com/Mrr_hm" target='_blank'> <FaTwitter className='social'/></a>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Contact
