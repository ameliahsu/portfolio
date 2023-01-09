import "../styles/Photography.css";
import PageContainer from "../components/PageContainer";

function PhotographyContents() {
  return (
    <div className="photosWrapper">
      <p>
        I'm definitely not the best at being in front of the camera, but I love
        being behind it.
        <br />
        Scroll down to see some of my favorite photos!
      </p>
      <h3 className="subheading">film photos</h3>
      <p>
        I received my first camera ever for my 6th birthday.
        <br />
        This year, I decided to whip it back out and start taking digital photos
        again!
      </p>
      <div className="film">
        <img className="graphic" src="./img/film/jason.JPG" alt="Dorm room" />
        <img
          className="graphic"
          src="./img/film/bffs.JPG"
          alt="Friends in dorm room"
        />
        <img
          className="graphic"
          src="./img/film/sunset.JPG"
          alt="Sunset in DC"
        />
        <img
          className="graphic"
          src="./img/film/sandwich.JPG"
          alt="Sandwiches"
        />
        <img
          className="graphic"
          src="./img/film/joji3.JPG"
          alt="Joji concert"
        />
        <img
          className="graphic"
          src="./img/film/joji1.JPG"
          alt="Joji concert"
        />
        <img
          className="graphic"
          src="./img/film/joji2.JPG"
          alt="Joji concert"
        />
        <img
          className="graphic"
          src="./img/film/thanksgiving.jpg"
          alt="Thanksgiving"
        />
        <img className="graphic" src="./img/film/bunny.JPG" alt="Bunny" />
        <img
          className="graphic"
          src="./img/film/wontons1.JPG"
          alt="Making wontons"
        />
      </div>
      <h3 className="subheading">food photos</h3>
      <p>Camera always eats first!</p>
      <div className="food">
        <div className="landscapeFood">
          <img className="graphic" src="./img/food/ruthies.JPG" alt="Brunch" />
          <img className="graphic" src="./img/food/sushi.JPG" alt="Sushi" />
          <img className="graphic" src="./img/food/tacos.jpg" alt="Tacos" />
        </div>
        <div className="portraitFood">
          <img
            className="graphic"
            src="./img/food/mochidonuts.jpg"
            alt="Mochi donuts"
          />
          <img
            className="graphic"
            src="./img/food/teriyaki.JPG"
            alt="Teriyaki"
          />
          <img className="graphic" src="./img/food/poke.JPG" alt="Poke" />

          <img
            className="graphic"
            src="./img/food/matcha.jpg"
            alt="Matcha desserts"
          />
          <img
            className="graphic"
            src="./img/food/milkbar.jpg"
            alt="Ice cream"
          />
          <img className="graphic" src="./img/food/hanami.JPG" alt="Sushi" />
        </div>
      </div>
      <h3 className="subheading">pretty things</h3>
      <p className="prettyCaption">
        Just some moments I was lucky enough to capture :)
      </p>
      <div className="pretty">
        <div class="prettyColumn">
          <img
            className="graphic"
            src="./img/misc/lepanier.JPG"
            alt="Le Panier bakery"
          />
          <img
            className="graphic"
            src="./img/misc/flowers.JPG"
            alt="Flowers at Pike Place Market"
          />
          <img
            className="graphic"
            src="./img/misc/fay.JPG"
            alt="Girl on ferry"
          />
          <img
            className="graphic"
            src="./img/misc/rio.JPG"
            alt="Lake at sunset"
          />
          <img
            className="graphic"
            src="./img/misc/plants.JPG"
            alt="Plant shop"
          />
          <img
            className="graphic"
            src="./img/misc/startup.JPG"
            alt="Pop up swings outside The Spheres"
          />
        </div>
        <div class="prettyColumn">
          <img className="graphic" src="./img/misc/kayak.JPG" alt="Kayaks" />
          <img
            className="graphic"
            src="./img/misc/motorcycle.JPG"
            alt="Motorcycle driving over bridge"
          />
          <img className="graphic" src="./img/misc/tula.JPG" alt="Puppy" />
          <img
            className="graphic"
            src="./img/misc/hitc2.JPG"
            alt="Head in the Clouds Festival 2021"
          />
          <img className="graphic" src="./img/misc/jason.JPG" alt="Picnic" />
          <img
            className="graphic"
            src="./img/misc/dopple.JPG"
            alt="Chai on desk"
          />
        </div>
        <div class="prettyColumn">
          <img
            className="graphic"
            src="./img/misc/temple.JPG"
            alt="Temple in Taiwan"
          />
          <img
            className="graphic"
            src="./img/misc/hitc1.JPG"
            alt="Head in the Clouds Fesival 2021"
          />
          <img
            className="graphic"
            src="./img/misc/fall.JPG"
            alt="UMD campus in fall"
          />
          <img
            className="graphic"
            src="./img/misc/cornish.JPG"
            alt="Sunset view from Cornish Commons"
          />
          <img
            className="graphic"
            src="./img/misc/mtrainier.JPG"
            alt="Mount Rainier"
          />
          <img
            className="graphic"
            src="./img/misc/umd.JPG"
            alt="Sunset at UMD"
          />
          <img
            className="graphic"
            src="./img/misc/sunset.JPG"
            alt="Sunset view from dorm room"
          />
        </div>
        <div class="prettyColumn">
          <img className="graphic" src="./img/misc/dorm.JPG" alt="Dorm room" />
          <img
            className="graphic"
            src="./img/misc/sunrise.JPG"
            alt="Sunrise at Ocean City"
          />
          <img
            className="graphic"
            src="./img/misc/janaamelia.JPG"
            alt="Friends laughing"
          />
          <img
            className="graphic"
            src="./img/misc/japan.JPG"
            alt="Flower in Japan"
          />
          <img
            className="graphic"
            src="./img/misc/snow.JPG"
            alt="Snowy street"
          />
          <img
            className="graphic"
            src="./img/misc/mama.JPG"
            alt="Woman shopping"
          />
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
