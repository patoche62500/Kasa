import Card from "../components/card";
import JsonData from "../datas/logements.json";

function galery() {

  
  return (
    <section className="section__galery">
        <ul className="container__galery">
        {JsonData.map((location) => (<li className="container__card" key={location.id}><Card title={location.title} cover={location.cover}/></li>
        
      ))}
        </ul>
      
    </section>
  );
}

export default galery;
