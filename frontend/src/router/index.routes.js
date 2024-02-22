import Add from "../pages/Admin/Add/Add";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Edit from "../pages/Admin/Edit/Edit";
import Blog from "../pages/User/Blog/Blog";
import AboutMe from "../pages/User/AboutMe/AboutMe";
import AboutUs from "../pages/User/AboutUs/AboutUs";
import Basket from "../pages/User/Basket/Basket";
import Contact from "../pages/User/Contact/Contact";
import Detail from "../pages/User/Detail/Detail";
import Error from "../pages/User/Error/Error";
import Home from "../pages/User/Home/Home";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import Shop from "../pages/User/Shop/Shop";
import UserRoot from "../pages/User/UserRoot";
import Wishlist from "../pages/User/Wishlist/Wishlist";
import AdminLogin from "../pages/Admin/AdminLogin/AdminLogin";
import AdminRegister from "../pages/Admin/AdminRegister/AdminRegister";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "aboutMe",
        element: <AboutMe />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "error",
        element: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
       path:"register",
       element:<AdminRegister/>
      }
    ],
  },
];

export default ROUTES;
