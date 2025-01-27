import { useLoaderData} from "react-router-dom";


const Tour = () => {
  // name, email, touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image
  const tours = useLoaderData();
  console.log(tours);

  


  return (
    <div>
      <div className="lg:flex lg:col-span-3 gap-6 space-y-4 m-8">
      <div className="flex-2">
      <p className="font-bold py-5">Tourists Spot Name: {tours.averageCost}<span className="rounded-md px-2">{tours.name}</span></p>
      <h1 className="text-4xl font-bold italic">{tours.email}</h1>
      <h1 className="font-bold my-3">{tours.touristsSpotName}</h1>
      <hr />
      <p><span className="bg-base-300 px-2 rounded-md">{tours.countryName}</span></p>
      <h1 className="flex items-center text-[#C69145] text-4xl my-5 font-bold">{tours.location}</h1>
      <p className="py-3">{tours.travelTime}</p>
      <p className="py-3">{tours.totaVisitorsPerYear}</p>
      <p className="py-3">{tours.seasonality}</p>
      <hr />
      </div>
      <div>
      <img src={tours.image} alt="" />
      </div>
      <p className="flex-1"><span className="font-bold">:</span> {tours.shortDescription}</p>
      </div>
    </div>
  );
};

export default Tour;