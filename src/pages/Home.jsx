import { useLoaderData } from "react-router-dom";
import TourCard from "./TourCard";
import Header from "./Sheared/Header";


const Home = () => {
  const tours = useLoaderData();
  

  return (
    <div>
      <Header></Header>

<div className="text-center space-y-3">
  <h1 className="text-4xl font-bold pb-2">Asian Odyssey</h1>
  <p>Explore rich cultures and stunning landscapes across vibrant Southeast Asia.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
  {
    tours.map(tour => <TourCard 
      key={tour._id}
      tour={tour}
       ></TourCard>)
  }
  </div>
  
</div>
    </div>
  );
};

export default Home;