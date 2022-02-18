import React from "react";
import Feedback from "../Feedback/Feedback";

const SideBarWithFeedBack = ({ handleAllDisplay, displayAll }) => {
  return (
    <div className="p-5 h-100 ">
      <div className=" me-5 row ">
        <div className="col-4 p-4">
          <div className="d-flex align-items-center shadow rounded-3 p-3 bg-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
              alt="User profile"
              className="img-fluid rounded-circle"
              width="100px"
            />
            <div className="ms-3  bg-white">
              <i className="fa-solid fa-xmark"></i>
              <h3>Hi, Reader,</h3>
              <p>Here's your news!</p>
            </div>
          </div>

          <div className=" shadow rounded-3 p-5 bg-white my-5">
            <h1>Have a Feedback!</h1>
            <h3
              className="py-3 rounded-3"
              style={{ backgroundColor: "#fc8e8f", cursor: "pointer" }}
              onClick={() => handleAllDisplay()}
            >
              We're Listening
            </h3>
          </div>
        </div>
        <div className="col-8">{!displayAll && <Feedback />}</div>
      </div>
    </div>
  );
};

export default SideBarWithFeedBack;
