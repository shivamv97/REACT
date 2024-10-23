import AppLayout from "./App";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

export const appRoutes = [
  {
    path: "/",
    element: <div>Hiiii</div>,
    element: <div>Hiiii</div>,
    errorElement: <Error />,
    // children: [
    //   //Nested Routing
    //   {
    //     path: "/",
    //     element: <Body />,
    //   },
    //   {
    //     path: "/about", //parentPath/{path} => localhost:1234/about/profile
    //     element: <About />,
    //     children: [
    //       {
    //         path: "profile", //parentPath/{path} => localhost:1234/about/profile
    //         element: <Profile />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "/restaurant/:restaurantId", //Dynamic Routing
    //     element: <RestaurantMenu />,
    //   },
    // ],
  },
];
