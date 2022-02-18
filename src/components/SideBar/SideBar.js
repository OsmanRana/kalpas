import React from "react";
import { FaListUl } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

const SideBar = ({
  handleComponentDisplay,
  display,
  handleAllDisplay,
  displayAll,
}) => {
  return (
    <div className="container shadow p-5 h-100 ">
      <div>
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
        <div className=" shadow rounded-3 p-3 my-5 bg-white">
          <h1>View Toggle</h1>
          {display ? (
            <div className="p-3  mx-5 d-flex justify-content-around rounded-3">
              <FaRegListAlt
                onClick={() => handleComponentDisplay()}
                style={{
                  fontSize: "100px",
                  color: "gray",
                  backgroundColor: "#dae2e9",
                  padding: "20px",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              />
              <FaListUl
                style={{
                  fontSize: "100px",
                  backgroundColor: "#98eec8",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              />
            </div>
          ) : (
            <div className="p-3  mx-5 d-flex justify-content-around rounded-3">
              <FaRegListAlt
                style={{
                  fontSize: "100px",
                  backgroundColor: "#98eec8",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              />
              <FaListUl
                onClick={() => handleComponentDisplay()}
                style={{
                  fontSize: "100px",
                  color: "gray",
                  backgroundColor: "#dae2e9",
                  padding: "20px",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </div>
        <div className=" shadow rounded-3 p-5 bg-white">
          <h1>Have a Feedback!</h1>
          <h3
            className="py-3 rounded-3"
            style={{ backgroundColor: "#98efc9", cursor: "pointer" }}
            onClick={() => handleAllDisplay()}
          >
            We're Listening
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
