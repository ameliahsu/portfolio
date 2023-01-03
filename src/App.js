import "./styles/App.css";
import GridLines from "react-gridlines";
import Home from "./pages/Home.js";
import PageContainer from "./components/PageContainer";

function App() {
  // const [about, setAbout] = React.useState(false)
  // const [robotics, setRobotics] = React.useState(false)
  // const [graphics, setGraphics] = React.useState(false)
  // const [photos, setPhotos] = React.useState(false)
  // const onAboutClick = () => setAbout(true)
  // const onRoboticsClick = () => setRobotics(true)
  // const onGraphicsClick = () => setGraphics(true)
  // const onPhotosClick = () => setPhotos(true)
  return (
    <div className="app">
      <GridLines
        className="grid-area"
        lineColor={"#CCDAAF"}
        cellWidth={60}
        strokeWidth={6}
      >
        <Home />
        {/* <PageContainer title={"graphic design"} /> */}
      </GridLines>
    </div>
  );
}

export default App;
