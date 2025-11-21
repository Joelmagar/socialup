import Navbar from "@/components/navigation/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBar from "@/components/navigation/SideBar";
import { FaHome, FaPlusCircle, FaUserFriends } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

export default function BaseLayout() {
  const location = useLocation();
  const iconsList = [
    { title: "Home", icon: FaHome, link: "/feed" },
    { title: "Reels", icon: MdOutlineOndemandVideo, link: "/video" },
    { title: "Create", icon: FaPlusCircle, link: "/create" },
    { title: "Friends", icon: FaUserFriends, link: "/connections" },
    { title: "Inbox", icon: TiMessages, link: "/inbox" },
  ];
  return (
    <div className="h-screen scrollbar-hide   ">
      <Navbar />
      <div
        className={`flex md:h-[93%] h-[88%]  overflow-y-hidden scrollbar-hide   `}
      >
        <div
          className={` ${
            location?.pathname === "/inbox" ? "md:w-[6%]" : "md:w-[15%]"
          } bg-background duration-100 hidden md:block h-full overflow-y-auto scrollbar-hide `}
        >
          <SideBar />
        </div>
        <div
          className={` ${
            location?.pathname === "/inbox" ? "md:w-[94%]" : "md:w-[85%]"
          } h-full bg-background  duration-150 box-border w-full  overflow-y-auto scrollbar-hide`}
        >
          <Outlet />
        </div>
      </div>
      <footer className="w-full h-[5%]  sticky bottom-0 bg-background border-t md:hidden border-secondary/50">
        <div className="flex justify-between h-full px-4  items-center p-1   cursor-pointer">
          {iconsList?.map((item) => (
            <Link
              to={item?.link}
              className={` border-2 p-1 duration-150 rounded-3xl ${
                location?.pathname === item?.link
                  ? " border-secondary bg-secondary text-white "
                  : " border-background text-primary"
              } text-[25px]`}
              key={item?.link}
            >
              <p>
                <item.icon />
              </p>
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
