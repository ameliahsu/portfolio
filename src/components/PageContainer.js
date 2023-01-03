import "./PageContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function PageContainer({ title }) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <button className="exit">{<FontAwesomeIcon icon={faXmark} />}</button>
    </div>
  );
}

export default PageContainer;
