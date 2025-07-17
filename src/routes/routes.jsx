import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layouts/Layout.jsx";
import { lazy, Suspense } from "react";
import NotFound from "../components/NotFound/NotFound.jsx";
import Loader from './../layouts/Loader';
import FoodAdditives from "../pages/Products/Food Additives/FoodAdditives.jsx";
import FeedAdditives from "../pages/Products/Feed Additives/FeedAdditives.jsx";
import Chemicals from "../pages/Products/Chemicals.jsx";
import CosmeticIngredients from "../pages/Products/CosmeticIngredients.jsx";
import APIIntermediates from "../pages/Products/APIIntermediates.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "Food-Additives",
        element: (
          <Suspense fallback={<Loader />}>
            <FoodAdditives />
          </Suspense>
        ),
      },
      {
        path: "Feed-Additives",
        element: (
          <Suspense fallback={<Loader />}>
            <FeedAdditives />
          </Suspense>
        ),
      },
      {
        path: "Chemicals",
        element: (
          <Suspense fallback={<Loader />}>
            <Chemicals />
          </Suspense>
        ),
      },
      {
        path: "Cosmetic-Ingredients",
        element: (
          <Suspense fallback={<Loader />}>
            <CosmeticIngredients />
          </Suspense>
        ),
      },
      {
        path: "API-Intermediates",
        element: (
          <Suspense fallback={<Loader />}>
            <APIIntermediates />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


export default routes;
