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
                <h1>أتصــل بــي</h1>
            </div>

            <div className='flex-contact'>
                <div className='col-contact'>
                    <FaEnvira className='FaEnvira'/>
                    <h3>العنـوان : بغـداد , العـراق</h3>
                    <h3>العـمر : 25 سنـة</h3>
                    <h3>المواليـد : 1998/11/29</h3>
                </div>
                <div className='col-contact'>
                    <FaComments className='FaComments'/>
                    <h3>رقـم الهاتـف : 07733013115</h3>
                    <h3>رقـم الهاتـف : 07509151360</h3>
                    <h3>الايميــل : mortada.teach@outlook.com</h3>

                </div>
                <div className='col-contact'>
                    <FaGlobe className='FaGlobe'/>
                    <h3>الفيسبـوك </h3>
                    <a href="https://www.facebook.com/mortadha.dev" target='_blank'> <FaFacebookF className='social'/></a>
                    <h3>لينكـد ان </h3>
                    <a href="https://www.linkedin.com/in/mortada-al-jazaery-91970922b/" target='_blank'> <FaLinkedinIn className='social'/></a>
                    <h3>تويتـر </h3>
                    <a href="https://twitter.com/Mrr_hm" target='_blank'> <FaTwitter className='social'/></a>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Contact
