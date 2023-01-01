import "./Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

function Home() {
  return (
    <div className="home">
      <header className="name">
        <h1>mia hsu</h1>
      </header>
      <IconButton
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        link="https://google.com"
      />
    </div>
  );
}

export default Home;
