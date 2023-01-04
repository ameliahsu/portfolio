import "../styles/AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <div>
      <p>
        Hi, my name is <strong>Mia Hsu</strong>!
        <br />I am a <strong>computer science</strong> student at the University
        of Maryland College Park and a part of the Advanced Cybersecurity
        Experience for Students (<a href="https://aces.umd.edu/">ACES</a>)
        honors program. After graduation, I hope to pursue a career in{" "}
        <strong>software engineering</strong>! I am particularly interested in
        robotics, machine learning, and data science, but I’m always up for
        learning new things and expanding my skillset!
        <br />
        In my free time, I enjoy expressing my creativity through{" "}
        <strong>graphic design</strong> and <strong>photography</strong>, as
        well as crocheting and scrapbooking occasionally. I also love
        discovering new{" "}
        <a href="https://open.spotify.com/user/1219146661?si=8a6afc6c9a964706">
          music
        </a>{" "}
        when I get the chance- my current favorite genres are K-Pop, K-R&B, and
        K-Rap!
        <br />
        I'm always open to new opportunities and always looking for ways to grow
        and learn. If you have any advice or resources to share, or just want to
        chat, don't hesitate to{" "}
        <a href="mailto:ameliahsu@gmail.com">reach out</a>
        ! I would love to hear from you.
        <br />
      </p>
      <a href="Amelia_Hsu_Resume.pdf" target="_blank" rel="noreferrer">
        <button>
          view my resume <FontAwesomeIcon icon={faFileLines} />{" "}
        </button>
      </a>
    </div>
  );
}

export default AboutMe;