import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";
import IconButton from "./IconButton.js";

function Socials() {
  return (
    <div className="socials">
      <IconButton
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
        link="https://www.linkedin.com/in/amelia-hsu/"
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        link="mailto:ameliahsu@gmail.com"
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faGithub} />}
        link="https://github.com/ameliahsu"
      />
    </div>
  );
}

export default Socials;
