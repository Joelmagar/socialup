import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMailBulk, FaUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../hooks/useMutateData";

interface SignupType {
  email?: string;
  username?: string;
  password?: string;
}
const Signup = () => {
  const navigate = useNavigate();
  const [lockOpen, setLockOpen] = useState(false);
  const registerMutation = useRegisterMutation();
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data: SignupType) => {
    const postData = {
      email: data?.email,
      username: data?.username,
      password: data?.password,
    };
    registerMutation?.mutateAsync(["post", "", postData], {
      onSuccess: () => {
        toast.success("Your account has been registered!!");
        navigate("/login");
      },
      onError: (error) => {
        toast.error(error?.message);
      },
    });
  };

  return (
    <div className="backdrop-blur-md md:h-fit h-full mx-auto shadow-[0px_0px_10px_2px]  overflow-auto md:overflow-visible duration-300   hover:shadow-primary  shadow-gray-300 md:w-1/2 lg:w-[40%] w-full  text-White     text-center  rounded-xl   justify-center items-center px-10 py-10  ">
      <div className="w-full flex  gap-3    items-center justify-center">
        <img
          className="w-20 h-20  rounded-full  object-contain"
          src="./logo.png"
        />
      </div>
      <h1 className="md:text-4xl text-2xl  font-semibold">Registration</h1>
      <p className="text-sm text-muted-foreground pb-5">
        Enter your details to register.
      </p>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col text-left   gap-2"
      >
        <div className="items-center mt-2  relative ">
          <Input type="text" {...register("username")} placeholder="Username" />
          <FaUser size={20} className="top-3 right-2 absolute" />
        </div>
        <div className="items-center mt-2  relative ">
          <Input type="text" {...register("email")} placeholder="Email" />
          <FaMailBulk size={20} className="absolute top-3 right-2 " />
        </div>
        <div className="items-center mt-2  relative ">
          <Input
            type="text"
            {...register("password")}
            placeholder="Password"
            className=""
          />
          <div
            onClick={() => setLockOpen(!lockOpen)}
            className="absolute top-3 right-2"
          >
            {lockOpen === true ? (
              <FaEye className="text-[20px] " />
            ) : (
              <FaEyeSlash className="text-[20px] " />
            )}
          </div>
        </div>
        <div className="text-center flex justify-center my-3 w-full items-center">
          <Button type={"submit"} className="w-full py-5 text-xl">
            Sign-up{" "}
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-3 text-center items-center gap-0">
        <div className="border-t-2"></div>
        <p className="text-muted-foreground">Or Continue with</p>
        <div className="border-t-2"></div>
      </div>{" "}
      <div className="rounded-full flex mt-3 justify-center gap-2 hover:bg-primary/10 items-center w-fit p-2 px-5 mx-auto border-2 border-gray-300">
        <img src="./google.png" className="h-5 w-5 object-contain" alt="" />
        <p className="font-semibold text-muted-foreground">
          Sign up with google
        </p>
      </div>
      <div className="flex  text-[18px] justify-center  gap-1 my-3">
        <p className="text-gray-600">Have an account?</p>
        <Link to="/login">
          <p className="font-bold hover:underline text-primary">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
