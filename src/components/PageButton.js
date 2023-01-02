import React from "react";
import "../Styles.css";
import ReactCurvedText from "react-curved-text";

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

function PageButton({ header, image, link, offset }) {
  React.useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      window.location.reload();
    }

    window.addEventListener("resize", handleResize);
  });

  var size = vmin(50);
  var center = size / 2;
  var radius = vmin(40) / 2;
  return (
    <div className="page-button-container">
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
          },
        }}
        textPathProps={{
          style: {
            fill: "white",
          },
        }}
      />
      <a href={link} target="_blank" rel="noreferrer">
        <button
          className="page-button"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </a>
    </div>
  );
}

export default PageButton;
