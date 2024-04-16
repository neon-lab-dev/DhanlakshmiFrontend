/**
 * THE VARIANTS WILL BE
 * NORMAL - [ GRAYED COLOR WITH PLACEHOLDER ]
 * PRESSED - [ ADD THE OUTLINE & LABEL MOVED TO TOP ]
 */

import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        "bg-bgGray  p-4 rounded focus:border border-primary focus:outline-none w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
