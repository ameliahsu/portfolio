import React from "react";
import "./styles/App.css";
import GridLines from "react-gridlines";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe";
import Robotics from "./pages/Robotics";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";

function App() {
  const [page, setPage] = React.useState("");

  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        <Home setPage={setPage} />
        <AnimatePresence>
          {page === "about me" && <AboutMe setAbout={setPage} />}
        </AnimatePresence>
        <AnimatePresence>
          {page === "robotics" && <Robotics setRobotics={setPage} />}
        </AnimatePresence>
        <AnimatePresence>
          {page === "graphic design" && <GraphicDesign setGraphics={setPage} />}
        </AnimatePresence>
        <AnimatePresence>
          {page === "photography" && <Photography setPhotos={setPage} />}
        </AnimatePresence>
      </GridLines>
    </div>
  );
}

export default App;
