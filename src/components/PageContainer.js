import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/PageContainer.css";

function PageContainer({ title, contents, setPage }) {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">{title}</h1>
        <button
          className="exit"
          onClick={() => {
            setPage(false);
          }}
        >
          {<FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
      <div className="contents">{contents}</div>
    </div>
  );
}

export default PageContainer;
