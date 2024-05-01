import { HiPencil } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const TourCard = ({tour}) => {

  const {name, email, touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image} = tour;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl italic">{touristsSpotName}</h2>
    <p>{shortDescription}</p>
    <div className="grid grid-cols-2 justify-between">
      <p><span className="font-bold">Name:</span> {name}</p>
      <p><span className="font-bold">Email:</span> {email}</p>
      <p><span className="font-bold">Tota Visitors Per Year:</span> {totaVisitorsPerYear}</p>
      <p><span className="font-bold">Average Cost:</span> {averageCost}</p>
      <p><span className="font-bold">Travel Time:</span> {travelTime}</p>
      <p><span className="font-bold">Seasonality</span> {seasonality}</p>
    </div>
    <div className="card-actions justify-center">
    <button className="btn bg-[#D2B48C] text-white"><IoMdEye className="text-white"></IoMdEye> Detail</button>
      <Link to='/update'><button className="btn bg-[#3C393B] text-white"><HiPencil className="text-white"></HiPencil> Update</button></Link>
      <button className="btn bg-[#EA4744] text-white"><MdDelete className="text-white"></MdDelete> Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default TourCard;