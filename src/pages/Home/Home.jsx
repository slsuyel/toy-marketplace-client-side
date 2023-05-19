import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Responsive from "./Slider";
import Contact from "./Contact";
import TabsMenu from "./TabsMenu";

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
      <About />
      <TabsMenu />

      <Contact />

    </>
  );
};

export default Home;
