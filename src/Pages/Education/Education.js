import "./Education.css";
import { Navbar } from "../../components/index";
import Profile1 from "../../assets/images/profile.jpg";
import Profile3 from "../../assets/images/profile3.jpg";

const Education = () => {
  return (
    <>
      <div className="Education">
        <Navbar />

        <h1>الدراســـة</h1>

        <div className="skils">
          <div>
            <p>2022 / 2 / 30 - 2022 / 4 / 20</p>
          </div>
          <div>
            <img src={Profile1} />
          </div>
          <div>
            <p>HTML AND CSS</p>
            <span>Youtube</span>
          </div>
          <div>
            <h5>لقــد درســت html , css</h5>
            <p>
              ‏لقد درست html css مع أفضل المعلمين على منصة ‏ ‏ اليوتيوب واكتسبت{" "}
              <br />
              الخبرة المطلوبة في هذا المجال ‏ ‏ وقمت بتطبيق أكثر من مشروع عليها‏
            </p>
          </div>
        </div>

        <div className="skils">
          <div>
            <p>2022 / 4 / 20 - 2022 / 8 / 1</p>
          </div>
          <div>
            <img src={Profile3} />
          </div>
          <div>
            <p>JAVA SCRIPT</p>
            <span>Udemy</span>
          </div>
          <div>
            <h5>لقــد درســت java script</h5>
            <p>
              ‏تعلمت جافا سكريبت من أفضل المعلمين على منصة udemy ‏ واكتسبت ‏
              <br /> الخبرة المطلوبة في هذا المجال وقمت ‏ ‏ بتطبيقها على أكثر من
              مشروع‏
            </p>
          </div>
        </div>

        <div className="skils">
          <div>
            <p>2022 / 8 / 1 - 2022 / 10 / 25 </p>
          </div>
          <div>
            <img src={Profile1} />
          </div>
          <div>
            <p>REACT JS</p>
            <span>Youtube</span>
          </div>
          <div>
            <h5>لقــد درســت React js علـى اليوتيـوب</h5>
            <p>
              ‏تعلمت رد فعل js من أفضل المعلمين على منصة اليوتيوب‏
              <br />
              ‏، واكتسبت الخبرة المطلوبة في هذا المجال، وقمت ‏ ‏ بتطبيقها على
              أكثر من مشروع.‏
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
