import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxDemo: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <form>
      <div className="flex items-center ml-6">
        <Checkbox.Root
          className={`flex items-center justify-center w-8 h-4 mr-2 border border-gray-300 shadow-none outline-none cursor-pointer transition-colors ${
            isChecked ? "bg-black" : "bg-white"
          }`}
          id="c1"
          checked={isChecked}
          onClick={handleCheckboxClick}
        >
          <Checkbox.Indicator className="text-white">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="leading-none font-sans font-medium text-gray-400 px-2 text-xs !cursor-pointer"
          htmlFor="c1"
        >
          Vreau să primesc informații despre tendințele actuale, promoții și
          vouchere prin e-mail de la ABOUT YOU. Te poți dezabona oricând
          gratuit.
        </label>
      </div>
    </form>
  );
};

export default CheckboxDemo;
