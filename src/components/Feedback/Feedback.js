import React, { useEffect, useState } from "react";
import validator from "validator";

const Feedback = () => {
  const [countries, setCountries] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleEmailValidation = (e) => {
    if (validator.isEmail(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email.");
    }
  };
  const handleMobileValidation = (e) => {
    if (validator.isMobilePhone(e.target.value)) {
      setPhoneError("");
    } else {
      setPhoneError("Please enter a valid number.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for the feedback!");
  };
  return (
    <div className="mb-3 text-start ms-5" style={{ maxWidth: "700px" }}>
      <div className="mb-5">
        <h3>Thank you so much for taking the time!</h3>
        <p>Please provide the below details!</p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="name"
            className="form-control  border-0 shadow py-3"
            placeholder="John"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="name"
            className="form-control  border-0 shadow py-3"
            placeholder="Doe"
            id="lastName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="comments">Comments</label>
          <textarea
            className="form-control  border-0 shadow"
            placeholder="Enter your full Postal address"
            id="comments"
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
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
          <label htmlFor="emailId" className="form-label">
            Email ID:
          </label>
          <input
            onBlur={(e) => handleEmailValidation(e)}
            type="email"
            className="form-control  border-0 shadow py-3"
            placeholder="example@sample.com"
            id="emailId"
            aria-describedby="emailHelp"
          />
          {emailError && <p className="my-3 text-danger">{emailError}</p>}
        </div>
        <div className=" mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <div className="d-flex">
            <input
              onBlur={(e) => handleMobileValidation(e)}
              type="number"
              className="form-control  border-0 shadow py-3 w-25 text-center me-3"
              placeholder="+91"
              id="phoneNumber1"
              aria-describedby="emailHelp"
            />
            <input
              onBlur={(e) => handleEmailValidation(e)}
              type="number"
              className="form-control  border-0 shadow py-3"
              placeholder="123456789"
              id="phoneNumber2"
              aria-describedby="emailHelp"
            />
          </div>
          {phoneError && <p className="my-3 text-danger">{phoneError}</p>}
        </div>
        <button
          type="submit"
          className="btn btn-primary border-0 px-5 py-3 fw-bold fs-3 my-5"
          style={{ backgroundColor: "#98eec8" }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
