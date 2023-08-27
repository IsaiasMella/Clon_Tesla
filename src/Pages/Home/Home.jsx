import { useEffect } from "react";

import { useNavColor } from "../../Hooks/useNavColor";

import { HomePresentation } from "./HomePresentation";
import { Footer } from "../../Components/Layouts/Footer/Footer";

const Home = () => {
  const { setItems, setNavBar, navBar } = useNavColor();

  useEffect(() => {
    const $sections = document.querySelectorAll("#section-home");
    const $navBar = document.querySelector("#nav-bar");

    setNavBar($navBar);
    setItems($sections);
  }, [navBar]);

  return (
    <>
    <div className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
      <HomePresentation /> 
    </div>
    <Footer />   
    </>
  );
};

export default Home;
