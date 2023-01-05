import "../styles/ExternalButton.css";

function ExternalButton({ icon, link, text }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="ext">
        {text} {icon}{" "}
      </button>
    </a>
  );
}

export default ExternalButton;
