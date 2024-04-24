import React from "react";

const RightArrow = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-transparent text-orange hover:text-white hover:bg-orange rounded-full md:w-16 md:h-16 w-10 h-10 md:border-2 border-[1px] border-orange flex items-center justify-center cursor-pointer">
        <svg
          className="md:w-10 md:h-10 w-5 h-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5 12H19M14 7L19 12L14 17"
          />
        </svg>
      </div>
    </div>
  );
};

export default RightArrow;
