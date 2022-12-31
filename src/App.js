import GridLines from "react-gridlines";
import "./App.css";

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
        </header>
      </GridLines>
    </div>
  );
}

export default App;
