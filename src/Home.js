import "./Styles.css";
import Socials from "./components/Socials.js";
import PageButton from "./components/PageButton";

// function Home() {
//   return (
//     <div className="home">
//       <div className="bottom-row">
//         <PageButton
//           header={"graphic design"}
//           image={"/img/cutedog.jfif"}
//           offset={35}
//         />
//         <div className="center">
//           <header className="name font">
//             <h1>mia hsu</h1>
//           </header>
//           <Socials />
//         </div>
//         <PageButton
//           header={"photography"}
//           image={"/img/street.jpg"}
//           offset={180}
//         />
//       </div>
//     </div>
//   );
// }

function Home() {
  return (
    <div className="home">
      {/* <PageButton
            header={"graphic design"}
            image={"/img/cutedog.jfif"}
            offset={35}
          />
      <header className="name font">
        <h1>mia hsu</h1>
      </header>
      <Socials /> */}
      <PageButton header={"about"} image={"/img/street.jpg"} offset={180} />
    </div>
  );
}

export default Home;
