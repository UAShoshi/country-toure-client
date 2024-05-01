import { Outlet } from "react-router-dom";
import Footer from "../pages/Sheared/Footer";
import Navber from "../pages/Sheared/Navber";


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto"><Navber></Navber></div>
      <Outlet></Outlet>
      <div className="m-8 max-w-7xl mx-auto"><Footer></Footer></div>
    </div>
  );
};

export default Root;