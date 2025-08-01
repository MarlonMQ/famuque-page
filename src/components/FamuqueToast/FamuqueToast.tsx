import { toast } from "react-toastify";
import { ToastContainer, Bounce } from "react-toastify";
import { ReactElement } from "react";

function ToastComponent(): ReactElement {
  return (
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable       
        progressClassName={"toast-progress-custom"}
        transition={Bounce}
      />
  );
}

function showToast(message: string, type: "success" | "error" = "success") {
  if (type === "success") toast.success(message);
  else toast.error(message);
}

const FamuqueToast = Object.assign(ToastComponent, { showToast });

export default FamuqueToast;
