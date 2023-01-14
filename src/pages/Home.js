import "../styles/Home.css";
import Socials from "../components/Socials.js";
import PageButton from "../components/PageButton";

function Home({ setPage }) {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div className="home">
      <div className="top-wrapper">
        <div className="top-row">
          <PageButton
            header={"about me"}
            image={"./img/cheese.jpg"}
            buttonName={"about"}
            setPage={setPage}
          />
          <PageButton
            header={"robotics"}
            image={"./img/robot.jpg"}
            buttonName={"robotics"}
            setPage={setPage}
          />
        </div>
      </div>
      <header className="name">
        <h1>mia hsu</h1>
      </header>
      <div className="bottom-wrapper">
        <div className="bottom-row">
          <PageButton
            header={"graphic design"}
            image={"./img/graphics/events/moge.png"}
            buttonName={"graphics"}
            setPage={setPage}
          />
          <PageButton
            header={"photography"}
            image={"./img/kayak.JPG"}
            buttonName={"photos"}
            setPage={setPage}
          />
        </div>
      </div>
      <Socials />
      <h5 className="copyright">{copyright} Mia Hsu 2023</h5>
    </div>
  );
}

export default Home;
