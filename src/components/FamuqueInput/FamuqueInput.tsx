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
  ...props
}: FamuqueInputProps) {
  const withPrependedIcon = icon !== undefined;
  const withAppendedIcon = validation !== undefined || loading;

  const stateAddon = useCallback(() => {
    if (loading) return <Loader2 className="size-comp-1 animate-spin" />;
    if (validation === true) return <CheckIcon className="size-comp-1 text-success" />;
    if (validation === false) return <ErrorIcon className="size-comp-1 text-error" />;
    return <></>;
  }, [validation, loading]);

  return (
    <div className={cn("flex flex-col gap-y-std-1", props.className)}>
      <div
        className={cn(
          `w-full flex items-center py-std-1 px-std-3 border border-gray rounded-xl overflow-hidden`,
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
      <span className="text-error pl-std-3 font-avenir-light">
        {error && errorMessage ? errorMessage : <span>&nbsp;</span>}
      </span>
    </div>
  );
}
