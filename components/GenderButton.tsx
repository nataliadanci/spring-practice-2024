import React from "react";

type GenderButtonProps = {
  gender: string;
  isActive: boolean;
  onClick: () => void;
};

export const GenderButton = ({
  gender,
  isActive,
  onClick,
}: GenderButtonProps) => {
  return (
    <button
      className={`relative bg-white hover:text-black text-sm py-0 px-2 h-16 w-16 font-semibold transition duration-500 ${
        isActive ? "text-black" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {gender}
      <div
        className={`w-0 flex items-center justify-center mt-4 ml-auto mr-auto h-[1px] bg-black transition-all duration-500 ease-linear ${
          isActive && "!w-6 !h-[2px]"
        }`}
      />
    </button>
  );
};
