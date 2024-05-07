import { Link } from "react-router-dom";

const Navbar = ({ title }: { title: string }) => {
  return (
    <div
      className={`flex justify-between p-3 rounded-full items-center ${
        title === "signup" ? "border-none" : "border-2"
      }`}
    >
      <div>
        <img src="src/assets/logo.svg" alt="logo" width={"130px"} />
      </div>
      <div className="flex items-center">
        {title === "" ? (
          <div className="flex gap-x-3">
            <Link
              className="text-black bg-slate-100 hover:bg-gray-200 px-7 py-5 rounded-full"
              to="/signup"
            >
              Get Projects
            </Link>
            <Link
              className="text-white bg-black hover:bg-zinc-600 px-7 py-5 rounded-full"
              to="/"
            >
              Onboard Talent
            </Link>
          </div>
        ) : (
          <div className=" mr-[5rem]">
            <Link
              to="/"
              className=" rounded-full border-2 px-4  py-2 text-xl    "
            >
              x
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
