import "./Styles.css";
import Socials from "./components/Socials.js";
import PageButton from "./components/PageButton";
import ReactCurvedText from "react-curved-text";

function Home() {
  return (
    <div className="home">
      <header className="name font">
        <h1>mia hsu</h1>
      </header>
      <Socials />
      <ReactCurvedText
        className="font"
        width={300}
        height={300}
        cx="150"
        cy="150"
        rx={100}
        ry={100}
        startOffset={90}
        reversed={true}
        text="about me"
        textProps={{
          style: {
            fontSize: "5vmin",
            fontFamily: '"League Spartan", sans-serif',
          },
        }}
        textPathProps={{
          style: {
            fill: "white",
          },
        }}
      />
    </div>
  );
}

export default Home;
