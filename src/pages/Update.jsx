import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const tour = useLoaderData();

  const {_id, touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image} = tour;

  const handleUpdate = event =>{
    event.preventDefault();
    const form = event.target;
    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const seasonality = form.seasonality.value;
    const shortDescription = form.shortDescription.value;
    const image = form.image.value;

    const updateTour = {touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image}
    console.log(updateTour);

    // send data to the server
    fetch(`https://country-toure-server.vercel.app/tour/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateTour)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Good Luck !!!',
          text: 'Card updated successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  }


  


  return (
    <div className="bg-[#F4F3F0] p-24">
    <h1 className="text-6xl font-extrabold">Update a Tour</h1>
    <form onSubmit={handleUpdate}>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Tourists Spot Name</span>
          </div>
          <input type="text" name="touristsSpotName"
          defaultValue={touristsSpotName}
           placeholder="Type Tourists Spot Name" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Country Name</span>
          </div>
          <input type="text" name="countryName"
          defaultValue={countryName}
           placeholder="Type Country Name"
           className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Location</span>
          </div>
          <input type="text" name="location"
          defaultValue={location} placeholder="Type Your Location" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Average Cost</span>
          </div>
          <input type="text" name="averageCost"
          defaultValue={averageCost} placeholder="Type Average Cost" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Travel Time</span>
          </div>
          <input type="text" name="travelTime"
          defaultValue={travelTime} placeholder="Type Travel Time" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Tota Visitors Per Year</span>
          </div>
          <input type="text" name="totaVisitorsPerYear"
          defaultValue={totaVisitorsPerYear} placeholder="Type Tota Visitors Per Year" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Seasonality</span>
          </div>
          <input type="text" name="seasonality"
          defaultValue={seasonality} placeholder="Type seasonality" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Short Description</span>
          </div>
          <input type="text" name="shortDescription"
          defaultValue={shortDescription} placeholder="Type Short Description" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold">Image</span>
          </div>
          <input type="text" name="image"
          defaultValue={image} placeholder="https://i.ibb.co/PGqMPr9/11.png" className="input w-full" />
        </label>
      </div>
      <input type="submit" value="Update Card" className="btn btn-block bg-black font-bold text-white" />
    </form>
  </div>
  );
};

export default Update;