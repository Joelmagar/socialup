import { User } from "lucide-react";
import { BiDoorOpen } from "react-icons/bi";
import { useState } from "react";
import ProfileIcon from "../tools/ProfileIcon";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [toggleProfile, setProfileActive] = useState<Boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="  w-full  h-[7%]  z-10 ">
      <div className="flex h-full  justify-between bg-background md:px-10 p-2   items-center    border-b border-secondary/50">
        <div className="  h-full w-fit  flex items-center">
          <img
            src={"./logo.png"}
            alt=""
            className=" h-12 mt-1  object-contain"
          />
          <p className="text-[30px]  font-serif text-secondary   font-bold">
            ChatUp
          </p>
        </div>

        <div className=" flex items-center   relative  gap-2  text-primary">
          <div onMouseEnter={() => setProfileActive(true)}>
            <ProfileIcon />
          </div>
          <div
            onMouseLeave={() => setProfileActive(false)}
            className={`absolute ${
              toggleProfile ? "opacity-100  mt-0 z-20" : "opacity-0 mt-3 -z-20"
            }  duration-150 w-40 top-full right-0 shadow-secondary/20 shadow-[0px_0px_5px_1px]   space-y-3 rounded-2xl bg-background  px-2 p-4`}
          >
            <Button
              variant={"ghost"}
              onClick={() => navigate("/profile")}
              className={`items-center flex gap-2 w-full p-2  justify-start  `}
            >
              <User size={20} />
              <p className={` text-semibold`}> Profile</p>
            </Button>
            <Button variant={"destructive"} className={`w-full justify-start`}>
              <BiDoorOpen size={2} />
              <p className={` text-semibold`}> Logout</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
