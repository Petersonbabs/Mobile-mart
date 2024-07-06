import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const PaginationBar = () => {
  return (
    <div className="flex justify-center w-full my-2">
      <div className="flex items-center gap-4">
        <ChevronLeftIcon className="text-primary-300 size-6" />
        <div className="flex gap-4 sm:gap-8 items-center">
          <span>1</span>
          <span className="bg-primary-300 text-white-pure w-8 h-8 flex items-center justify-center rounded-full">2</span>
          <span>3</span>
          <span className="hidden sm:inline-block">4</span>
          <span>...</span>
          <span>99</span>
          <span>100</span>
        </div>
        <ChevronRightIcon className="text-primary-300 size-6" />
      </div>
    </div>
  );
};

export default PaginationBar;
