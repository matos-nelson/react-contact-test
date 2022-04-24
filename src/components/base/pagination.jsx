import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const maxPageItems = 2;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const left = currentPage - maxPageItems;
  const right = currentPage + maxPageItems + 1;
  const pages = Array.from({ length: pagesCount }, (v, k) => k + 1).filter(
    i => i && i >= left && i < right
  );
  return (
    <nav>
      <ul className="pagination">
        <li
          key={"prev"}
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          key={"next"}
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
