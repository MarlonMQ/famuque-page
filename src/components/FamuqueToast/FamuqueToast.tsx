import { ReactElement } from "react";
import { Toaster  } from "@/components/ui/sonner"
import { toast } from "sonner"

function ToastComponent(): ReactElement {
  return (
      <Toaster 
        position="top-center"
        richColors
        closeButton
        duration={3000}
        className="text-lg"
      />
  );
}

function showToast(message: string, description: string = "", type: "success" | "error" | "info" = "success"): void {
  if (type === "success") toast.success(message, { description: description, closeButton: false });
  else if (type === "error") toast.error(message, { description: description, closeButton: false });
  else if (type === "info") toast.info(message, { description: description, closeButton: false });
}

const FamuqueToast = Object.assign(ToastComponent, { showToast });

export default FamuqueToast;
