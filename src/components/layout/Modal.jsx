import { CheckIcon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Modal = ({ title, message, loading }) => {
  const [content, setContent] = useState('')
  useEffect(()=>{
    setContent(message)
  }, [message])
  
  return (
    <div
      className={`flex justify-center items-center bg-gray-primary  h-full w-full z-10 ${
        !content ? "hidden" : "block"
      }`}
      style={{  position: "fixed", top: "0" }}
    >
      <div className="bg-white-pure p-8 w-90vw max-w-2xl relative text-center shadow-md rounded-lg flex flex-col items-center justify-center gap-2">
        <XMarkIcon onClick={()=>{setContent('')}} className="size-4 cursor-pointer hover:border-1 hover:border-primary-300 absolute top-4 right-4 bg-primary-100 text-primary-400  rounded-full w-8 h-8" />
        <ShoppingCartIcon className="stroke-primary-300 text-white-pure size-16 " />
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span>{content}</span>
          {loading ? (
            <div className="spinner-grow bg-primary-300" role="status">
              <span className="visually-hidden">...</span>
            </div>
          ) : (
            <CheckIcon className="size-6 text-primary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
