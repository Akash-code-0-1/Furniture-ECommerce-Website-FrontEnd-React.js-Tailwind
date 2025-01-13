import React from "react";
import Header from "../components/Header";
import Home_section_2 from "../components/Home_section_2";
import Products from "../components/Products";
import Home_Slide_section from "../components/Home_Slide_section";
import FurnitureShowcase from "../components/FurnitureShowcase";

const Home = () => {
  return (
    <div>
      <Header />
      <Home_section_2/>
      <Products limit={8} page="home"/>
      <Home_Slide_section/>
      <FurnitureShowcase/>
    </div>
  )
};

export default Home;