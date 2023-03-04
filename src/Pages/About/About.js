import "./About.css";
import { Navbar } from "../../components/index";
import ImgOne from "../../assets/images/1.jpg";
const About = () => {
  return (
    <>
      <div className="About">
        <Navbar />

        <div className="Biggest">
          <div className="Biggest-text">
            <h1>نبــذة عنــي</h1>

            <p>
              ‏أنا مصمـم ويـب لدي اعمـال سابقـة في هذا المجـال وقمـت بتحميـل أكثـر مـن موقـع
              علـى شبكـة الإنترنـت. ‏ ‏<br/> أنا مطـور ويـب لـدي طمـوح كبيـر في بنـاء الشركـة
              التـي أعمـل بهـا‏ اريـد ان اصـل الـى مستـوى عالـي فـي هـذا المجـال<br/>
            </p>

            <button>
              <a href="https://c.top4top.io/f_1oqYu2KfyoUmMKffbSmHfQ/1668335053/25026s2vg1.pdf">
                حمـل السيـرة الذاتيـة
              </a>
            </button>
          </div>
          <div className="Biggest-img">
            <img src={ImgOne} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
