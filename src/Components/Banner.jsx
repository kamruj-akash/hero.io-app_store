// import { FaApple, FaGooglePlay } from "react-icons/fa";
import appStore from "../assets/appStore.svg";
import heroBottomImg from "../assets/hero.png";
import playStore from "../assets/playStore.svg";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-[#f5f5f5] ">
      <h1 className="text-7xl font-bold text-center">
        We Build <br />
        <span className="gradient-text font-black">Productive</span> Apps
      </h1>
      <p className="max-w-[1000px] text-center pt-4 pb-8">
        at Appla.io, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 bg-white hover:shadow-lg hover:border-gray-400 hover:scale-105 transition-all duration-300"
        >
          <img className="w-8 h-8" src={appStore} alt="App Store" />
          <div className="text-left leading-tight">
            <p className="text-xs text-gray-500">Download on</p>
            <p className="text-base font-semibold text-black">App Store</p>
          </div>
        </a>

        {/* Play Store Button */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 bg-white hover:shadow-lg hover:border-gray-400 hover:scale-105 transition-all duration-300"
        >
          <img className="w-8 h-8" src={playStore} alt="Play Store" />
          <div className="text-left leading-tight">
            <p className="text-xs text-gray-500">Get it on</p>
            <p className="text-base font-semibold text-black">Play Store</p>
          </div>
        </a>
      </div>

      <div>
        <img src={heroBottomImg} alt="heroBottomImg" />
      </div>
    </div>
  );
};

export default Banner;
