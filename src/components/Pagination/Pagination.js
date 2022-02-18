import React from "react";

const Pagination = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item ">
            <a className="page-link" href="#" aria-label="Previous">
              <span className="px-2 mx-2 text-dark " aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active ">
            <a className="page-link px-3 mx-2 rounded-circle bg-white text-dark border-0 " href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link px-3 mx-2 rounded-circle bg-secondary text-white" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link px-3 mx-2 rounded-circle bg-secondary text-white" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span className="px-2 mx-2 text-dark " aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
