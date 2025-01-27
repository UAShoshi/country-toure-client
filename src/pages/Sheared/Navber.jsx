import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Navber = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  const NavLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
    <li><NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink></li>
    <li><NavLink to="/update">Update</NavLink></li>
    <li><NavLink to="/myList">My List</NavLink></li>
    <li><NavLink to="/login">LogIn</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
        <Link to='/'><a className="btn btn-ghost text-4xl font-extrabold italic">CountryTour</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <button onClick={handleSignOut} className="btn bg-black text-white">
          Sign Out</button> : <Link to="/login">
          <button className="btn bg-black text-white">
            login</button>
        </Link>
      }
      </div>
    </div>
  );
};

export default Navber;