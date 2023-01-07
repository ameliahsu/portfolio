import PageContainer from "../components/PageContainer";
import ExternalButton from "../components/ExternalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function GraphicDesignContents() {
  return (
    <div>
      <p>
        I am one of the co-graphic designers and the webmaster for University of
        Maryland College Park Taiwanese American Student Association (UMCP
        TASA)!
        <br />
        Scroll down to see some of my work!
        <br />
        Last year, before being elected as graphic designer, I was the marketing
        head for our annual Asian male beauty pageant, Mr. Wiffleball! The theme
        of Mr. Wiffleball 2022 was Netflix's reality dating show{" "}
        <a href="https://mydramalist.com/697793-solo-hell">Single's Inferno</a>,
        as you may be able to tell from some of the promotional designs.
      </p>
      <img
        src="img/graphics/wiffleball/event.png"
        alt="Mr. Wiffleball Facebook event graphic"
      />
      <div className="wiffleball">
        <img
          src="img/graphics/wiffleball/pravi.png"
          alt="Mr. Wiffleball contestant introduction graphic"
        />
        <img
          src="img/graphics/wiffleball/charlie.png"
          alt="Mr. Wiffleball contestant introduction graphic"
        />
        <img
          src="img/graphics/wiffleball/raymart.png"
          alt="Mr. Wiffleball contestant introduction graphic"
        />
      </div>
      <p>
        After UMCP TASA board elections in May 2022, we posted "board reveal"
        posts on Instagram to introduce everyone! All of our "reveal" posts were
        Spotify themed.
      </p>
      <div className="reveal">
        <img
          src="img/graphics/board/revealcover.png"
          alt="UMCP TASA 2022-23 board reveal cover graphic"
        />
        <img
          src="img/graphics/board/advisors.png"
          alt="UMCP TASA 2022-23 advisors reveal graphic"
        />
        <img
          src="img/graphics/board/advisorscover.png"
          alt="UMCP TASA 2022-23 advisors reveal cover graphic"
        />
        <img
          src="img/graphics/board/ines.png"
          alt="UMCP TASA 2022-23 board reveal graphic"
        />
        <img
          src="img/graphics/board/justin.png"
          alt="UMCP TASA 2022-23 board reveal graphic"
        />
        <img
          src="img/graphics/board/xtina.png"
          alt="UMCP TASA 2022-23 board reveal graphic"
        />
      </div>
      <p>
        Over Summer 2022, UMCP TASA posted monthly "scrapbook" posts on
        Instagram about what board members were up to over break!
      </p>
      <div className="scrapbook">
        <img
          src="img/graphics/scrapbook/cover.png"
          alt="UMCP TASA Summer 2022 scrapbook cover graphic"
        />
        <img
          src="img/graphics/scrapbook/seattle.png"
          alt="UMCP TASA Summer 2022 scrapbook graphic"
        />
        <img
          src="img/graphics/scrapbook/latenight.png"
          alt="UMCP TASA Summer 2022 scrapbook graphic"
        />
        <img
          src="img/graphics/scrapbook/sunrise.png"
          alt="UMCP TASA Summer 2022 scrapbook graphic"
        />
      </div>
      <p>
        We posted more board introduction photos right before the Fall 2022
        semester began to get everyone excited for the future of UMCP TASA!
      </p>
      <div className="intros">
        <img
          src="img/graphics/board/audrey.png"
          alt="UMCP TASA 2022-23 board introduction graphic"
        />
        <img
          src="img/graphics/board/mandy.png"
          alt="UMCP TASA 2022-23 board introduction graphic"
        />
        <img
          src="img/graphics/board/alina.png"
          alt="UMCP TASA 2022-23 board introduction graphic"
        />
      </div>
      <p>
        This school year, I design all of the announcements posts for our
        general body meetings!
      </p>
      <div className="events">
        <img
          src="img/graphics/events/biglittle.png"
          alt="Promotional graphic for UMCP TASA Big Little Week"
        />
        <img
          src="img/graphics/events/moge.png"
          alt="Promotional graphic for UMCP TASA Moge Tee Fundriaser"
        />
        <img
          src="img/graphics/events/study.png"
          alt="Promotional graphic for UMCP TASA Study Oolong GBM"
        />
        <img
          src="img/graphics/events/skating.png"
          alt="Promotional graphic for UMCP TASA x JASA Ice Skating Mixer"
        />
        <img
          src="img/graphics/events/shavedice.png"
          alt="Promotional graphic for UMCP TASA Shaved Ice GBM"
        />
        <img
          src="img/graphics/events/november.png"
          alt="Promotional graphic for UMCP TASA services fundraiser"
        />
        <img
          src="img/graphics/events/halloween.png"
          alt="Promotional graphic for UMCP TASA Halloween GBM"
        />
        <img
          src="img/graphics/events/membership.png"
          alt="Promotional graphic for UMCP TASA Membership Cards"
        />
      </div>
      <p>
        All of my designs can be found on UMCP TASA's Instagram and official
        website. I am currently in the progress of revamping the website (the
        home page is almost complete)!
      </p>
      <div className="links">
        <ExternalButton
          icon={<FontAwesomeIcon icon={faDesktop} />}
          link={"https://umcptasa.com"}
          text={"check out our website!"}
        />
        <ExternalButton
          icon={<FontAwesomeIcon icon={faInstagram} />}
          link={"https://instagram.com/umcptasa"}
          text={"view our instagram!"}
        />
      </div>
    </div>
  );
}

function GraphicDesign({ setGraphics }) {
  return (
    <PageContainer
      title={"graphic design"}
      contents={<GraphicDesignContents />}
      setPage={setGraphics}
    />
  );
}

export default GraphicDesign;
