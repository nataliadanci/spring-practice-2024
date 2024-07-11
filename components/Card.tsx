import React from "react";

// Define CardProps type
type CardProps = {
  color: string;
};

// Card component
export const Card = ({ color }: CardProps) => {
  return (
    <div className="w-24 h-24 flex items-center justify-center rounded-xl shadow-lg bg-white">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
