import "./Styles.css";

function IconButton({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="icon-button">{icon}</button>
    </a>
  );
}

export default IconButton;
