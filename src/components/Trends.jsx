import retroPc from "../../assets/images/image-retro-pcs.jpg";
import laptops from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";

function Trends() {
  return (
    <div className="my-8 col-span-6 row-span-1 md:grid grid-cols-6 gap-4">
      <div className="flex my-5 col-span-2">
        <img src={retroPc} alt="" className="w-1/3 mr-5 md:h-44" />
        <div>
          <h2 className="text-3xl font-bold text-grayishBlue">01</h2>
          <h3 className="text-lg font-bold my-3 hover:text-softRed cursor-pointer">
            Reviving Retro PCs
          </h3>
          <p className="text-darkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="flex my-5 col-span-2">
        <img src={laptops} alt="" className="w-1/3 mr-5  md:h-44" />
        <div>
          <h2 className="text-3xl font-bold text-grayishBlue">02</h2>
          <h3 className="text-lg font-bold my-3 hover:text-softRed cursor-pointer">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-darkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex my-5 col-span-2">
        <img src={gaming} alt="" className="w-1/3 mr-5 md:h-44" />
        <div>
          <h2 className="text-3xl font-bold text-grayishBlue">03</h2>
          <h3 className="text-lg font-bold my-3 hover:text-softRed cursor-pointer">
            The Growth of Gaming
          </h3>
          <p className="text-darkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trends;
