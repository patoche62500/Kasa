import Card from "../components/card";


function galery({jsonData}) {

  
  return (
    <section className="section__galery">
        <ul className="container__galery">
        {jsonData.map((location) => (<li className="container__card" key={location.id}><Card title={location.title} cover={location.cover}/></li>
        
      ))}
        </ul>
      
    </section>
  );
}

export default galery;
