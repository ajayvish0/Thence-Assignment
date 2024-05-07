import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import right from "../assets/images/right.png";

const Redirecting = () => {
  const [count, setCount] = useState(5);
  const Navigate = useNavigate();
  useEffect(() => {
    if (count === 0) {
      Navigate("/");
    }
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div>
      <RedirectNavbar />
      <div className="h-full flex justify-center items-center pt-[5rem]">
        <div className="max-w-[450px] flex flex-col text-center items-center">
          <div className="w-[3.2rem]">
            <img src={right} alt="right logo" />
          </div>
          <h1 className="text-2xl font-Grace text-green-600 pt-[2rem]">
            Success Submitted
          </h1>
          <h1 className="text-4xl font-semibold pt-[1rem]">Congratuations</h1>
          <p className="text-lg text-zinc-400 pt-4">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
          <div className="relative top-[8rem] ">
            Redirecting you to Homepage in
            <span className="font-semibold"> {count} Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const RedirectNavbar = () => {
  return (
    <div className="flex justify-between p-3 rounded-full items-center ">
      <div>
        <img src={logo} alt="logo" width={"130px"} />
      </div>
    </div>
  );
};
export default Redirecting;
