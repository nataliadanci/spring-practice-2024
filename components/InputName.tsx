import React from "react";

interface InputNameProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputName = React.forwardRef<HTMLInputElement, InputNameProps>(
  (props: InputNameProps, ref) => {
    return (
      <input
        {...props}
        className="w-full h-1/4 bg-gray-200 text-black p-4 flex items-center justify-center font-sans mt-4"
        ref={ref}
      />
    );
  }
);

export default InputName;
