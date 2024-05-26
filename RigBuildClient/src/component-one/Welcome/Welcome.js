import React from 'react'
import "./Welcome.css";
import travel_01 from './WelcomeComponents/images/travel-01.jpg';
import travel_02 from './WelcomeComponents/images/travel-02.jpg';
import travel_03 from './WelcomeComponents/images/travel-03.jpg';
import Hero from './WelcomeComponents/Hero';
import Navbar from './WelcomeComponents/Navbar';
import Slider from './WelcomeComponents/Slider';



function Welcome() {

    const navbarLinks = [
        { url: "/", title: "Home" },
        { url: "ContactUs", title: "ContactUs"},
        { url: "Login", title: "LOGIN"},
        { url: "Admlog", title: "ADMIN"},
      ];

  return (
    <div className="App">
    <Navbar navbarLinks={navbarLinks} />
    <Hero imageSrc={travel_01} />
    <Slider
      imageSrc={travel_02}
      title={"Be an explorer. And Find Your Battle"}
      subtitle={
        "Our platform offers a wide variety of Unique Custom Rigs Builds"
      }
    />
    <Slider
      imageSrc={travel_03}
      title={"Gaming for a lifetime."}
      subtitle={"Build Your dream PC , Buy Accerories in Just few clicks away."}
      flipped={true}
    />
    <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Rig Builder. All Rights Reserved.</h6>

  </div>
  )
}

export default Welcome
