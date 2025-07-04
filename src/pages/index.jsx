import { Suspense } from "react";
import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <Suspense>
              <Layout />
            </Suspense>
          ),
          children: [
            {
              path: "/",
              element: (
                <Suspense>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: "/shop",
              element: (
                <Suspense>
                  <Shop />
                </Suspense>
              ),
            },

            {
              path: "/about",
              element: (
                <Suspense>
                  <About />
                </Suspense>
              ),
            },
            {
              path: "/contact",
              element: (
                <Suspense>
                  <Contact />
                </Suspense>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default MainRouters;
