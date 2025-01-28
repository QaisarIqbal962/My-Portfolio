import { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import SocialLinks from "./Component/SocialLinks";
import Contact from "./Component/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>

    <SocialLinks/>
    </>
  );
}

export default App;
