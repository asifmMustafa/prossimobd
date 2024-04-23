import React from "react";

const LeftArrow = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-transparent text-orange hover:text-white hover:bg-orange rounded-full w-16 h-16 border-2 border-orange flex items-center justify-center cursor-pointer">
        <svg
          className="w-10 h-10 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 12H5M10 7L5 12L10 17"
          />
        </svg>
      </div>
    </div>
  );
};

export default LeftArrow;
