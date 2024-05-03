import { HiPencil } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCard = ({tour, tours, setTours}) => {

  const {_id, name, email, touristsSpotName, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image} = tour;



  const handleDelete = _id =>{
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
  
        fetch(`https://country-toure-server.vercel.app/tour/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success"
        }); 
        const remaining = tours.filter(cof => cof._id !== _id);
        setTours(remaining);        
          }
        })
      }
    });
  }

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
    <Link to={`/tours/${_id}`}><button className="btn bg-[#D2B48C] text-white"><IoMdEye className="text-white"></IoMdEye> Detail</button></Link>
      <Link to={`/update/${_id}`}><button className="btn bg-[#3C393B] text-white"><HiPencil className="text-white"></HiPencil> Update</button></Link>
      <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] text-white"><MdDelete className="text-white"></MdDelete> Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default MyListCard;