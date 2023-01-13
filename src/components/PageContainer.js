import "../styles/PageContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function PageContainer({ title, contents, setPage }) {
  return (
    <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
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
    </motion.div>
  );
}

export default PageContainer;
