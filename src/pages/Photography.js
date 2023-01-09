import "../styles/Photography.css";
import PageContainer from "../components/PageContainer";

function PhotographyContents() {
  return (
    <div className="photosWrapper">
      <h3 className="subheading">film photos</h3>
      <p>
        I received my first camera ever for my 6th birthday.
        <br />
        This year, I decided to whip it back out and start taking digital photos
        again!
      </p>
      <div className="film">
        <img className="graphic" src="img/film/jason.jpg" alt="Dorm room" />
        <img
          className="graphic"
          src="img/film/bffs.jpg"
          alt="Friends in dorm room"
        />
        <img className="graphic" src="img/film/sunset.jpg" alt="Sunset in DC" />
        <img className="graphic" src="img/film/sandwich.jpg" alt="Sandwiches" />
        <img className="graphic" src="img/film/joji3.jpg" alt="Joji concert" />
        <img className="graphic" src="img/film/joji1.jpg" alt="Joji concert" />
        <img className="graphic" src="img/film/joji2.jpg" alt="Joji concert" />
        <img
          className="graphic"
          src="img/film/thanksgiving.jpg"
          alt="Thanksgiving"
        />
        <img className="graphic" src="img/film/bunny.jpg" alt="Bunny" />
        <img
          className="graphic"
          src="img/film/wontons1.jpg"
          alt="Making wontons"
        />
      </div>
      <h3 className="subheading">food photos</h3>
      <p>Camera always eats first!</p>
      <div className="food">
        <div className="landscapeFood">
          <img className="graphic" src="img/food/ruthies.JPG" alt="Brunch" />
          <img className="graphic" src="img/food/sushi.JPG" alt="Sushi" />
          <img className="graphic" src="img/food/tacos.jpg" alt="Tacos" />
        </div>
        <div className="portraitFood">
          <img
            className="graphic"
            src="img/food/mochidonuts.jpg"
            alt="Mochi donuts"
          />
          <img className="graphic" src="img/food/teriyaki.JPG" alt="Teriyaki" />
          <img className="graphic" src="img/food/poke.JPG" alt="Poke" />

          <img
            className="graphic"
            src="img/food/matcha.jpg"
            alt="Matcha desserts"
          />
          <img className="graphic" src="img/food/milkbar.jpg" alt="Ice cream" />
          <img className="graphic" src="img/food/hanami.JPG" alt="Sushi" />
        </div>
      </div>
    </div>
  );
}

function Photography({ setPhotos }) {
  return (
    <PageContainer
      title={"photography"}
      contents={<PhotographyContents />}
      setPage={setPhotos}
    />
  );
}

export default Photography;
