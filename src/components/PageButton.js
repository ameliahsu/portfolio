import "../styles/Home.css";
import React from "react";
import ReactCurvedText from "react-curved-text";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function vh(percent) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (percent * h) / 100;
}

function vw(percent) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (percent * w) / 100;
}

function vmin(percent) {
  return Math.min(vh(percent), vw(percent));
}

function getTextWidth(str) {
  let text = document.createElement("span");
  document.body.appendChild(text);

  text.style.fontFamily = '"League Spartan", sans-serif';
  text.style.fontSize = 6 + "vmin";
  text.style.height = "auto";
  text.style.width = "auto";
  text.style.position = "absolute";
  text.style.whiteSpace = "no-wrap";
  text.innerHTML = str;

  var width = Math.ceil(text.clientWidth);

  document.body.removeChild(text);

  return width;
}

function PageButton({ header, image, route }) {
  React.useEffect(() => {
    function handleResize() {
      window.location.reload();
    }

    window.addEventListener("resize", handleResize);
  });

  var size = vmin(50);
  var center = size / 2;
  var radius = vmin(40) / 2;
  var offset = (radius * Math.PI) / 2 - getTextWidth(header) / 2;

  return (
    <motion.div
      className="page-button-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
    >
      <ReactCurvedText
        className="heading"
        width={size}
        height={size}
        cx={center.toString()}
        cy={center.toString()}
        rx={radius}
        ry={radius}
        startOffset={offset}
        reversed={true}
        text={header}
        textProps={{
          style: {
            fontSize: "6vmin",
            fontFamily: '"League Spartan", sans-serif',
            fontWeight: "700",
          },
        }}
        textPathProps={{
          style: {
            fill: "white",
          },
        }}
      />
      <Link to={route}>
        <button
          className={`page-button`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </Link>
    </motion.div>
  );
}

export default PageButton;
