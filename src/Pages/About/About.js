import './About.css'
import {Navbar} from '../../components/index'
import ImgOne from '../../assets/images/1.jpg'
const About = () => {
    return (
        <>
            <div className='About'>
                <Navbar/>

                <div className='Biggest'>
                    <div className='Biggest-text'>
                        <h1>About ME</h1>

                        <p>I am a web designer. I have previous work in this field and have uploaded more than one website. <br/> I am a web developer with a high ambition in building the company I work for. <br/> I want to have experience in this field and the field back end Also, Al-Sekiruti, <br/> I want to become a real programmer, despite the circumstances and troubles that I encountered in my beginnings</p>

                        <button><a href='https://c.top4top.io/f_1oqYu2KfyoUmMKffbSmHfQ/1668335053/25026s2vg1.pdf'>DOWNLOAD CV</a></button>
                    </div>
                    <div className='Biggest-img'>
                        <img src={ImgOne} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default About
