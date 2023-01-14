import React from "react";
import "./styles/Main.css";
import GridLines from "react-gridlines";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe";
import Robotics from "./pages/Robotics";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";

function Main({ page }) {
  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        <Home />
        <AnimatePresence>{page === "about" && <AboutMe />}</AnimatePresence>
        <AnimatePresence>{page === "robotics" && <Robotics />}</AnimatePresence>
        <AnimatePresence>
          {page === "graphics" && <GraphicDesign />}
        </AnimatePresence>
        <AnimatePresence>
          {page === "photos" && <Photography />}
        </AnimatePresence>
      </GridLines>
    </div>
  );
}

export default Main;
