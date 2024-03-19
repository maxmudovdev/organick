import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ShopSingle from "../Pages/ShopSingle/ShopSingle";
import Projects from "../Pages/Projects/Projects";
import News from "../Pages/News/News";

export const main_routers = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Shop />,
    path: "shop",
  },
  {
    component: <Projects />,
    path: "projects",
  },
  {
    component: <ShopSingle />,
    path: "shop-single",
  },
  {
    component: <News />,
    path: "news",
  },
];
