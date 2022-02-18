import React from "react";

const Modal = () => {
  return (
    <div>
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" >
              <iframe
                src="https://kalpas.in/"
                width="400"
                height="200"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
