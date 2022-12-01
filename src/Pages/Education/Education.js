import './Education.css'
import {Navbar} from '../../components/index'
import Profile1 from '../../assets/images/profile.jpg'
import Profile3 from '../../assets/images/profile3.jpg'


const Education = () => {
    return (
        <>
            <div className="Education">
                <Navbar/>

                <h1>Education</h1>


                <div className="skils">
                    <div>
                        <p>2022 / 2 / 30 - 2022 / 4 / 20</p>
                    </div>
                    <div>
                        <img src={Profile1}/>
                    </div>
                    <div>
                        <p>HTML AND CSS</p>
                        <span>Youtube</span>
                    </div>
                    <div>
                        <h5>I studied html , css</h5>
                        <p>I have studied html css with the best teachers on the <br/>  YouTube platform and gained the required experience in this field <br/>  and have applied more than one project to it</p>
                    </div>
                </div>

                <div className="skils">
                    <div>
                        <p>2022 / 4 / 20 - 2022 / 8 / 1</p>
                    </div>
                    <div>
                        <img src={Profile3}/>
                    </div>
                    <div>
                        <p>JAVA SCRIPT</p>
                        <span>Udemy</span>
                    </div>
                    <div>
                        <h5>I studied java script</h5>
                        <p>I learned javascript from the best teachers on the udemy <br/>  platform and gained the required experience in this field and  <br/>  have applied it to more than one project</p>
                    </div>
                </div>
        
                <div className="skils">
                    <div>
                        <p>2022 / 8 / 1 - 2022 / 10 / 25 </p>
                    </div>
                    <div>
                        <img src={Profile1}/>
                    </div>
                    <div>
                        <p>REACT JS</p>
                        <span>Youtube</span>
                    </div>
                    <div>
                        <h5>I studied React js on youtube</h5>
                        <p>I learned react js from the best teachers on the YouTube  <br/> platform, and gained the required experience in this field, and  <br/> I applied it to more than one project.</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Education
