import { FaHome, FaPlusCircle, FaSearch, FaUserFriends } from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { TiMessages, TiVideo } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();

  const navigate = useNavigate();
  const headerList = [
    { title: "Feed", icon: FaHome, link: "/feed" },
    { title: "Search ", icon: FaSearch, link: "/search" },
    {
      title: "Connections",
      icon: FaUserFriends,

      link: "/connections",
    },
    { title: "Explore", icon: MdCompare, link: "/explore" },
    { title: "Inbox", icon: TiMessages, link: "/inbox" },
    { title: "Reels", icon: TiVideo, link: "/video" },
    { title: "Create", icon: FaPlusCircle, link: "/create" },
    // {
    //   title: "Profile",

    //   icon: (
    //     <ProfileIcon
    //       profile={"./profile.png"}
    //       classNamediv="w-[30px]  h-[30px]"
    //     />
    //   ),
    //   link: "/profile",
    // },
  ];
  return (
    <div className={`h-full  w-full  border-r-2 border-r-secondary/50   flex`}>
      <div
        className={`${
          location.pathname === "/inbox" ? "items-center w-fit " : " w-full  "
        } flex flex-col gap-1 py-3  mx-auto   px-5`}
      >
        {headerList?.map((item) => (
          <div
            key={item?.link}
            onClick={() => {
              navigate(item?.link);
            }}
            className={`${
              location.pathname === item?.link
                ? "  text-white bg-linear-to-br from-primary via-primary  to-secondary    backdrop-blur-3xl "
                : "group text-muted-foreground hover:bg-primary/10"
            }  rounded-xl  w-full duration-150 cursor-pointer border-background border-2  flex items-center text-left`}
          >
            <p
              className={` ${
                location.pathname === item?.link ? "  " : ""
              } text-2xl p-3  `}
            >
              <item.icon
                className={`${
                  item?.link === location.pathname
                    ? "text-white"
                    : "text-primary "
                }`}
              />
            </p>

            {location?.pathname !== "/inbox" && (
              <p
                className={` w-full   font-semibold opacity-100 
                } duration-150 text-lg  hover:font-semibold group-hover:text-primary  `}
              >
                {item?.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
