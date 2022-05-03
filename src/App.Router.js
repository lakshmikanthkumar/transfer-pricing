import About from "./views/About";
import BenchmarkingServices from "./views/benchmarkingServices";
import Contact from "./views/Contact";
import Faq from "./views/Faq";
import Home from "./views/Home";
import Knowledge from "./views/Knowledge";

const AppRoutes = [
    {
      path: "/Home",
      exact: true,
      component : Home,
    },
    {
      path: "/About",
      exact: true,
      component : About,
    },
    {
      path: "/BenchmarkingServices",
      exact: true,
      component : BenchmarkingServices,
    },
    {
      path: "/Contact",
      exact: true,
      component : Contact,
    },
    {
      path: "/Faq",
      exact: true,
      component : Faq,
    },
    {
      path: "/Knowledge",
      exact: true,
      component : Knowledge,
    },
]

export default AppRoutes;