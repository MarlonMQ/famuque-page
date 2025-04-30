import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { ReactNode, MouseEventHandler } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "hyperlinks";

interface FamuqueButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  prepend_icon?: ReactNode;
  append_icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  labelClassName?: string;
}

export function FamuqueButton({
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  uppercase = false,
  prepend_icon = null,
  append_icon = null,
  onClick = () => {},
  labelClassName = "",
  className = "",
  children,
  ...props
}: FamuqueButtonProps) {
  // Base class
  const cssClassNames = `flex flex-row items-center gap-std-2 cursor-pointer transition-colors duration-150 ease-in-out select-none ${(disabled||loading) ? "pointer-events-none" : ""}`;
 

  // Variants
  const variantStyles: Record<Variant, (string | false | undefined)[]> = {
    primary: [
      `bg-famuque py-5 px-7 font-avenir-medium text-2xl text-white`,
      "hover:bg-transparent hover:text-famuque hover:outline-famuque hover:outline-2",
      (loading || disabled) && `opacity-50`,

    ],
    secondary: [
      "font-avenir-roman text-black text-dh-4",
      " hover:text-gray",
      (loading || disabled) && `opacity-50`,
    ],
    tertiary: [
      "bg-white text-famuque py-5 px-7 font-avenir-medium text-2xl outline-famuque outline-2",
      "hover:bg-famuque hover:text-white",
      (loading || disabled) && `opacity-50`,
    ],
    hyperlinks: [
      "underline text-black hover:brightness-50 transition-all duration-300 ease-in-out",
      "hover:text-famuque",
      loading && "text-black opacity-50 no-underline",
      disabled && "text-black opacity-50 no-underline",
    ],
  };
  const selectedStyles = variantStyles[variant] || [];
  const finalClassName = cn(
    selectedStyles,
    cssClassNames,
    uppercase,
    (prepend_icon || append_icon),
    className,
  );

  return (
    <button
      onClick={onClick}
      className={finalClassName}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-comp-1 animate-spin" />
      ) : (
        prepend_icon && <span className="icon-prepend">{prepend_icon}</span>
      )}
      <div className={cn("flex-1 font-size-5", labelClassName)}>{children}</div>
      {append_icon && <span className="icon-pospend">{append_icon}</span>}
    </button>
  );
}
