import { assests } from "../../../assets/assets";

const Hero = () => {
  return (
    <div className="py-20">
      {/* hero wrapper */}
      <div className="w-90vw m-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
        {/* hero left */}
        <div className="md:w-2/4 order-2 md:order-1">
          <button className="text-primary-300 block bg-gray-primary py-2 px-4 rounded-3xl font-bold">
            Find your perfect device
          </button>
          <p className="text-4xl font-bold leading-normal my-4">
            Explore our store: <br />
            The <span className="text-primary-300">best deals</span> you can get{" "}
            <br />
            anywhere
          </p>

          <button className="text-white-pure block bg-primary-300 hover:bg-primary-400 py-2 px-6 rounded-3xl font-bold mt-8">
            Get Started
          </button>
        </div>
        {/* end of hero left */}

        {/* hero right */}
        <div className="md:w-2/4 order-1 md:order-2 hero-right" >
          <img src={assests.IphoneHero} alt="" className="relative w-full" />
        </div>
        {/* end of hero right */}
      </div>
      {/* end of hero wrapper */}
    </div>
  );
};

export default Hero;
