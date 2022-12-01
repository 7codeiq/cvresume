import  './Skills.css'
import {Navbar} from '../../components/index'
const Skills = () => {
    return (
        <>
            <div className="Skills">
                <Navbar/>
                <h1>My Skills</h1>

                
                <div className='box-skills'>
                    <div className='row-skils'>
                        <div className="html">
                            <h4>Html</h4>
                            <p>Master the html language by 90% and work with it with all its characteristics. It is the language that every web designer starts with</p>
                        </div>
                        <div className="css">
                            <h4>css</h4>
                            <p>Dealing with CSS is easier, as it adds aesthetics to the site and makes the site responsive to all screens</p>
                        </div>
                    </div>

                    <div className='row-skils'>
                        <div className="html">
                            <h4>Java Script</h4>
                            <p>Dealing with JavaScript is also simple in the design of the site, as it gives more interactivity to the site, and it is a real programming language</p>
                        </div>
                        <div className="css">
                            <h4>React Js</h4>
                            <p>I currently rely entirely on React because it simply gives a strong speed to the site in addition to the features it provides to me</p>
                        </div>
                    </div>
                    
                    <div className='row-skils'>
                        <div className="html">
                            <h4>php</h4>
                            <p>We always use php in the background because it is the most popular language in the field of back-end because of its ease and popularity</p>
                        </div>
                        <div className="css">
                            <h4>wordpress</h4>
                            <p>I can also deal with WordPress because it is a very popular content system in the field of buying and selling sites because it is characterized by ease</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills
