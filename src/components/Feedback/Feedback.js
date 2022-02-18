import React, { useEffect, useState } from "react";
import validator from "validator";

const Feedback = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleEmailValidation = (e) => {
    if (validator.isEmail(e.target.value)) {
      setError("");
    } else {
      setError("Please enter a valid email.");
    }
  };
  const handleMobileValidation = (e) => {
    if (validator.isMobilePhone(e.target.value)) {
      setError("");
    } else {
      setError("Please enter a valid number.");
    }
  };
  return (
    <div className="mb-3 text-start ms-5" style={{ maxWidth: "700px" }}>
      <div className="mb-5">
        <h3>Thank you so much for taking the time!</h3>
        <p>Please provide the below details!</p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name:
          </label>
          <input
            type="name"
            className="form-control  border-0 shadow py-3"
            placeholder="John"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name:
          </label>
          <input
            type="email"
            className="form-control  border-0 shadow py-3"
            placeholder="Doe"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1">Comments</label>
          <textarea
            className="form-control  border-0 shadow"
            placeholder="Enter your full Postal address"
            id="exampleInputEmail1"
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Country:
          </label>
          <input
            type="text  "
            className="form-control  border-0 shadow py-3"
            placeholder="India"
            id="country"
            list="countries"
            name="country"
            aria-describedby="emailHelp"
          />
        </div>

        <datalist id="countries">
          {countries?.map((country) => (
            <option key={country.name} value={country.name} />
          ))}
        </datalist>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email ID:
          </label>
          <input
            onBlur={(e) => handleEmailValidation(e)}
            type="email"
            className="form-control  border-0 shadow py-3"
            placeholder="example@sample.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {error && <p className="my-3 text-danger">{error}</p>}
        </div>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number:
          </label>
          <div className="d-flex">
            <input
              onBlur={(e) => handleMobileValidation(e)}
              type="number"
              className="form-control  border-0 shadow py-3 w-25 text-center me-3"
              placeholder="+91"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <input
              onBlur={(e) => handleEmailValidation(e)}
              type="number"
              className="form-control  border-0 shadow py-3"
              placeholder="123456789"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary border-0 px-5 py-3 fw-bold fs-3 my-5"
          style={{ backgroundColor: "#98eec8" }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
