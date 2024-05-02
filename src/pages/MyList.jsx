import { useLoaderData } from "react-router-dom";
import MyListCard from "./MyListCard";
import { useState } from "react";


const MyList = () => {
  const loadedTours = useLoaderData();
  const [tours, setTours] = useState(loadedTours)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
      {
        tours.map(tour => <MyListCard
          key={tour._id}
          tour={tour}
          tours={tours}
          setTours={setTours}
        ></MyListCard>)
      }
    </div>
  );
};

export default MyList;