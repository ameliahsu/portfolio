import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main page={""} />} />
        <Route path="/about" element={<Main page={"about"} />} />
        <Route path="/robotics" element={<Main page={"robotics"} />} />
        <Route path="/design" element={<Main page={"graphics"} />} />
        <Route path="/photos" element={<Main page={"photos"} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
