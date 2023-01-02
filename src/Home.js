import "./Styles.css";
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
            offset={0}
          />
          <PageButton
            header={"robotics"}
            image={"/img/howls.jpg"}
            link={"https://ameliahsu.myportfolio.com/digital-photos"}
            offset={90}
          />
        </div>
      </div>
      <header className="name font">
        <h1 className="h1">mia hsu</h1>
      </header>
      <div className="bottom-wrapper">
        <div className="bottom-row">
          <PageButton
            header={"graphic design"}
            image={"/img/cutedog.jfif"}
            link={"https://ameliahsu.myportfolio.com/graphic-design"}
            offset={0}
          />
          <PageButton
            header={"photography"}
            image={"/img/street.jpg"}
            link={"https://ameliahsu.myportfolio.com/digital-photos"}
            offset={90}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Home;
