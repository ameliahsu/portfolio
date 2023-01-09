import "../styles/Home.css";
import Socials from "../components/Socials.js";
import PageButton from "../components/PageButton";

function Home({ setAbout, setRobotics, setGraphics, setPhotos }) {
  return (
    <div className="home">
      <div className="top-wrapper">
        <div className="top-row">
          <PageButton
            header={"about me"}
            image={"/img/cheese.jpg"}
            buttonName={"about"}
            setPage={setAbout}
          />
          <PageButton
            header={"robotics"}
            image={"/img/robot.jpg"}
            buttonName={"robotics"}
            setPage={setRobotics}
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
            image={"/img/graphics/events/moge.png"}
            buttonName={"graphics"}
            setPage={setGraphics}
          />
          <PageButton
            header={"photography"}
            image={"/img/kayak.JPG"}
            buttonName={"photos"}
            setPage={setPhotos}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Home;
