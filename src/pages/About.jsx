import React from "react";
import Banner from "../components/banner";
import imageSrc from "../assets/banner/banner_2.png";
import Collapse from "../components/collapse";
import dataJson from "../datas/collapses.json"

const CollapseName = dataJson;

function About() {
  return (
    <>
      <section>
        <Banner imageSrc={imageSrc} bIsText={false} />
      </section>
      <section className="section__collapse">
        <ul className="collapse__component">
          {CollapseName.map((element, index) => (
            <li key={index}>
              <Collapse title={element.name} description={element.description}/>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;
