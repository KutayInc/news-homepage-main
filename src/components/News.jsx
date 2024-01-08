function News() {
  return (
    <div className="bg-veryDarkBlue p-5 col-span-2 row-span-2 md:p-10">
      <h2 className="text-3xl text-softOrange mb-3 md:text-4xl font-bold">
        New
      </h2>
      <div className="my-7 md:my-10">
        <h3 className="text-white my-1 md:my-4 font-bold text-xl hover:text-softOrange cursor-pointer">
          Hydrogen VS Electric Cars
        </h3>
        <p className="text-grayishBlue">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr />
      <div className="my-7 md:my-10">
        <h3 className="text-white my-1 md:my-4 font-bold text-xl hover:text-softOrange cursor-pointer">
          The Downsides of AI Artistry
        </h3>
        <p className="text-grayishBlue">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div className="mt-7 md:my-10">
        <h3 className="text-white my-1 md:my-4 font-bold text-xl hover:text-softOrange cursor-pointer">
          Is VC Funding Drying Up?
        </h3>
        <p className="text-grayishBlue">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

export default News;
