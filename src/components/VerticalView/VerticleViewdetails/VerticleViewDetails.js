import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../HorizontalView/HorizontalViewDetails/Modal/Modal";

const VerticleViewDetails = ({ post }) => {
  const [display, setDisplay] = useState(true);
  const { title, body } = post;
  const date = new Date().toDateString();
  const handleRemoveItem = () => {
    setDisplay(false);
  };
  return (
    <div>
      <Modal />
      {display && (
        <div className="card p-3 my-3">
          <FaTimes
            onClick={() => handleRemoveItem()}
            style={{
              fontSize: "36px",
              color: "#fc8e8f",
              backgroundColor: "white",
              borderRadius: "50%",
              marginLeft: "300px",
              cursor: "pointer",
            }}
          />
          <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div className="card-body text-start" style={{ height: "280px" }}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <small className="text-muted">{date}</small>
            </div>

            <img
              src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticleViewDetails;
