import { useLoaderData } from "react-router-dom";
import TourCard from "./TourCard";


const Home = () => {
  const tours = useLoaderData();
  

  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/wwW6fPc/sliderjpg.webp" className="w-full size-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4tMJ9Ks/balijpg.webp" className="w-full size-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jJH289d/phuketjpg.webp" className="w-full size-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pRM2W2w/langkawijpg.jpg" className="w-full size-2/3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

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