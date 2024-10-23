import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart")); //Lazy Loading
//Return Promise

const AppLayout = () => {
  return (
    <UserContext.Provider value={user}>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //Nested Routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About", //parentPath/{path} => localhost:1234/about/profile
        element: <About />,
        children: [
          {
            path: "profile", //parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:restaurantId", //Dynamic Routing
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//root will render according to the AppRouter