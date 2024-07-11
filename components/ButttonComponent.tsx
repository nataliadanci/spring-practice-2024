import React from "react";

type ButtonComponentProps = {
  onClick?: () => void;
  text: string;
  variant: "primary" | "secondary" | "tertiary";
};

export const ButtonComponent = ({
  text,
  onClick,
  variant,
}: ButtonComponentProps) => {
  let buttonClass = "";

  switch (variant) {
    case "primary":
      buttonClass = "bg-black text-white";
      break;
    case "secondary":
      buttonClass = "bg-white text-black";
      break;
    case "tertiary":
      buttonClass = "bg-gray-300 text-black";
      break;
    default:
      buttonClass = "bg-gray-300 text-black";
  }

  return (
    <button
      className={`px-2 py-2 ${buttonClass} w-60 rounded h-12 flex-row items-center gap-1 p-1`}
      onClick={onClick}
    >
      <span className="text-xs font-bold">{text}</span>
    </button>
  );
};
