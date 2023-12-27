const banner = ({ imageSrc, bIsText = true, imageAlt }) => {
  return (
    <section className="section__banner">
      <div className="container__banner">
        <div className="container__banner--img">
          {/* Corriger le alt */}
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="background"></div>
        {bIsText ? (
          <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
        ) : null}
      </div>
    </section>
  );
};

export default banner;
