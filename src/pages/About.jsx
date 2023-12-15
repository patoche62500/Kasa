import React from "react";
import Banner from "../components/banner";
import imageSrc from "../assets/banner/banner_2.png";
import Collapse from "../components/collapse";

const CollapseName = ["Fiabilité", "Respect", "Service", "Sécurité"];

function About() {
  return (
    <>
      <section>
        <Banner imageSrc={imageSrc} bIsText={false} />
      </section>
      <section>
        <ul className="collapse__component">
          {CollapseName.map((element, index) => (
            <li key={index}>
              <Collapse title={element} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;
