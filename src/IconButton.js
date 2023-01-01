import "./IconButton.css";

function IconButton({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="button">{icon}</button>
    </a>
  );
}

export default IconButton;
