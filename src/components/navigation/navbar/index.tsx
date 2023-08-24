import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 border-b-2 border-gray-200 bg-red-200">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Button>About this</Button>
              </li>
              <li>
                <Button>Click me</Button>
              </li>
              <li>
                <Button>Click and me!</Button>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;