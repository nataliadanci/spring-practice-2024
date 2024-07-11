import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const DialogDemo = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const handleToggle = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-gray-400 shadow-blackA4 hover:bg-mauve-300 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 font-medium leading-none shadow-sm focus:shadow-md focus:shadow-black focus:outline-none">
          {isRegistering ? "Logare" : "Register"}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 backdrop-brightness-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[85vh] w-[90vw] max-w-[450px] rounded-md bg-white p-6 shadow-xl focus:outline-none">
          <div className="mt-5 flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-white text-black inline-flex h-10 items-center justify-center rounded-md px-4 font-medium leading-none focus:outline-none">
                {
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                }
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="text-black m-0 text-[17px] font-medium text-center">
            {isRegistering ? "Register" : "Log in"}
          </Dialog.Title>

          <Dialog.Description className="text-black mt-2 mb-5 text-[15px] leading-normal">
            {isRegistering
              ? "Make changes to your profile here. Click save when you're done."
              : "Enter your email and password to log in."}
          </Dialog.Description>
          {/** Natalia: insert TabsComponent here */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
