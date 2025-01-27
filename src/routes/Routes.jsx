import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Tour from "../pages/Tour";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://country-toure-server.vercel.app/tour')
      },
      {
        path: "/tours/:id",
        element: <PrivateRoute><Tour></Tour></PrivateRoute>,
        loader: () => fetch('https://country-toure-server.vercel.app/tour')
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://country-toure-server.vercel.app/tour')
      },
      {
        path: "/addTouristsSpot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://country-toure-server.vercel.app/tour')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://country-toure-server.vercel.app/tour/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);
export default router;