import React from "react";
import "./styles/App.css";
import GridLines from "react-gridlines";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe";
import Robotics from "./pages/Robotics";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";

function App() {
  const [about, setAbout] = React.useState(false);
  const [robotics, setRobotics] = React.useState(false);
  const [graphics, setGraphics] = React.useState(false);
  const [photos, setPhotos] = React.useState(false);

  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        {about ? (
          <AboutMe setAbout={setAbout} />
        ) : robotics ? (
          <Robotics setRobotics={setRobotics} />
        ) : graphics ? (
          <GraphicDesign setGraphics={setGraphics} />
        ) : photos ? (
          <Photography setPhotos={setPhotos} />
        ) : (
          <Home
            setAbout={setAbout}
            setRobotics={setRobotics}
            setGraphics={setGraphics}
            setPhotos={setPhotos}
          />
        )}
      </GridLines>
    </div>
  );
}

export default App;
