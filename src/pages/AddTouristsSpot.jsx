import Swal from "sweetalert2";


const AddTouristsSpot = () => {

  const handleAddTour = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const seasonality = form.seasonality.value;
    const shortDescription = form.shortDescription.value;
    const image = form.image.value;

    const newTour = {name, email, touristsSpotName, countryName, location, averageCost, travelTime, totaVisitorsPerYear, seasonality, shortDescription, image}
    console.log(newTour);

    // send data to the server
    fetch('http://localhost:5000/tour', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newTour)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Good Luck !!!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  }


  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-6xl font-extrabold">Add a Tour</h1>
      <form onSubmit={handleAddTour}>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Name</span>
            </div>
            <input type="text" name="name" placeholder="Type Your Name" className="input w-full" />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Email</span>
            </div>
            <input type="email" name="email" placeholder="Type Your Email" className="input w-full" />
          </label>
        </div>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Tourists Spot Name</span>
            </div>
            <input type="text" name="touristsSpotName" placeholder="Type Tourists Spot Name" className="input w-full" />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Country Name</span>
            </div>
            <input type="text" name="countryName" placeholder="Type Country Name" className="input w-full" />
          </label>
        </div>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Location</span>
            </div>
            <input type="text" name="location" placeholder="Type Your Location" className="input w-full" />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Average Cost</span>
            </div>
            <input type="text" name="averageCost" placeholder="Type Average Cost" className="input w-full" />
          </label>
        </div>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Travel Time</span>
            </div>
            <input type="text" name="travelTime" placeholder="Type Travel Time" className="input w-full" />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Tota Visitors Per Year</span>
            </div>
            <input type="text" name="totaVisitorsPerYear" placeholder="Type Tota Visitors Per Year" className="input w-full" />
          </label>
        </div>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Seasonality</span>
            </div>
            <input type="text" name="seasonality" placeholder="Type seasonality" className="input w-full" />
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text font-bold">Short Description</span>
            </div>
            <input type="text" name="shortDescription" placeholder="Type Short Description" className="input w-full" />
          </label>
        </div>
        <div className="md:flex gap-3 mb-8">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Image</span>
            </div>
            <input type="text" name="image" placeholder="https://i.ibb.co/PGqMPr9/11.png" className="input w-full" />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block bg-black font-bold text-white" />
      </form>
    </div>
  );
};

export default AddTouristsSpot;