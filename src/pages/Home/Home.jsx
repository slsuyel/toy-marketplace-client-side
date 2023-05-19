import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Responsive from "./Slider";
import Contact from "./Contact";
import TabsMenu from "./TabsMenu";
import TestimonialSlider from "./TestimonialSlider";

const Home = () => {
  useTitle("Home")
  const [toysImg, setToysImg] = useState([])
  useEffect(() => {
    fetch("https://ass-server-slsuyel.vercel.app/alltoys")
      .then(res => res.json())
      .then(data => {
        setToysImg(data);
      })
  }, [])

  // console.log(toysImg);


  return (
    <>
      <Responsive toysImg={toysImg} />
      <TabsMenu />
      <About />
      <TestimonialSlider />
      <Contact />

    </>
  );
};

export default Home;
