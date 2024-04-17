import { twMerge } from "tailwind-merge";

/**
 * Button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.variant="primary"] - The button variant. Can be "primary" or "secondary".
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} props.className - Additional CSS class names for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ variant = "primary", children, className, ...props }) => {
  const classes = {
    default:
      "text-base font-500 md:text-lg py-2.5 sm:py-3 md:py-4 px-5 md:px-7 rounded-md transition-colors",
    primary: "text-surface bg-primary disabled:bg-disabled active:bg-pressed",
    secondary:
      "text-primary bg-surface border border-primary disabled:border-disabled disabled:text-disabled active:bg-pressed active:text-surface",
  };
  return (
    <button
      className={twMerge(
        classes.default,
        variant === "primary" ? classes.primary : classes.secondary,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
