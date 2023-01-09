import "../styles/Robotics.css";
import PageContainer from "../components/PageContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ExternalButton from "../components/ExternalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function RoboticsContents() {
  return (
    <div className="roboticsWrapper">
      <Carousel
        className="caroPortrait"
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/22101a.JPG"
            alt="Mia with robot"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/sauci.jpeg"
            alt="Our States robot, Sauci"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/excellence5.jpeg"
            alt="Winning the Excellence Award at Richmond Invitational"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/excellence1.jpg"
            alt="Excellence Award at Richmond Invitational"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/states2.jpg"
            alt="McRoboto at States"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/hoodie.jpg"
            alt="McRoboto hoodie"
          />
        </div>
        <div className="portrait">
          <img
            className="portraitImg"
            src="./img/robotics/excellence2.jpg"
            alt="Excellence Award at Richmond Invitational"
          />
        </div>
      </Carousel>
      <p>
        I was a member of the first{" "}
        <a href="https://www.vexrobotics.com/v5/competition">VEX Robotics</a>{" "}
        team at McLean High School from 2018 to 2020. Starting out as one of two
        girls brought onto the team to increase diversity, I eventually became
        the <strong>Team Captain, Head Builder, and Driver</strong> of{" "}
        <a href="https://www.robotevents.com/teams/VRC/22101A">Team 22101A</a>,
        known as McRoboto. Despite having no prior engineering experience, I
        learned how to build robot chassis, flywheels, slip gears, and more
        through my involvement with the team. I also learned how to document our
        design process in engineering notebooks and used a game controller for
        the first time!
        <br />
        Our team participated in numerous competitions throughout Virginia, and
        in early 2020, we were honored with the Excellence Award at the Richmond
        Invitational Tournament. This win qualified us for the{" "}
        <strong>VEX Virginia State Championship</strong>, where we took home the{" "}
        <strong>Design Award</strong>! To this day, that Design Award is one of
        my proudest achievements. I will never forget the excitement, joy, and
        relief that I felt when the announcers called our team number and I
        realized that all of our hard work had finally paid off.
        <br />
      </p>
      <Carousel
        className="caroLandscape"
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src="./img/robotics/field.JPG" alt="Robots at rest in field" />
        </div>
        <div>
          <img
            src="./img/robotics/statesbanner.jpeg"
            alt="Winning the design award at States!"
          />
        </div>
        <div>
          <img
            src="./img/robotics/statesoopsies.jpg"
            alt="Competing at States"
          />
        </div>
        <div>
          <img
            src="./img/robotics/match.jpg"
            alt="Competing at Richmond Invitational"
          />
        </div>
        <div>
          <img src="./img/robotics/states1.jpg" alt="McRoboto at States" />
        </div>
        <div>
          <img
            src="./img/robotics/states3.jpg"
            alt="Teams 22101A and 22101Z at States"
          />
        </div>
      </Carousel>
      <p>
        In addition to competing, McRoboto was dedicated to community{" "}
        <strong>outreach</strong>. We had the opportunity to visit local
        elementary schools and extracurricular STEM programs, where we taught
        kids about the design process, shared information about VEX Robotics,
        and demoed our robot. I particularly enjoyed interacting with kids
        because they were always engaged and excited to play with the robot
        controls.
        <br />
        Funding for our expensive team activities was extremely limited, so I
        gained experience in <strong>fundraising</strong> through various
        methods such as asking for donations from family, seeking sponsorships
        from local businesses, applying for grants, selling stickers to
        classmates, and hosting Boba & Bake Sales after school. In just a few
        months, we were able to raise over <strong>$3,000</strong>! We also
        DIY-ed our team apparel by reverse-tie-dying shirts and hoodies as a fun
        and creative way to show our team spirit while also saving money.
        <br />
        Unfortunately, the COVID-19 pandemic forced us to shut down. However, my
        time on the robotics team taught me valuable skills in{" "}
        <strong>communication</strong>, <strong>project management</strong>, and
        the <strong>design process</strong>, and provided me with many memorable
        experiences and accomplishments.
        <br />
      </p>
      <div className="links">
        <ExternalButton
          icon={<FontAwesomeIcon icon={faDesktop} />}
          link={"https://mcroboto22101.wixsite.com/mclean"}
          text={"check out our website!"}
        />
        <ExternalButton
          icon={<FontAwesomeIcon icon={faInstagram} />}
          link={"https://instagram.com/mcroboto"}
          text={"view our instagram!"}
        />
      </div>
    </div>
  );
}

function Robotics({ setRobotics }) {
  return (
    <PageContainer
      title={"robotics"}
      contents={<RoboticsContents />}
      setPage={setRobotics}
    />
  );
}

export default Robotics;
