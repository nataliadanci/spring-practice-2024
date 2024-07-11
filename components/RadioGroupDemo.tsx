import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex gap-2.5"
      defaultValue="default"
      aria-label="View density"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white border-gray-400 border-1.5 w-[25px] h-[25px] rounded-full shadow-none hover:bg-white  outline-none cursor-pointer"
          value="default"
          id="r1"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black" />
        </RadioGroup.Item>
        <label
          className="font-sans font-semibold text-black px-2 text-sm"
          htmlFor="r1"
        >
          Dna
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white border-gray-400 border-1.5 w-[25px] h-[25px] rounded-full shadow-none hover:bg-white  outline-none cursor-pointer"
          value="comfortable"
          id="r2"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black" />
        </RadioGroup.Item>
        <label
          className="font-sans font-semibold text-black px-2 text-sm"
          htmlFor="r2"
        >
          Dl
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white border-gray-400 border-1.5 w-[25px] h-[25px] rounded-full shadow-none hover:bg-white  outline-none cursor-pointer"
          value="compact"
          id="r3"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black" />
        </RadioGroup.Item>
        <label
          className="font-sans font-semibold text-black px-2 mr-8 text-sm"
          htmlFor="r3"
        >
          Alt gen
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;
