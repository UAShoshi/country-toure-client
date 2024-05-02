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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tour')
      },
      {
        path: "/tours/:id",
        element: <Tour></Tour>,
        loader: () => fetch('http://localhost:5000/tour')
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/tour')
      },
      {
        path: "/addTouristsSpot",
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
        loader: () => fetch('http://localhost:5000/tour')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/tour/${params.id}`)
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