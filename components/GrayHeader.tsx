import { GreyHeaderButton } from "./GreyHeaderButton";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export const GrayHeader = () => {
  return (
    <header className="bg-gray-200 flex items-center justify-between w-full h-8">
      <div className="flex space-x-2">
        <div
          className={`mt-1 ml-10 flex-shrink-0 overflow-auto border-r border-l border-gray-300`} // Am schimbat ml-5 la ml-8 pentru prima diviziune
        >
          <GreyHeaderButton
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Unicode_0x0025.svg/170px-Unicode_0x0025.svg.png"
                className="w-4 h-4"
              />
            }
            text="Outlet"
            buttonClassName={`border border-gray-400 rounded-md px-2 py-1 pl-2 pr-2`}
          />
        </div>
        <div
          className={`mt-1 ml-10 flex-shrink-0 overflow-auto border-r border-gray-300`} // Am schimbat ml-5 la ml-8 pentru a doua diviziune
        >
          <GreyHeaderButton
            icon={
              <QuestionMarkCircledIcon className="w-4 h-4 font-extrabold" />
            }
            text="Contact & ajutor"
            buttonClassName={`border border-gray-400 rounded-md px-2 py-1 pl-2 pr-2`}
          />
        </div>
      </div>
    </header>
  );
};
