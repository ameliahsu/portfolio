import React from "react";
import "./styles/App.css";
import GridLines from "react-gridlines";
import Home from "./pages/Home.js";
import PageContainer from "./components/PageContainer";
import AboutMe from "./pages/AboutMe";

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
          <PageContainer
            title={"about me"}
            contents={<AboutMe />}
            setPage={setAbout}
          />
        ) : robotics ? (
          <PageContainer
            title={"robotics"}
            contents={<p>hello</p>}
            setPage={setRobotics}
          />
        ) : graphics ? (
          <PageContainer title={"graphic design"} setPage={setGraphics} />
        ) : photos ? (
          <PageContainer title={"photography"} setPage={setPhotos} />
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
