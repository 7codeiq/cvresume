import "./Portfolio.css";
import { Navbar } from "../../components/index";
import prot1 from "../../assets/images/prot1.PNG";
import prot2 from "../../assets/images/prot2.PNG";
import prot3 from "../../assets/images/prot3.PNG";
import prot4 from "../../assets/images/prot4.PNG";

import prot5 from "../../assets/images/prot5.PNG";
import prot6 from "../../assets/images/prot6.PNG";
import prot7 from "../../assets/images/prot7.PNG";
import prot8 from "../../assets/images/prot8.PNG";

function Portfolio() {
  return (
    <>
      <div className="Portfolio">
        <Navbar />

        <h1>أعمـالــي</h1>
        <div className="Portfolio-Photo">
          <a href="https://7codeiq.github.io/Restaurant/" target="_blank">
            <img src={prot3} />
          </a>

          <a href="https://7codeiq.github.io/Shoppng-React/" target="_blank">
            <img src={prot5} />
          </a>
          <a href="https://7codeiq.github.io/GrandRestaurant/" target="_blank">
            <img src={prot2} />
          </a>
          <a href="https://7codeiq.github.io/Jewelry/" target="_blank">
            <img src={prot4} />
          </a>
        </div>

        <div className="Portfolio-Photo">
          <a href="https://7codeiq.github.io/zeno/" target="_blank">
            <img src={prot1} />
          </a>
          <a href="https://7codeiq.github.io/Naseel/" target="_blank">
            <img src={prot6} />
          </a>
          <a href="https://7codeiq.github.io/test/" target="_blank">
            <img src={prot7} />
          </a>
          <a href="https://7codeiq.github.io/fashion/" target="_blank">
            <img src={prot8} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
