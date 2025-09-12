import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan/>
    </div>
  );
};

export default Home;
