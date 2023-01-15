import "../styles/Home.css";
import PageButton from "../components/PageButton";
import Socials from "../components/Socials";

function Home() {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <div className="home">
      <div className="top-wrapper">
        <div className="top-row">
          <PageButton
            header={"about me"}
            image={"./img/cheese.jpg"}
            route={"/about"}
          />
          <PageButton
            header={"robotics"}
            image={"./img/robot.jpg"}
            route={"/robotics"}
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
            route={"/design"}
          />
          <PageButton
            header={"photography"}
            image={"./img/kayak.JPG"}
            route={"/photos"}
          />
        </div>
      </div>
      <Socials />
      <h5 className="copyright">{copyright} Mia Hsu 2023</h5>
    </div>
  );
}

export default Home;
