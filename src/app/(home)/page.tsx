import Navbar from "../../components/shared/navbar";
import Hero from "../../components/shared/hero";

export default function Home() {
  return (
    <>
      <div className="md:max-w-[1200px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
