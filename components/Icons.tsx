import Link from "next/link";
import Image from "next/image";
import DialogDemo from "./Dialog";

import {
  PersonIcon,
  BellIcon,
  HeartIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export const Icons = () => {
  return (
    <nav className="  bg-white h-16 w-46 flex justify-end items-center space-x-4">
      <DialogDemo>
        <PersonIcon className="h-6 w-6 mx-2 text-black cursor-pointer" />
      </DialogDemo>
      <Link href="/notifications">
        <BellIcon className="h-6 w-6 mx-2 text-black" />
      </Link>
      <Link href="/favorites">
        <HeartIcon className="h-6 w-6 mx-2 text-black" />
      </Link>
      <Link href="/cart">
        {/* TO DO: I need the real icon for this. */}
        <SunIcon className="h-6 w-6 mx-2 text-black" />
      </Link>
    </nav>
  );
};
