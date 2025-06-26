import { Loader2 } from "lucide-react";
import ErrorIcon from "@/assets/logos/famuque-error.svg?react";
import CheckIcon from "@/assets/logos/famuque-successful.svg?react";

import { cn } from "@/lib/utils";
import { useCallback, InputHTMLAttributes, ReactNode } from "react";

interface FamuqueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  validation?: true | false | undefined;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  inputClassName?: string;
  variant?: "default" | "search";
}

export function FamuqueInput({
  type = "text",
  placeholder = "",
  error = false,
  errorMessage = "",
  validation = undefined,
  disabled = false,
  icon = null,
  loading = false,
  inputClassName = "",
  variant = "default",
  ...props
}: FamuqueInputProps) {
  const withPrependedIcon = icon !== undefined;
  const withAppendedIcon = validation !== undefined || loading || variant === "search";
  
  const clearValue = () => {
    if (props.onChange) {
      props.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  const stateAddon = useCallback(() => {
    if (loading) return <Loader2 className="size-comp-1 animate-spin" />;
    if (validation === true) return <CheckIcon className="size-comp-1 text-success" />;
    if (validation === false) return <ErrorIcon className="size-comp-1 text-error" />;
    if (variant === "search" && props.value !== "") return <ErrorIcon className="size-comp-1 text-gray-dark hover:text-gray cursor-pointer" onClick={clearValue}/>;
    return <div className="size-comp-1"></div>;
  }, [validation, loading, props.value]);

  return (
    <div className={cn("flex flex-col gap-y-std-1", props.className)}>
      <div
        className={cn(
          `w-full flex items-center py-std-1 px-std-3  overflow-hidden
          ${variant === "default" ? "border border-gray rounded-xl" : "bg-white"}`,
          {
            "border-gray-light pointer-events-none": disabled,
            "border-error focus-within:border-error": error,
          },
          inputClassName
        )}
      >
        {withPrependedIcon && <span className="pr-std-1">{icon}</span>}
        <input
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          {...props}
          className={cn(
            "w-full px-std-1 py-3 bg-transparent outline-none font-avenir-roman text-th-3",
            {
              "cursor-not-allowed text-gray-light": disabled,
            }
          )}
        />
        {withAppendedIcon && (
          <span className={cn("pl-std-1 ", { "text-gray-light ": disabled })}>
            {stateAddon()}
          </span>
        )}
      </div>
      {variant === "default" && (
        <span className="text-error pl-std-3 font-avenir-light">
          {error && errorMessage ? errorMessage : <span>&nbsp;</span>}
        </span>
        )
      }
    </div>
  );
}
