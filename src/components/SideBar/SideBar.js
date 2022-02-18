import React from "react";

const SideBar = () => {
  return (
    <div className="container shadow" style={{ width: "500px" }}>
      <div className="d-flex align-items-center shadow rounded-3 p-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
          alt="User profile"
          className="img-fluid rounded-circle"
          width="100px"
        />
        <div className="ms-3">
          <h3>Hi, Reader,</h3>
          <p>Here's your news!</p>
        </div>
      </div>
      <div className=" shadow rounded-3 p-3 my-5">
        <h1>View Toggle</h1>
      </div>
      <div className=" shadow rounded-3 p-3">
        <h1>Have a Feedback!</h1>
        <h3>We're Listening</h3>
      </div>
    </div>
  );
};

export default SideBar;
