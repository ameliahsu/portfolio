import "../styles/Home.css";
import IconButton from "./IconButton.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
    <div className="socials">
      <IconButton
        icon={<FontAwesomeIcon className="logo" icon={faLinkedinIn} />}
        link="https://www.linkedin.com/in/amelia-hsu/"
      />
      <IconButton
        icon={<FontAwesomeIcon className="logo" icon={faEnvelope} />}
        link="mailto:ameliahsu@gmail.com"
      />
      <IconButton
        icon={<FontAwesomeIcon className="logo" icon={faGithub} />}
        link="https://github.com/ameliahsu"
      />
    </div>
  );
}

export default Socials;
