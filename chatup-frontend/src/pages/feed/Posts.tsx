import { useRef, useState } from "react";
import ProfileIcon from "../../components/tools/ProfileIcon";
import { FaDotCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import PostActions from "../../components/tools/PostActions";
import { FiMessageCircle } from "react-icons/fi";
import Comment from "../../components/tools/Comment";
import {
  useAllUserData,
  usePostData,
  useUserData,
} from "../../hooks/useQueryData";
import { timeAgo } from "../../components/tools/converter";
import { usePostMutation } from "../../hooks/useMutateData";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
interface postType {
  id: Number;
  user: { name: string; avatar: string; image: null };
  image: string;
  likes: 1243;
  caption: string;
  comments: number;
  time: string;
}
export default function Posts() {
  const [postAction, setPostAction] = useState(false);
  const [currentPost, setCurrentPost] = useState<postType | null>(null);
  const [comment, setComment] = useState("");
  const [id, setId] = useState("");
  const { data, isLoading, isError, refetch } = usePostData();
  const { data: allUsersData } = useAllUserData();
  const { data: userData } = useUserData();
  const likeMutate = usePostMutation();

  const posts = [
    {
      id: 1,
      user: { name: "Alex Chen", avatar: "AC", image: null },
      image: "./photo.avif",
      likes: 1243,
      caption: "Beautiful sunset at the beach 🌅",
      comments: 89,
      time: "2h ago",
    },
    {
      id: 2,
      user: { name: "Sarah Kim", avatar: "SK", image: null },
      image: "./photo2.jpeg",
      likes: 856,
      caption: "Coffee and code ☕️💻",
      comments: 34,
      time: "5h ago",
    },
    {
      id: 3,
      user: { name: "Mike Johnson", avatar: "MJ", image: null },
      image:
        "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800&q=80",
      likes: 2103,
      caption: "Mountain views never get old 🏔️",
      comments: 156,
      time: "8h ago",
    },
  ];
  const likeDandle = (id: string) => {
    likeMutate.mutateAsync(["post", `/like/?id=${id}`, ""], {
      onSuccess: () => {
        toast.success("Liked post!!");
        setId("");
        refetch();
      },
      onError: () => {
        toast.error("Error motherfucker");
      },
    });
  };
  const videoRefs = useRef([]);

  return (
    <div className=" h-fit w-full lg:w-3/7 md:w-2/3 mx-auto justify-center items-center   select-none  flex flex-col md:rounded-xl  ">
      {isLoading ? (
        Array(2)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="border-b-[0.5px] mb-3 animate-pulse bg-gray-300 p-2 rounded-2xl   w-full border-b-[rgba(129,126,126,0.25)] pb-10"
            >
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="animate-pulse h-6 w-6 rounded-full bg-gray-400 " />
                  <div className="flex flex-col ">
                    <div className="flex gap-2 items-center">
                      <p className="text-gray-400 bg-gray-400 animate-pulse rounded-2xl px-5">
                        peaceoff
                      </p>

                      <p className="font-medium bg-gray-400 animate-pulse text-gray-400 rounded-2xl">
                        peaceasjdflajsdf
                      </p>
                    </div>
                    <div className="flex bg-gray-400 rounded-3xl animate-pulse my-1 text-gray-400 gap-1">
                      <p className="  text-sm font-semibold ">
                        laksjdfjasdfasd
                      </p>
                    </div>
                  </div>
                </div>
                <p className="fit cursor-pointer">
                  <BsThreeDots className="animate-pulse text-gray-400" />
                </p>
              </div>
              <div className="items-center w-full h-[500px] bg-gray-400 animate-pulse rounded-2xl   mt-3 px-5 border-[0.5px] border-[rgba(129,126,126,0.30)]"></div>
              <div className="flex gap-2 text-[22px] mt-2">
                <div className="w-fit cursor-pointer">
                  <FaHeart className="animate-pulse text-gray-400" />
                </div>
                <div className="cursor-pointer bg-gray-400 rounded-md animate-pulse">
                  <FiMessageCircle className="animate- text-gray-400" />
                </div>
              </div>
              <div className="flex gap-2 mt-2 w-fit">
                <span className="h-6 w-6 rounded-2xl bg-gray-400 animate-pulse " />
                <p className="text-gray-400 animate-pulse bg-gray-400 rounded-2xl h-fit">
                  200 likes
                </p>
              </div>

              <div>
                <p
                  className="text-[15 (
        posts?.map((post) => {
          const postUser = allUsersData?.find(
            (filter) => post?.id === filter?._id
          );

          return <GetFeed post={post} />;
        })
      )px] bg-gray-400 animate-pulse text-gray-400 w-1/3 rounded-2xl mt-2"
                >
                  View all comments
                </p>
              </div>
            </div>
          ))
      ) : posts.length < 0 ? (
        <img src="./notfound.png" className=" h-[50vh]  object-contain " />
      ) : (
        posts?.map((post) => {
          const postUser = allUsersData?.find(
            (filter) => post?.id === filter?._id
          );

          return (
            <GetFeed
              post={post}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
            />
          );
        })
      )}
      <div>
        {postAction && (
          <PostActions setPostAction={setPostAction} id={id} setId={setId} />
        )}
      </div>
    </div>
  );
}

const GetFeed = ({ post, currentPost, setCurrentPost }) => (
  <div className="overflow-hidden group border w-full md:rounded-2xl md:mb-2 md:shadow-md md:transition-shadow hover:shadow-lg">
    {/* Post Header */}
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center ">
        <ProfileIcon />
        <div>
          <p className="font-semibold">{post.user.name}</p>
          <p className="text-xs text-muted-foreground">{post.time}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-5 w-5" />
      </Button>
    </div>

    {/* Post Image */}
    <div
      onClick={() => setCurrentPost(post)}
      className="md:max-h-[50vh] border  flex items-center overflow-hidden"
    >
      <img
        src={post.image}
        className="aspect-square mx-auto  duration-300 w-full object-contain "
      />
    </div>

    {/* Post Actions */}
    <div className="space-y-2 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="hover:text-accent">
            <Heart className="h-6 w-6" />
          </Button>
          <Button
            onClick={() => setCurrentPost(post)}
            variant="ghost"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-6 w-6" />
        </Button>
      </div>

      <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
      <p className="text-sm">
        <span className="font-semibold">{post.user.name}</span>{" "}
        <span className="text-foreground">{post.caption}</span>
      </p>
      <button
        onClick={() => setCurrentPost(post)}
        className="text-sm text-muted-foreground border-0 bg-background hover:text-foreground"
      >
        View all {post.comments} comments
      </button>
    </div>
    <Dialog open={!!currentPost} onOpenChange={() => setCurrentPost(null)}>
      <DialogContent>bitch</DialogContent>
    </Dialog>
  </div>
);
