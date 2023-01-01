import "./App.css";
import GridLines from "react-gridlines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import IconButton from "./IconButton";

function App() {
  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        <header className="name">
          <h1>mia hsu</h1>
          <IconButton icon={<FontAwesomeIcon icon={faEnvelope} />}/>
        </header>
      </GridLines>
    </div>
  );
}

export default App;
