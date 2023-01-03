import "../styles/PageContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function PageContainer({ title, contents }) {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">{title}</h1>
        <button className="exit">{<FontAwesomeIcon icon={faXmark} />}</button>
      </div>
      <div className="clear"></div>
      <div className="contents">{contents}</div>
    </div>
  );
}

export default PageContainer;
