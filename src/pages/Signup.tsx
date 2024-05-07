import Navbar from "../components/Navbar";
import SignForm from "../components/Form";

const Signup = () => {
  return (
    <div className="pt-2 px-5">
      <div>
        <Navbar title="signup" />
      </div>
      <div className="flex justify-center text-center items-center h-full pt-[2rem]">
        <SignForm />
      </div>
    </div>
  );
};

export default Signup;
