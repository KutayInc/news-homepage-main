import mainMobile from "../../assets/images/image-web-3-mobile.jpg";
import mainDesktop from "../../assets/images/image-web-3-desktop.jpg";

function Main() {
  return (
    <main className="my-5 md:my-0 col-span-4 row-span-2">
      <div>
        <img
          src={mainMobile}
          srcSet={`${mainMobile} 300w, ${mainDesktop} 1000w`}
          alt=""
          className="main-img w-full h-full"
        />
      </div>
      <div className="md:flex mt-5">
        <div className="my-5 md:w-2/4">
          <h1 className="text-4xl font-extrabold pr-12 md:text-6xl ">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="my-5 md:w-2/4 md:mx-5">
          <p className="my-5 md:my-0 text-darkGrayishBlue md:mb-10 md:pr-8">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-1/2 h-12 bg-softRed text-white tracking-widest text-sm mb-12 hover:bg-veryDarkBlue">
            READ MORE
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
