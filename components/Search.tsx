import { useState } from "react";

type SearchProps = {
  onChange: (newValue: string) => void;
};

export const Search = ({ onChange }: SearchProps) => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperWidth = focused ? "18" : "15.5";

  const wrapperStyle = {
    width: `${wrapperWidth}rem`,
    transition: "width 0.1s ease-in-out",
    backgroundColor: focused ? "#fff" : "#dedbdb",
    border: focused ? "0.094rem solid black" : "none",
  };

  return (
    <div
      className="input-wrapper w-full h-10 border-none rounded-sm px-4 py-0 bg-[#dedbdb] flex items-center"
      style={wrapperStyle}
    >
      {!focused && (
        <svg
          width="20"
          height="20"
          color="black"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      )}

      <input
        className="bg-transparent border-none h-full text-xs w-full ml-4 text-black placeholder-opacity-80 focus:outline-none"
        placeholder="Caută articole, branduri și multe altele..."
        type="text"
        value={input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
