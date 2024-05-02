import { useLoaderData } from "react-router-dom";
import AllTouristsCard from "./AllTouristsCard";



const AllTouristsSpot = () => {
  const tourist = useLoaderData();

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
 {
    tourist.map(tour => <AllTouristsCard 
      key={tour._id}
      tour={tour}
       ></AllTouristsCard>)
  }
    </div>
  );
};

export default AllTouristsSpot;