import AppRouter from "@/router/Router";
import { FamuqueToast } from "@/components/FamuqueToast";

export default function App() {
  console.log("MODE:", import.meta.env.MODE)
  console.log("CONTEXT:", process.env.CONTEXT)
  return (
    <>
      <AppRouter />
      <FamuqueToast />
    </>
  );
  
}
