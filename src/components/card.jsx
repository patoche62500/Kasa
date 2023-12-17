import { Link } from "react-router-dom";

function card({ title, cover }) {
  const slug = title.toLowerCase().split(" ").join("_");
  //console.log(title)
  //console.log(slug);

  return (
    <Link className="" to={`logements/${slug}`}>
      <img src={cover} alt="" />
      <div className="container__card__background">
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default card;
