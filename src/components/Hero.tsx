import Carousel from "./Carousel";
import LeftComponent from "./LeftComponent";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className=" lg:grid  lg:grid-cols-2 lg:px-[10rem]  flex justify-center   pt-[4rem]  ">
        <div className=" max-[1000px]:hidden ">
          <LeftComponent />
        </div>
        <div className="text-3xl  lg:ml-[7rem] relative font-medium leading-10   max-w-[400px] pt-[5rem] ">
          <Carousel />
          <button className="text-white bg-black hover:bg-zinc-600 px-9 py-5 rounded-full mt-[8rem] text-[1.3rem] flex  items-center">
            Explore More <span className="text-2xl pl-[1rem]  ">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

function Header() {
  return (
    <div className="flex flex-col items-center  text-center py-[5rem]">
      <div>
        <h2 className="text-4xl font-Grace  text-green-600">
          {" "}
          Success stories
        </h2>
      </div>
      <div>
        <h1 className="text-6xl font-semibold">
          Every success Journey <br /> we've encountered.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
