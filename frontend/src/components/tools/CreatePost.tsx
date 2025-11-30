// import { useState } from "react";
// import { IoMdClose, IoMdPhotos } from "react-icons/io";
// import ProfileIcon from "./ProfileIcon";
// import { FaLock, FaTag } from "react-icons/fa";
// import { MdOutlineEmojiEmotions } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { HiGif } from "react-icons/hi2";
// import { BsThreeDots } from "react-icons/bs";
// import Button from "./Button";
// import { useForm } from "react-hook-form";
// import { usePostMutation } from "@/hooks/useMutateData";
// import { toast } from "react-toastify";

// export default function CreatePost({ setOpenPost }) {
//   const { handleSubmit, register, setValue } = useForm();
//   const [selectedFile, setSelectedFile] = useState();
//   const [photo, setPhoto] = useState();
//   const [video, setVideo] = useState();
//   const postMutate = usePostMutation();
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setValue("file", selectedFile);
//     setSelectedFile(selectedFile);

//     if (selectedFile) {
//       if (selectedFile.type.startsWith("image")) {
//         // If image, display as an image
//         setPhoto(URL.createObjectURL(selectedFile));
//         setVideo(null); // Clear any previous video
//       } else if (selectedFile.type.startsWith("video")) {
//         // If video, display as a video
//         setVideo(URL.createObjectURL(selectedFile));
//         setPhoto(null); // Clear any previous image
//       }
//     }
//   };
//   const postSubmit = (data) => {
//     const formdata = new FormData();
//     formdata.append("file", selectedFile);
//     formdata.append("description", data?.description);
//     postMutate.mutateAsync(["Post", "", formdata], {
//       onSuccess: () => {
//         toast.success("Successfully posted");
//         setOpenPost(false);
//       },
//       onError: (error) => {
//         toast.error(error.message);
//       },
//     });
//   };
//   return (
//     <div className=" justify-center items-center text-center  flex h-full   ">
//       <div className="rounded-lg flex flex-col gap-2 shadow-secondary shadow-[1px_2px_8px_0px]  justify-center   py-2  ">
//         <div className=" justify-between border-b-2 border-b-gray-400 p-3  flex">
//           <p className="text-2xl text-primary w-[95%] font-bold font-serif">
//             Create post
//           </p>
//         </div>
//         <div className="ml-1.5 flex gap-2">
//           <ProfileIcon profile={"./profile.png"} classNamediv={"w-[45px]"} />
//           <div className="flex-col text-left">
//             <p className="font-bold">Joel magar</p>
//             <div className="flex bg-secondary text-white gap-1 px-2 rounded-lg items-center">
//               <FaLock className="text-[12px] " />
//               <p>only me</p>
//             </div>
//           </div>
//         </div>
//         <form action="" onSubmit={handleSubmit(postSubmit)}>
//           <div className="bg-inherit">
//             <textarea
//               {...register("description")}
//               className="bg-inherit p-2   resize-none w-full placeholder:text-[20px] focus-within:outline-none h-fit"
//               placeholder="What's on your mind, user"
//             />
//             <div className="w-full h-[100px]">
//               {photo ? (
//                 <img
//                   src={photo}
//                   alt=""
//                   className="w-full h-full  object-contain"
//                 />
//               ) : video ? (
//                 <video
//                   src={video}
//                   className="object-contain w-full h-full"
//                   autoPlay
//                 />
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//           <div className="bg-secondary flex justify-between px-3 w-[95%] mx-auto mb-2 border-2 border-gray-400 rounded-lg p-2 text-white">
//             <p className="text-[18px]">Add to post.</p>
//             <div className="flex w-[50%] justify-between text-center align-middle items-center">
//               <label htmlFor="file">
//                 <input
//                   accept="image/*,video/*"
//                   type="file"
//                   id="file"
//                   className="hidden"
//                   {...register("file")}
//                   onChange={handleFileChange}
//                 />
//                 <p className="cursor-pointer text-[20px] text-green-600">
//                   <IoMdPhotos />
//                 </p>
//               </label>
//               <p className="cursor-pointer text-[18px] text-blue-700">
//                 <FaTag />
//               </p>
//               <p className="cursor-pointer text-[25px] text-yellow-400">
//                 <MdOutlineEmojiEmotions />
//               </p>
//               <p className="cursor-pointer text-[20px] text-red-700">
//                 <FaLocationDot />
//               </p>
//               <p className="cursor-pointer text-[25px] text-purple-700">
//                 <HiGif />
//               </p>
//               <p className="cursor-pointer text-[20px] ">
//                 <BsThreeDots />
//               </p>
//             </div>
//           </div>
//           <div className=" w-full rounded-2xl flex justify-center">
//             <Button
//               btnName={postMutate?.isPending ? "Posting..." : "Post"}
//               btnType={"submit"}
//               className={
//                 "bg-slate-300 w-[50%] text-center font-semibold text-black"
//               }
//             />
//           </div>{" "}
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImagePlus, MapPin, Hash, X } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  // const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!previewImage) {
      // toast({
      //   title: "No image selected",
      //   description: "Please select an image to post",
      //   variant: "destructive",
      // });
      return;
    }

    // toast({
    //   title: "Post created!",
    //   description: "Your post has been shared successfully",
    // });

    // Reset form
    setCaption("");
    setLocation("");
    setTags("");
    setPreviewImage(null);
  };

  return (
    <div className="h-full ">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="p-6 backdrop-blur-sm bg-card/95 border-border/50 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Create New Post
          </h1>

          {/* Image Upload */}
          <div className="mb-6">
            {previewImage ? (
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 p-2 bg-destructive rounded-full hover:bg-destructive/90 transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-primary transition-all hover:bg-muted/50">
                <ImagePlus className="w-16 h-16 text-muted-foreground mb-4" />
                <span className="text-muted-foreground font-medium">
                  Click to upload image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Caption */}
          <div className="mb-4">
            <label className=" text-sm font-medium mb-2">Caption</label>
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="min-h-32 resize-none  w-full border-border border p-2 rounded-2xl focus:border-primary transition-all"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            {/* <label className=" text-sm font-medium mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Add Location
            </label> */}
            <Input
              placeholder="Add a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-border focus:border-primary transition-all"
            />
          </div>

          {/* Tags */}
          <div className="mb-6">
            {/* <label className=" text-sm font-medium mb-2 flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Add Tags
            </label> */}
            <Input
              placeholder="Add hashtags (e.g., #photography #travel)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="border-border focus:border-primary transition-all"
            />
          </div>

          {/* Post Button */}
          <Button
            onClick={handlePost}
            className="w-full bg-linear-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all text-lg font-semibold shadow-lg"
            size="lg"
          >
            Share Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
