import "./Skills.css";
import { Navbar } from "../../components/index";
const Skills = () => {
  return (
    <>
      <div className="Skills">
        <Navbar />
        <h1>My Skills</h1>

        <div className="box-skills">
          <div className="row-skils">
            <div className="html">
              <h4>Html , css , js</h4>
              <p>I can design a complete website using html css java script</p>
            </div>
            <div className="css">
              <h4>React Js</h4>
              <p>
                Rely entirely on react-js in your design, which gives you speed
                and flexibility
              </p>
            </div>
          </div>

          <div className="row-skils">
            <div className="html">
              <h4>React Native</h4>
              <p>I develop a complete mobile application using React Native</p>
            </div>
            <div className="css">
              <h4>Git , Git Hub</h4>
              <p>I can upload the site to github hosting using git commands</p>
            </div>
          </div>

          <div className="row-skils">
            <div className="html">
              <h4>php , mysql</h4>
              <p>I can work with mysql database using php</p>
            </div>
            <div className="css">
              <h4>Security</h4>
              <p>
                Checking the site for vulnerabilities and patching them, which
                increases the protection of site data
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
