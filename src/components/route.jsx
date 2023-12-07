import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import Header from "../components/header/index"
import Footer from "../components/footer/index"

function ManageRoute() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default ManageRoute;
