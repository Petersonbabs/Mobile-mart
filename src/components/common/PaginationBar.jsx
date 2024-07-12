import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const PaginationBar = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center w-full my-5">
      <div className="flex items-center gap-6">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>
            <ChevronLeftIcon className="text-primary-300 size-6" />
          </button>
        )}
        <div className="flex gap-4 sm:gap-8 items-center">
          {pageNumbers.map(number => (
            <span
              key={number}
              onClick={() => paginate(number)}
              className={`cursor-pointer ${currentPage === number ? "bg-primary-300 text-white-pure w-8 h-8 flex items-center justify-center rounded-full" : ""}`}
            >
              {number}
            </span>
          ))}
        </div>
        {currentPage < totalPages && (
          <button onClick={() => paginate(currentPage + 1)}>
            <ChevronRightIcon className="text-primary-300 size-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationBar;
