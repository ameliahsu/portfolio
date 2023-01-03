import "./HomeStyles.css";
import Socials from "./components/Socials.js";
import PageButton from "./components/PageButton";

function Home() {
  return (
    <div className="home">
      <div className="top-wrapper">
        <div className="top-row">
          <PageButton
            header={"about me"}
            image={"/img/garden.jfif"}
            link={"https://ameliahsu.myportfolio.com/graphic-design"}
            buttonName={"about"}
          />
          <PageButton
            header={"robotics"}
            image={"/img/howls.jpg"}
            link={"https://ameliahsu.myportfolio.com/digital-photos"}
            buttonName={"robotics"}
          />
        </div>
      </div>
      <header className="name">
        <h1 className="h1">mia hsu</h1>
      </header>
      <div className="bottom-wrapper">
        <div className="bottom-row">
          <PageButton
            header={"graphic design"}
            image={"/img/cutedog.jfif"}
            link={"https://ameliahsu.myportfolio.com/graphic-design"}
            buttonName={"graphics"}
          />
          <PageButton
            header={"photography"}
            image={"/img/street.jpg"}
            link={"https://ameliahsu.myportfolio.com/digital-photos"}
            buttonName={"photos"}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Home;
