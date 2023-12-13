import { useLoaderData, redirect } from "react-router-dom";
import JsonData from "../datas/logements.json";

export async function loader({ params }) {
  const logement = JsonData.filter((element) => {
    if (element.title.toLowerCase().split(" ").join("_") === params.logementId) {
      return element;
    }
  });
  console.log(params);

  if (logement.length == 0) {
    return redirect("/");
  }

  return { logement };
}

function Logement() {
  const { logement } = useLoaderData();
  return <div>{JSON.stringify(logement)}</div>;
}

export default Logement;
