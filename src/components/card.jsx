function card({ title, cover }) {
   
  return (
    <div className="container__card">
      <img src={cover} alt="" />
      <div className="container__card__background">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default card;
