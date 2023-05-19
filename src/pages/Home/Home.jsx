import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Responsive from "./Slider";
import Contact from "./Contact";
import TabsMenu from "./TabsMenu";
import TestimonialSlider from "./TestimonialSlider";
import bannerImg from "../../assets/heroBanr.png";

const Home = () => {
  useTitle("Home");
  const [toysImg, setToysImg] = useState([]);

  useEffect(() => {
    fetch("https://ass-server-slsuyel.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToysImg(data);
      });
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div data-aos="flip-up" className="w-100 pt-0">
        <img src={bannerImg} alt="" className="img-fluid" />
      </div>
      <Responsive toysImg={toysImg} />
      <TabsMenu />
      <About />
      <TestimonialSlider />
      <Contact />
    </>
  );
};

export default Home;
