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

function PageButton({ header, image, offset }) {
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
      <button
        className="page-button"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
}

export default PageButton;
