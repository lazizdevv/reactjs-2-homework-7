import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-70 flex items-center justify-center">
      <div className="bg-white max-w-[500px] w-[90%] p-10 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white px-3 py-1 font-bold rounded-lg"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
