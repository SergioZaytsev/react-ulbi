import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Paginations = ({ totalPages, currentPage, onChange }) => {
  const changePage = (page) => {
    onChange(page);
  };
  return (
    <div className="pagination">
      {totalPages.map((page) => (
        <span className={page === currentPage ? "pagination__item active" : "pagination__item"} key={page} onClick={() => changePage(page)}>
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginations;
