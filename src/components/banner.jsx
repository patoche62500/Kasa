import imageSrc from "../assets/banner/banner.png";

function banner() {
  return (
    <section className="section__banner">
      <div className="container__banner">
        <div className="container__banner--img">
          <img src={imageSrc} alt="" />
        </div>

        <div className="background"></div>

        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
}

export default banner;
