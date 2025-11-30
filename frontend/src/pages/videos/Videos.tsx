// import { useEffect, useRef, useState } from "react";
// import ProfileIcon from "@/components/tools/ProfileIcon";
// import { FaDotCircle, FaHeart, FaRegHeart } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
// import PostActions from "@/components/tools/PostActions";
// import { FiMessageCircle } from "react-icons/fi";
// import Comment from "@/components/tools/Comment";
// import { useAllUserData, usePostData, useUserData } from "@/hooks/useQueryData";
// import { timeAgo } from "@/components/tools/converter";
// import { usePostMutation } from "@/hooks/useMutateData";
// import { toast } from "react-toastify";
// import CreatePost from "@/components/tools/CreatePost";

// export default function Posts() {
//   const [videoModal, setVideoModal] = useState(false);
//   const [postAction, setPostAction] = useState<Boolean>();
//   const [comment, setComment] = useState("");
//   const [id, setId] = useState("");
//   const { data, refetch } = usePostData();
//   const { data: allUsersData } = useAllUserData();
//   const { data: userData } = useUserData();
//   const likeMutate = usePostMutation();

//   const likeDandle = (id: string) => {
//     likeMutate.mutateAsync(["post", `/like/?id=${id}`, ""], {
//       onSuccess: () => {
//         toast.success("Liked post!!");
//         setId("");
//         refetch();
//       },
//       onError: () => {
//         toast.error("Error motherfucker");
//       },
//     });
//   };
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // If video is visible, play it and update state
//             entry.target.play();
//           } else {
//             // Pause the video when it's out of view
//             entry.target.pause();
//           }
//         });
//       },
//       { threshold: 0.7 } // Adjust this value to control when the video starts playing
//     );

//     // Observe all video elements
//     videoRefs.current.forEach((video) => {
//       if (video) observer.observe(video);
//     });

//     return () => {
//       videoRefs.current.forEach((video) => {
//         if (video) observer.unobserve(video);
//       });
//     };
//   }, []);

//   return (
//     <div className="place-items-center">
//       <h1
//         className="text-xl font-bold border rounded-3xl px-10 p-3"
//         onClick={() => setVideoModal(true)}
//       >
//         Add videos
//       </h1>
//       <div className="h-full w-[40%]  select-none mt-5 flex flex-col rounded-xl p-2 text-white ">
//         {data?.length > 0 ? (
//           data?.map((item, index) => {
//             const postUser = allUsersData?.find(
//               (filter) => item?.user_id === filter?._id
//             );
//             const liked = item?.likes.includes(userData?._id);

//             return (
//               <div
//                 key={index}
//                 className="border-b-[0.5px] mb-10  w-full border-b-[rgba(129,126,126,0.25)] pb-10"
//               >
//                 <div className="flex justify-between">
//                   <div className="flex gap-2">
//                     <ProfileIcon
//                       classNamediv={" w-fit h-fit"}
//                       className={"w-[45px] h-[45px]  object-cover"}
//                       profile={postUser?.profile ?? "./profile.jpg"}
//                     />
//                     <div className="flex flex-col ">
//                       <div className="flex gap-2 items-center">
//                         <p>{postUser?.username}</p>
//                         <p className="text-[10px] ">
//                           <FaDotCircle />
//                         </p>
//                         <p className="font-medium text-slate-500 text-xs">
//                           {timeAgo(item?.updatedAt)}
//                         </p>
//                       </div>
//                       <div className="flex gap-1">
//                         {/* <p>with</p>: */}
//                         <p className=" text-white  text-sm font-semibold ">
//                           {item?.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <p
//                     className="fit cursor-pointer"
//                     onClick={() => {
//                       setPostAction(true);
//                       setId(item?._id);
//                     }}
//                   >
//                     <BsThreeDots />
//                   </p>
//                 </div>
//                 <div className="items-center w-full h-[500px]   mt-3 px-5 border-[0.5px] border-[rgba(129,126,126,0.30)]">
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     controls
//                     controlsList="nodownload"
//                     src={item?.video}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <div className="flex gap-2 text-[22px] mt-2">
//                   <div
//                     onClick={() => {
//                       likeDandle(item?._id);
//                     }}
//                     className="w-fit cursor-pointer"
//                   >
//                     {liked ? <FaHeart /> : <FaRegHeart />}
//                   </div>
//                   <div
//                     onClick={() => setComment(item?._id)}
//                     className="cursor-pointer"
//                   >
//                     <FiMessageCircle />
//                   </div>
//                 </div>
//                 <div className="flex gap-2 mt-2 w-fit">
//                   <img src={"./profile.png"} alt="" className="" />
//                   <p>{item?.likes.length} likes</p>
//                 </div>

//                 <div>
//                   {comment === item?._id ? (
//                     <div className="w-full h-[200px] overflow-y-auto border border-[rgba(84,84,84,0.28)]">
//                       <Comment
//                         open={setComment}
//                         data={item}
//                         refetch={refetch}
//                       />
//                     </div>
//                   ) : (
//                     <p
//                       onClick={() => setComment(item?._id)}
//                       className="text-[15px] mt-2"
//                     >
//                       View all comments
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <img src="./notfound.png" className="w-full h-full object-contain" />
//         )}
//       </div>
//       {videoModal && (
//         <div className="z-20">
//           <CreatePost openPost={videoModal} setOpenPost={setVideoModal} />
//         </div>
//       )}
//       {postAction && (
//         <PostActions setPostAction={setPostAction} id={id} setId={setId} />
//       )}
//     </div>
//   );
// }

import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const reels = [
  {
    id: 1,
    user: { name: "Emma Davis", avatar: "ED" },
    thumbnail:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&q=80",
    title: "Amazing dance moves! 💃",
    views: "1.2M",
    likes: "45K",
  },
  {
    id: 2,
    user: { name: "Chris Lee", avatar: "CL" },
    thumbnail:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80",
    title: "Travel vlog: Tokyo edition 🇯🇵",
    views: "890K",
    likes: "32K",
  },
  {
    id: 3,
    user: { name: "Nina Patel", avatar: "NP" },
    thumbnail:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80",
    title: "Cooking hacks you need to know 🍳",
    views: "2.1M",
    likes: "78K",
  },
  {
    id: 4,
    user: { name: "Tom Wilson", avatar: "TW" },
    thumbnail:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600&q=80",
    title: "Extreme sports compilation 🤘",
    views: "1.5M",
    likes: "56K",
  },
];
interface reelType {
  id: Number;
  user: { name: string; avatar: string };
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
}

const Reels = () => {
  const [currentReel, setCurrentReel] = useState<reelType | null>(null);
  return (
    <div className="mx-auto max-w-1/2">
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            onClick={() => setCurrentReel(reel)}
            className="group rounded-lg relative aspect-9/16 overflow-hidden border-border shadow-md transition-all hover:shadow-lg"
          >
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="flex items-end justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border-2 border-white">
                      <AvatarFallback className="bg-gradient-primary text-xs text-primary-foreground">
                        {reel.user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-white">
                      {reel.user.name}
                    </span>
                  </div>
                  <p className="text-sm text-white">{reel.title}</p>
                  <p className="text-xs text-white/80">{reel.views} views</p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={!!currentReel} onOpenChange={() => setCurrentReel(null)}>
        <DialogContent>hey motherfather</DialogContent>
      </Dialog>
    </div>
  );
};

export default Reels;
