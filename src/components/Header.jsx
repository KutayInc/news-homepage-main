import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";

function Header(props) {
  return (
    <header className="flex m-5 md:mx-0 justify-between items-center col-span-full row-span-1">
      <div>
        <img src={logo} alt="" className="w-8/12 md:w-full" />
      </div>
      <div
        onClick={props.toggle}
        className={props.showMenu ? "hidden" : "block md:hidden"}
      >
        <img src={menu} alt="" />
      </div>

      <nav className="hidden md:flex">
        <p className="m-10 hover:text-softRed cursor-pointer">Home</p>
        <p className="m-10 hover:text-softRed cursor-pointer">New</p>
        <p className="m-10 hover:text-softRed cursor-pointer">Popular</p>
        <p className="m-10 hover:text-softRed cursor-pointer">Trending</p>
        <p className="ml-10 my-10 hover:text-softRed cursor-pointer">
          Categories
        </p>
      </nav>
    </header>
  );
}

export default Header;
