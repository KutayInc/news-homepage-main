import menuClose from "../../assets/images/icon-menu-close.svg";

function Nav(props) {
  return (
    <div
      className={
        props.showMenu
          ? "flex flex-col h-full w-screen -mt-5 right-0 absolute bg-screenShadow z-10"
          : "hidden"
      }
    >
      <nav className="right-0 absolute bg-white w-3/5 h-full">
        <div
          onClick={props.toggle}
          className={props.showMenu ? "absolute right-7 top-7" : "hidden"}
        >
          <img src={menuClose} alt="" />
        </div>
        <ul className="my-36">
          <li className="text-lg m-5">Home</li>
          <li className="text-lg m-5">New</li>
          <li className="text-lg m-5">Popular</li>
          <li className="text-lg m-5">Trending</li>
          <li className="text-lg m-5">Categories</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
