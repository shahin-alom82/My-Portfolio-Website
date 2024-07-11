import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Banner from "../Banner/Banner";
import Skils from "../Skils/Skils";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Root></Root>,
            children: [
                  {
                        path: "/",
                        element: <Home></Home>
                  },
                  {
                        path: "/About",
                        element: <Banner></Banner>
                  },
                  {
                        path: "/skils",
                        element: <Skils></Skils>,
                  },
                  {
                        path: "/Projects",
                        element: <MyPortfolio></MyPortfolio>,
                  },
                  {
                        path: "/contact",
                        element: <Contact></Contact>
                  }
            ]
      },
]);

export default router;