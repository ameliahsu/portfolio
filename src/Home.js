import "./Styles.css";
import Socials from "./components/Socials.js";
import PageButton from "./components/PageButton";

function Home() {
  return (
    <div className="home">
      <div className="bottom-row">
        <header className="name font">
          <h1 className="h1">mia hsu</h1>
        </header>
        <div className="bottom-pages">
          <PageButton
            header={"graphic design"}
            image={"/img/cutedog.jfif"}
            offset={0}
          />
          <div className="empty" />
          <PageButton
            header={"photography"}
            image={"/img/street.jpg"}
            offset={90}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}

// function Home() {
//   return (
//     <div className="home">
//       {/* <PageButton
//             header={"graphic design"}
//             image={"/img/cutedog.jfif"}
//             offset={35}
//           />
//       <header className="name font">
//         <h1>mia hsu</h1>
//       </header>
//       <Socials /> */}
//       <PageButton header={"about"} image={"/img/street.jpg"} offset={180} />
//     </div>
//   );
// }

export default Home;
