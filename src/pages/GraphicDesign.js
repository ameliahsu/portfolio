import PageContainer from "../components/PageContainer";
import "../styles/GraphicDesign.css";

function GraphicDesignContents() {
  return <p>graphic design is my passion</p>;
}

function GraphicDesign({ setGraphics }) {
  return (
    <PageContainer
      title={"graphic design"}
      contents={<GraphicDesignContents />}
      setPage={setGraphics}
    />
  );
}

export default GraphicDesign;
