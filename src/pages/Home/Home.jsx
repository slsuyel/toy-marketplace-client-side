import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Responsive from "./Slider";

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
    <div>
      <Responsive toysImg={toysImg} />
      <About />

    </div>
  );
};

export default Home;
