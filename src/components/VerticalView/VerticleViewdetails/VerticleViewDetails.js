import React from "react";

const VerticleViewDetails = ({ post }) => {
  const { id, title, body } = post;
  const date = new Date().toDateString();
  return (
    <div>
      <div className="card p-3">
        <div className="card-body text-start" style={{height: "280px"}}>
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
  );
};

export default VerticleViewDetails;
