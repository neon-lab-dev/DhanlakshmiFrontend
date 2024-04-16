import { twMerge } from "tailwind-merge";

const ErrorLine = ({ error, className, ...props }) => {
  return (
    <div className={twMerge("text-red-400 text-sm", className)} {...props}>
      {error}
    </div>
  );
};
export default ErrorLine;
