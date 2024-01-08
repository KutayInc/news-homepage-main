import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import News from "./components/News";
import Trends from "./components/Trends";
import Nav from "./components/Nav";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function toggle() {
    setShowMenu((prev) => !prev);
    console.log(showMenu);
  }
  return (
    <div className="container mx-auto">
      <Nav toggle={toggle} showMenu={showMenu} />
      <Header toggle={toggle} showMenu={showMenu} />
      <div
        className={
          showMenu
            ? "mx-5 md:mb-12 md:mt-0 content md:h-fit  md:container md:mx-auto md:grid grid-cols-6 grid-rows-3 gap-4"
            : "m-5 md:mb-12 md:mt-0 content md:h-fit  md:container md:mx-auto  md:grid grid-cols-6 grid-rows-3 gap-4"
        }
      >
        <Main />
        <News />
        <Trends />
      </div>
    </div>
  );
}

export default App;
