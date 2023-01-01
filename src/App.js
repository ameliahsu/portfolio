import "./Styles.css";
import GridLines from "react-gridlines";
import Home from "./Home.js";

function App() {
  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        <Home />
      </GridLines>
    </div>
  );
}

export default App;
