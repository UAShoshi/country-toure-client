import { useLoaderData, useParams } from "react-router-dom";


const Tour = () => {
  // name, email, touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image
  const tours = useLoaderData();
  const {_id} = useParams();
  const idInt = parseInt(_id);
  const tour = tours.find(toure => toure._id === idInt);
  console.log(tour);
  return (
    <div>
      <div className="lg:flex lg:col-span-3 gap-6 space-y-4 m-8">
      <div className="flex-2">
      <p className="font-bold py-5">Tourists Spot Name: {tour.touristsSpotName}<span className="rounded-md px-2">{}</span></p>
      <h1 className="text-4xl font-bold italic">{}</h1>
      <h1 className="font-bold my-3">{}</h1>
      <hr />
      <p><span className="bg-base-300 px-2 rounded-md">{}</span></p>
      <h1 className="flex items-center text-[#C69145] text-4xl my-5 font-bold">{}</h1>
      <p className="py-3">{}</p>
      <hr />
      </div>
      <div>
      <img src={tours.image} alt="" />
      </div>
      <p className="flex-1"><span className="font-bold">:</span> {}</p>
      </div>
    </div>
  );
};

export default Tour;