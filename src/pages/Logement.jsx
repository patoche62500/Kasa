import { useLoaderData, redirect } from "react-router-dom";
import JsonData from "../datas/logements.json";
import Slideshow from "../components/slideshow";

export async function loader({ params }) 
{
  const logement = JsonData.filter((element) => 
  {
    if (element.title.toLowerCase().split(" ").join("_") === params.logementId ) 
    {
      return element;
    }
    else{
      //console.log("rien")
      return null;
    }
  });
  //console.log(params);

  if (logement.length === 0) {
    return redirect("/");
  }

  return { logement };
}

function Logement() {
  const { logement } = useLoaderData();
  //console.log(logement[0].pictures[0])
  return (
    <section className="section__logement">
      {<Slideshow Image={logement[0].pictures} />}
      <div> {JSON.stringify(logement)}</div>
    </section>
  );
}

export default Logement;
