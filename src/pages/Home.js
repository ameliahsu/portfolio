import { Link } from "react-router-dom";

import "../styles/Home.css";
import Socials from "../components/Socials.js";
import PageButton from "../components/PageButton";

function Home({ setPage }) {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div className="home">
      <div className="top-wrapper">
        <div className="top-row">
          <Link to="/about">
            <PageButton
              header={"about me"}
              image={"./img/cheese.jpg"}
              buttonName={"about"}
            />
          </Link>
          <Link to="/robotics">
            <PageButton
              header={"robotics"}
              image={"./img/robot.jpg"}
              buttonName={"robotics"}
            />
          </Link>
        </div>
      </div>
      <header className="name">
        <h1>mia hsu</h1>
      </header>
      <div className="bottom-wrapper">
        <div className="bottom-row">
          <Link to="/design">
            <PageButton
              header={"graphic design"}
              image={"./img/graphics/events/moge.png"}
              buttonName={"graphics"}
            />
          </Link>
          <Link to="/photos">
            <PageButton
              header={"photography"}
              image={"./img/kayak.JPG"}
              buttonName={"photos"}
            />
          </Link>
        </div>
      </div>
      <Socials />
      <h5 className="copyright">{copyright} Mia Hsu 2023</h5>
    </div>
  );
}

export default Home;
