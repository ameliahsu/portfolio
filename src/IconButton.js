import "./IconButton.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({icon}) {
    return (
        <button className="button">
            {icon}
        </button>
    )
}

export default IconButton;