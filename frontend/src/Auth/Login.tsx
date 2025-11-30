import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../hooks/useMutateData";
import { useAuthStore } from "../store/Authstore";
import { toast } from "react-toastify";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

interface LoginType {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [lockOpen, setLockOpen] = useState(false);

  const loginMutation = useLoginMutation();
  const { setUser } = useAuthStore();

  const onSubmit = (data: LoginType) => {
    const postData = { email: data?.email, password: data?.password };
    loginMutation.mutateAsync(["post", "", postData], {
      onSuccess: (response) => {
        if (response?.status === 201) {
          setUser({
            token: response?.data?.accessToken,
            // refresh: response?.data?.refresh ?? "",
            // data: response?.data?.user,
          });
          navigate("/");
          toast.success("Login successfully");
        }
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message || error?.message || "Unable to login"
        );
      },
    });
  };

  return (
    <div className="backdrop-blur-md md:h-fit h-full w-full  overflow-y-auto mx-auto md:shadow-[0px_0px_10px_2px]  duration-300  hover:shadow-primary  shadow-gray-300 md:w-1/2 lg:w-[40%]   text-White     text-center  rounded-xl   justify-center items-center px-10 py-14  ">
      <div className="w-full ">
        <img
          className="w-20 h-20 mx-auto rounded-full  object-contain"
          src="./logo.png"
        />
      </div>
      <h1 className="text-3xl   font-semibold">Welcome back</h1>
      <h1 className="text-sm text-muted-foreground pb-5  ">
        Welcome back, Please enter your details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-left gap-5"
      >
        <div className="items-center  relative ">
          <Input type="text" {...register("username")} placeholder="Username" />
          <FaUser size={20} className="top-4 right-3 absolute" />
        </div>

        <div className="items-center  relative ">
          <Input type="text" {...register("password")} placeholder="Password" />
          <div
            onClick={() => setLockOpen(!lockOpen)}
            className="absolute top-4 right-3"
          >
            {lockOpen === true ? (
              <FaEye className="text-[20px] " />
            ) : (
              <FaEyeSlash className="text-[20px] " />
            )}
          </div>
        </div>

        <div className="flex   justify-between text-black">
          <div className="flex items-center gap-2">
            <Input type="checkbox" className="h-7 w-fit" />
            <p className="text-muted-foreground">Remember Me</p>
          </div>
          <Link to={"/login"}>
            <p className="text-muted-foreground">Forgot Password?</p>
          </Link>
        </div>

        <div className="text-center flex justify-center py-3 w-full">
          <Button type="submit" className="w-full text-xl ">
            Login
          </Button>
        </div>
        <div className="grid grid-cols-3 text-center items-center gap-0">
          <div className="border-t-2"></div>
          <p className="text-muted-foreground">Or Continue with</p>
          <div className="border-t-2"></div>
        </div>
        <div className="rounded-full flex  justify-center gap-2 hover:bg-primary/10 items-center w-fit p-2 px-5 mx-auto border-2 border-gray-300">
          <img src="./google.png" className="h-5 w-5 object-contain" alt="" />
          <p className="font-semibold text-muted-foreground">
            Sign in with google
          </p>
        </div>
        <div className=" text-black flex items-center  text-center justify-center gap-1 text-lg flex-wrap">
          <p className="text-muted-foreground text-sm">
            Do you already have an account?
          </p>
          <Link to="/signup">
            <p className="font-bold hover:underline text-primary">Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
