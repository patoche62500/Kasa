import ErrorPage from "../pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../pages/layout";
import Logement, { loader as logementloader } from "../pages/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "logements/:logementId",
        loader: logementloader,
        element: <Logement />,
      },
    ],
  },
]);

function ManageRoute() {
  return <RouterProvider router={router} />;
}

export default ManageRoute;
