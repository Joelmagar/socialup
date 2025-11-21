import ProfileIcon from "@/components/tools/ProfileIcon";
import { useAllUserData } from "@/hooks/useQueryData";
import Posts from "./Posts";

export default function Feed() {
  const { data, isLoading, isError } = useAllUserData();
  return (
    <div className=" md:p-5 pb-0 h-full   md:rounded-md    ">
      <div className="flex h-full  w-full  flex-col">
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
        <div className="   w-full rounded">
          <Posts />
        </div>
      </div>
    </div>
  );
}
