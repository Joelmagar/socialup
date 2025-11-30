import { useAuthStore } from "./store/Authstore";
import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "./pages/feed/Feed";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import BaseLayout from "./components/layouts/BaseLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Friends from "./pages/friends/Friends";
import Videos from "./pages/videos/Videos";
import Profiles from "./pages/menu/profile/Profiles";
import Explore from "./pages/explore/Explore";
import Message from "./pages/messages/Message";
import Security from "./pages/menu/security/Security";
import Landing from "./pages/landing/Landing";
import Search from "./components/search/Search";
import Notification from "./components/notification/Notification";
import CreatePost from "./components/tools/CreatePost";

export default function RouteHandler() {
  const { loggedIn } = useAuthStore();
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* {loggedIn && ( */}
      <Route element={<BaseLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/connections" element={<Friends />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/inbox" element={<Message />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/security" element={<Security />} />
        <Route path="/create" element={<CreatePost />} />
      </Route>
      {/* )} */}
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
