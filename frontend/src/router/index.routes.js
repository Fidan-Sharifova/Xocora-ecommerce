import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AboutMe from "../pages/User/AboutMe/AboutMe";
import AboutUs from "../pages/User/AboutUs/AboutUs";
import Basket from "../pages/User/Basket/Basket";
import Contact from "../pages/User/Contact/Contact";
import Detail from "../pages/User/Detail/Detail";
import Home from "../pages/User/Home/Home";
import Shop from "../pages/User/Shop/Shop";
import UserRoot from "../pages/User/UserRoot";
import Wishlist from "../pages/User/Wishlist/Wishlist";

const ROUTES = [
    {
      path: "/",
      element: <UserRoot/>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path:":id",
          element:<Detail/>
        },
        {
          path:"wishlist",
          element:<Wishlist/>
        },
        {
          path:"basket",
          element:<Basket/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"aboutUs",
          element:<AboutUs/>
        },
        {
          path:"aboutMe",
          element:<AboutMe/>
        },
        {
          path:"shop",
          element:<Shop/>
        }
     
      ],
    },
    {
      path: "/admin",
      element: <AdminRoot/>,
      children: [
        {
            path:"",
            element:<Dashboard/>
        }
      ],
    },
  ];
  
  export default ROUTES;
  