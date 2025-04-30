import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, ReactNode } from "react";

interface FamuqueTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  errorMessage?: string;
  validation?: true | false | undefined;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  inputClassName?: string;
}

export function FamuqueTextArea({
  placeholder = "",
  error = false,
  errorMessage = "",
  validation = undefined,
  disabled = false,
  icon = null,
  loading = false,
  inputClassName = "",
  ...props
}: FamuqueTextAreaProps) {

  return (
    <div className={cn("flex flex-col gap-y-std-1", props.className)}>
      <div
        className={cn(
          `w-full flex items-center py-std-1 px-std-3 border border-gray rounded-xl overflow-hidden`,
          {
            "cursor-not-allowed opacity-40 pointer-events-none": disabled,
            "border-error focus-within:border-error": error,
          },
          inputClassName
        )}
      >
        {/* <textarea className="no-scroll" disabled={disabled} placeholder={placeholder} {...props} /> */}
        <textarea className="no-scroll w-full px-std-1 py-3 bg-transparent disabled:cursor-not-allowed outline-none resize-none h-28" disabled={disabled} placeholder={placeholder} {...props}/>
      </div>
      {error && errorMessage && <span className="text-error pl-std-3">{errorMessage}</span>}
    </div>
  );
}
