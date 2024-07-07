import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

const Modal = ({ title, message }) => {
  return (
    <div
      className={`flex justify-center items-center bg-gray-primary  h-full w-full z-10 ${
        !message ? "hidden" : "block"
      }`}
      style={{ height: "100vh", position: "fixed", top: "0" }}
    >
      <div className="bg-white-pure p-8 w-90vw max-w-2xl text-center shadow-md rounded-lg flex flex-col items-center justify-center gap-2">
        <ShoppingCartIcon className="stroke-primary-300 text-white-pure size-16 " />
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span>{message}</span>
          <div className="spinner-grow bg-primary-300" role="status">
            <span className="visually-hidden">...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
