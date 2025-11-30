import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";
  const isLogin = location.pathname === "/login";

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`duration-300 transform h-full transition-all ${
          isSignup ? " w-0 md:w-[30%]" : "w-0"
        } bg-linear-to-bl from-primary to-secondary`}
      ></div>
      <div className="md:w-[70%] overflow-auto w-full h-full  flex items-center justify-center">
        <Outlet />
      </div>
      <div
        className={`duration-300 transform h-full transition-all ${
          isLogin ? "w-0 md:w-[30%]" : "w-0"
        } bg-linear-to-br from-primary to-secondary`}
      ></div>
    </div>
  );
}
