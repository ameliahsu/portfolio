import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function PageContainer({ title, contents }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      onAnimationStart={() => setOpen(false)}
      onAnimationComplete={() => setOpen(true)}
    >
      <div className="heading">
        <h1 className="title">{title}</h1>
        <Link to="/">
          <button className="exit">
            {<FontAwesomeIcon className="logo" icon={faXmark} />}
          </button>
        </Link>
      </div>
      <div className="contents">{open && contents}</div>
    </motion.div>
  );
}

export default PageContainer;
