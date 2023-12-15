import React from "react";
import Banner from "../components/banner";
import Galery from "../components/galery";
import imageSrc from "../assets/banner/banner.png";

function Home() {
  return (
    <main>
      <Banner imageSrc={imageSrc} bIsText={true}/>
      <Galery />
    </main>
  );
}

export default Home;
