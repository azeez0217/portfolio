import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import {Skills,socialLinks,technoloyIcon} from '../util/data_store' 
import {cardItems} from '../util/portfolio_data';
const Main = () => {
  console.log(Skills)
  return (
    <>
      <Home  socialLinks={socialLinks} technoloyIcon={technoloyIcon}/>
      <About skills={Skills} style={{marginTop:'-30px'}}/>
      <Portfolio cardItems={cardItems}/>
      <Experience skills={Skills} />
      <Contact />
    
      <Footer />
    </>
  );
};

export default Main;
