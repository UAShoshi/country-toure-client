import { Link } from "react-router-dom";


const Error = () => {
  return (
   <div className="flex justify-center items-center flex-col">
      <img src="/src/assets/404.gif" alt="" />
    <Link className="text-5xl font-black" to='/'><button className="btn btn-success text-white flex justify-center items-center">Home</button></Link>
   </div>
  );
};

export default Error;