import AppRouter from "@/router/Router";
import { FamuqueToast } from "@/components/FamuqueToast";

export default function App() {
  console.log("MODE:", import.meta.env.MODE)       // "development" en branch deploy dev
  console.log("CONTEXT:", process.env.CONTEXT)    // "branch-deploy" en Netlify
  return (
    <>
      <AppRouter />
      <FamuqueToast />
    </>
  );
  
}
