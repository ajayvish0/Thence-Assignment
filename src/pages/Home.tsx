import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div className="px-5 py-3">
      <Navbar title="" />
      <section className="">
        <Hero />
      </section>
      <section className=" mt-[10rem] bg-[#E8EEE7] p-[4rem] rounded-[3rem]">
        <Questions />
      </section>
      <section className="bg-zinc-100 rounded-[3rem] px-[1.5rem] mt-[2rem]">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
