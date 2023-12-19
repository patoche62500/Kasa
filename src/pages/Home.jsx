import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Galery from "../components/galery";
import imageSrc from "../assets/banner/banner.png";
import JsonData from "../datas/logements.json";

export async function loader() {
  const logements = JsonData;

  return { logements };
}

function Home() {
  const { logements } = useLoaderData();

  return (
    <main>
      <Banner imageSrc={imageSrc} bIsText={true} />
      <Galery jsonData={logements} />
    </main>
  );
}

export default Home;
