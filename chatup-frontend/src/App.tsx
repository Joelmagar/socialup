import RouteHandler from "./RouteHandler";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <RouteHandler />
      <ToastContainer />
    </>
  );
}
