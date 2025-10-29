import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Posts from "./Posts";
import ProfileIcon from "../../tools/ProfileIcon";
import story1 from "../../assets/Pirate2.jpg";
import story2 from "../../assets/profile.jpg";
import story3 from "../../assets/logo5.png";
import story4 from "../../assets/purple.jpg";
import story5 from "../../assets/logo_black.png";
import story6 from "../../assets/purplr.jpg";
import story7 from "../../assets/pirate.jpg";
import { useAllUserData } from "../../hooks/useQueryData";
export default function Home() {
  const story = [
    {
      profile: story1,
    },
    {
      profile: story2,
    },
    {
      profile: story3,
    },
    {
      profile: story4,
    },
    {
      profile: story5,
    },
    {
      profile: story6,
    },
    {
      profile: story7,
    },
  ];
  const { data } = useAllUserData();
  return (
    <div className=" mt-10 h-fit   rounded-md    ">
      <div className="flex  place-items-center w-[83%]  flex-col">
        <div className="flex gap-4">
          {data &&
            data.map((item, index) => (
              <div key={index}>
                <ProfileIcon
                  profile={item?.profile ?? "./profile.jpg"}
                  classNamediv={
                    "w-[70px] p-[3px] chronic  h-full  flex justify-center rounded-full"
                  }
                  className={"w-[98%] object-cover"}
                />
              </div>
            ))}
        </div>
        <div className="h-[100%] w-[50%] rounded">
          <Posts />
        </div>
      </div>
    </div>
  );
}
