import { useRouteError, Link } from "react-router-dom";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <section className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>Retourner sur la page d’accueil</Link>
      </section>
      <Footer />
    </>
  );
}
