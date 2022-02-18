import React from "react";
import { FaTimes } from "react-icons/fa";

const HorizontalViewDetails = ({ post }) => {
  const { title, body } = post;
  const date = new Date().toDateString();
  return (
    <div className="d-flex align-items-center">
      <div className="card mb-3 border-0 shadow-lg p-3 rounded-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-1 rounded-circle p-1">
            <img
              src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-md-11 text-start">
            <div className="card-body ">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <p className="card-text">
                <small className="text-muted">{date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FaTimes
          className="shadow p-2 ms-3"
          style={{
            fontSize: "72px",
            color: "#fc8e8f",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default HorizontalViewDetails;
