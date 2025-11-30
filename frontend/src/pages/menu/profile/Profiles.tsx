// import { useState } from "react";
// import ProfileIcon from "@/components/tools/ProfileIcon";
// import { IoIosSettings } from "react-icons/io";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import { IoMdGrid } from "react-icons/io";
// import { FiVideo } from "react-icons/fi";
// import ProfileVideos from "./ProfileVideos";
// import UserPosts from "./ProfilePost";
// import { usePostData, useUserData } from "@/hooks/useQueryData";
// import { Link } from "react-router-dom";

// export default function Profiles() {
//   const [active, setActive] = useState(1);
//   const activity = [
//     { title: "Photos", icon: <IoMdGrid />, id: 1 },
//     { title: "Videos", icon: <FiVideo />, id: 2 },
//   ];
//   const { data } = useUserData();
//   const { data: PostData, refetch } = usePostData();
//   const filter = PostData?.filter((filter) => filter?.user_id === data?._id);

//   return (
//     <div className="place-items-center ">
//       <div className="  py-[50px]  h-fit border-b-[1px] w-fit px-36 border-white mb-10">
//         <div className="flex gap-[50px] justify-center  place-items-center">
//           <div>
//             <ProfileIcon
//               profile={data?.profile ?? "./profile.png"}
//               classNamediv={"w-[140px]"}
//             />
//           </div>
//           <div className="flex flex-col gap-4">
//             <div className="flex  gap-5 items-center h-fit ">
//               <p className=" ">{data?.username}</p>
//               <div className="flex gap-2  ">
//                 {/* <p className="bg-white px-3 h-fit text-black rounded-lg ">
//                   Edit profile
//                 </p> */}
//                 {/* <p className="bg-white px-3 h-fit text-black  rounded-lg">
//                   View archive
//                 </p> */}
//               </div>
//               <Link to="/settings" className="text-[25px] ">
//                 <IoIosSettings />
//               </Link>
//             </div>
//             <div className="flex gap-[65px] pl-">
//               <p>{filter?.length} post</p>
//               <p>{data?.friends?.length} follower</p>
//               {/* <p>50 following</p> */}
//             </div>
//             <div>
//               <p className="font-semibold">Hora Esports</p>

//               <div className="flex items-center gap-2 bg-white text-black rounded-lg w-fit px-2 ">
//                 <p>{data?.email}</p>
//                 <p className="text-gray-500">
//                   <IoIosCheckmarkCircle />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-16 items-center pt-2">
//         {activity?.map((item) => (
//           <div
//             onClick={() => setActive(item?.id)}
//             key={item?.id}
//             className={`flex gap-1 items-center border-b-2 w-fit ${
//               active === item?.id ? " border-white" : "border-black"
//             }`}
//           >
//             {item?.icon}
//             <p className="text-white">{item?.title}</p>
//           </div>
//         ))}
//       </div>

//       {active === 1 ? (
//         <UserPosts data={filter} refetch={refetch} />
//       ) : active === 2 ? (
//         <ProfileVideos data={filter} />
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

import { Settings, Grid3x3, Bookmark, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const profilePosts = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80",
  "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&q=80",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400&q=80",
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&q=80",
  "https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=400&q=80",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=400&q=80",
];

const Profile = () => {
  const [currentPost, setCurrentPost] = useState<string | null>(null);
  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-6 p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Avatar className="h-24 w-24  border-primary/20 shadow-glow">
            <AvatarFallback className="bg-linear-to-br from-primary/50 via-primary to-secondary  text-3xl text-white">
              JD
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">@johndoe</p>
            <p className="mt-4 max-w-md">
              📸 Photography enthusiast | 🌍 Travel lover | ☕️ Coffee addict
            </p>

            <div className="mt-6 flex justify-center gap-8 sm:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">2.4K</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">896</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button className="flex-1 bg-gradient-primary shadow-glow sm:flex-none">
                Edit Profile
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                Share Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="flex-1">
              <Grid3x3 className="mr-2 h-4 w-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">
              <Bookmark className="mr-2 h-4 w-4" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="tagged" className="flex-1">
              <Tag className="mr-2 h-4 w-4" />
              Tagged
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {profilePosts.map((post, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentPost(post)}
                  className="group relative aspect-square overflow-hidden rounded-sm"
                >
                  <img
                    src={post}
                    alt={`Post ${index + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white">View Post</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="flex h-64 items-center justify-center">
              <p className="text-muted-foreground">No saved posts yet</p>
            </div>
          </TabsContent>

          <TabsContent value="tagged" className="mt-6">
            <div className="flex h-64 items-center justify-center">
              <p className="text-muted-foreground">No tagged posts yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Dialog open={!!currentPost} onOpenChange={() => setCurrentPost(null)}>
        <DialogContent>
          {currentPost && <img src={currentPost} alt="" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
