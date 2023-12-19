import { useLoaderData, redirect } from "react-router-dom";
import JsonData from "../datas/logements.json";
import Slideshow from "../components/slideshow";
import Collapse from "../components/collapse";

export async function loader({ params }) {
  const logement = JsonData.filter((element) => {
    if (
      element.title.toLowerCase().split(" ").join("_") === params.logementId
    ) {
      return element;
    } else {
      //console.log("rien")
      return null;
    }
  });
  //console.log(params);

  if (logement.length === 0) {
    return redirect("/404");
  }

  return { logement };
}

function Logement() {
  const { logement } = useLoaderData();

  const name = logement[0].host.name.split(' ');

  //console.log(logement[0].pictures[0])

  const elementsForLoop = [];
  for (let i = 0; i < 5; i++) {
    if (i < logement[0].rating) {
      elementsForLoop.push(
        <li key={i}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#FF6060"
            />
          </svg>
        </li>
      );
    } else {
      elementsForLoop.push(
        <li key={i}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill="#E3E3E3"
            />
          </svg>
        </li>
      );
    }
  }

  return (
    <section className="section__logement">
      {<Slideshow Image={logement[0].pictures} />}
      <h2>{logement[0].title}</h2>
      <h3>{logement[0].location}</h3>

      <ul className="container__tags">
        {logement[0].tags.map((element, index) => (
          <li key={index} className="tag__element">{element}</li>
        ))}
      </ul>

      <div className="container__rating__host">
        <ul className="container__rating">{elementsForLoop}</ul>

        <div>
          <p className="hostname">{name.map((el, index)=><span key={index}>{el}</span>)}</p>
          <img src={logement[0].host.picture} alt="" />
        </div>
      </div>

      {<Collapse title={"Description"} description={logement[0].description} />}
      {
        <Collapse
          title={"Équipements"}
          contentCollapse={logement[0].equipments}
        />
      }
      {/*<div> {JSON.stringify(logement)}</div>*/}
    </section>
  );
}

export default Logement;
