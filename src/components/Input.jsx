import React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        "bg-bgGray p-4 rounded focus:border border-primary focus:outline-none w-full",
        className
      )}
      {...props}
    />
  );
});

export default Input;
