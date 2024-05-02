import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";


const AllTouristsCard = ({tour}) => {

  const {_id, name, touristsSpotName, averageCost, travelTime, seasonality, image} = tour

  return (
    <div>
       <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl italic">{touristsSpotName}</h2>
    <div className="grid grid-cols-2 justify-between">
      <p><span className="font-bold">Name:</span> {name}</p>
      <p><span className="font-bold">Average Cost:</span> {averageCost}</p>
      <p><span className="font-bold">Travel Time:</span> {travelTime}</p>
      <p><span className="font-bold">Seasonality</span> {seasonality}</p>
    </div>
    <div className="card-actions justify-center">
    <Link to={`/tours/${_id}`}><button className="btn bg-[#D2B48C] text-white"><IoMdEye className="text-white"></IoMdEye> View Detail</button></Link>
    </div>
    </div>
</div>
    </div>
  );
};

export default AllTouristsCard;