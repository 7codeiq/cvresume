import "./Skills.css";
import { Navbar } from "../../components/index";
const Skills = () => {
  return (
    <>
      <div className="Skills">
        <Navbar />
        <h1>الخبـــرات</h1>

        <div className="box-skills">
          <div className="row-skils">
            <div className="html">
              <h4>Html , css , js </h4>
              <p>يمكنني تصميم موقع ويب كامل باستخدام html , css , js </p>
            </div>
            <div className="css">
              <h4>React Js</h4>
              <p>
              اعتمد كليا على رياكت Js في تصاميمي ، مما يمنحني السرعة والمرونة
              </p>
            </div>
          </div>

          <div className="row-skils">
            <div className="html">
              <h4>React Native</h4>
              <p>أقوم بتطوير تطبيق جوال كامل باستخدام React Native</p>
            </div>
            <div className="css">
              <h4>Git , Git Hub</h4>
              <p>يمكنني تحميل الموقع إلى استضافة Github باستخدام أوامر Git</p>
            </div>
          </div>

          <div className="row-skils">
            <div className="html">
              <h4>MERN , Node JS</h4>
              <p>استطيع التعامل مع قاعدة بيانات MongoDB باستخدام Express.js</p>
            </div>
            <div className="css">
              <h4>Wordpress</h4>
              <p>
              استطيع بناء موقع كامل  باستخدام Wordpress 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
