import { useState } from "react";

import ChatBox from "./ChatBox";
import { FaSearch } from "react-icons/fa";
import { useAllUserData, useUserData } from "@/hooks/useQueryData";
import { timeAgo } from "@/components/tools/converter";
export default function Message() {
  const [chatData, setChatData] = useState();
  const { data } = useAllUserData();
  const { data: userData } = useUserData();
  const filteredData = data?.filter(
    (filter) =>
      !userData?._id.includes(filter?._id) &&
      userData?.friends?.includes(filter?._id)
  );

  return (
    <div className=" h-full overflow-hidden w-full   flex flex-col">
      <div className="flex h-full ">
        <div className="h-full  place-items-center border-r-2 hidden md:block md:w-[25%] z-10 overflow-y-auto scrollbar-hide border-secondary/30 ">
          <div className="w-[85%] mt-5  px-3 flex gap-1 bg-secondary/10 backdrop-blur-2xl items-center rounded-lg p-2">
            <FaSearch className="text-secondary" />
            <input
              type="search"
              className={
                "text-secondary p-1 bg-none  w-full   focus-within:outline-none"
              }
              placeholder="Search messages..."
            />
          </div>

          <div className="flex mt-10 flex-col w-[90%]  gap-2  ">
            {filteredData?.length < 1 ? (
              <div className="text-center text-primary">
                <p>No friends to message...</p>
              </div>
            ) : (
              filteredData?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setChatData(item)}
                  className="hover:border-white duration-300  border-2 border-black rounded-lg gap-2 overflow-x-hidden w-full  h-fit flex p-2"
                >
                  <img
                    src={item?.profile ?? "./profile.jpg"}
                    className="rounded-full object-cover  h-[50px]"
                  />

                  <div>
                    <p className="text-lg">{item?.username}</p>
                    <p className="text-sm">{timeAgo(item?.updatedAt)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {chatData ? (
          <div className="h-full border-2 md:w-[75%] w-full  rounded-lg">
            <ChatBox chatData={chatData} userData={userData} />
          </div>
        ) : (
          <div className=" font-extrabold text-3xl w-full md:w-[75%] text-primary h-full flex justify-center   items-center ">
            <p> No messages yet!!!</p>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
