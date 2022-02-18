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
        <div className="modal-dialog  ">
          <div
            className="modal-content"
            style={{ width: "1000px", height: "90vh", marginLeft: "-200px"  }}
          >
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
              title="Kalpas"
                src="https://kalpas.in/"
                width="800"
                height="750"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
