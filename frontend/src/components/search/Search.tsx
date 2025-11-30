import { useMemo, useState } from "react";
import {
  Search as SearchIcon,
  User,
  TrendingUp,
  Hash,
  Music,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAllUserData } from "@/hooks/useQueryData";
import { useNavigate } from "react-router-dom";
interface filterType {
  username?: string;
  updatedAt?: string;
  profile?: string;
}
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useAllUserData();
  const [searchText, setSearchText] = useState<string>();
  const navigate = useNavigate();

  const filteredData = useMemo<filterType[]>(() => {
    if (!searchText) return [];
    return data?.filter((filter: filterType) => {
      const search = filter?.username;

      const searchedText = searchText ? search?.includes(searchText) : true;

      return searchedText;
    });
  }, [searchText]);

  const mockUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahj",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      followers: "12.5K",
    },
    {
      id: 2,
      name: "Mike Chen",
      username: "@mikechen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      followers: "8.3K",
    },
    {
      id: 3,
      name: "Emma Wilson",
      username: "@emmaw",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      followers: "25.1K",
    },
  ];

  const mockTrends = [
    { id: 1, tag: "#SummerVibes", posts: "125K posts" },
    { id: 2, tag: "#TechNews", posts: "89K posts" },
    { id: 3, tag: "#FitnessGoals", posts: "234K posts" },
    { id: 4, tag: "#TravelDiaries", posts: "156K posts" },
  ];

  const mockHashtags = [
    { id: 1, tag: "#Photography", posts: "2.3M posts" },
    { id: 2, tag: "#FoodLovers", posts: "1.8M posts" },
    { id: 3, tag: "#Fashion", posts: "3.1M posts" },
    { id: 4, tag: "#Gaming", posts: "1.5M posts" },
  ];

  const mockMusics = [
    { id: 1, title: "Summer Nights", artist: "The Wave", uses: "45K videos" },
    { id: 2, title: "City Lights", artist: "DJ Nova", uses: "67K videos" },
    { id: 3, title: "Feel Good", artist: "Luna Ray", uses: "123K videos" },
    {
      id: 4,
      title: "Midnight Drive",
      artist: "Echo Sound",
      uses: "89K videos",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className=" top-0  border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search users, trends, hashtags, music..."
              value={searchQuery}
              className=""
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trends</span>
            </TabsTrigger>
            <TabsTrigger value="hashtags" className="gap-2">
              <Hash className="h-4 w-4" />
              <span className="hidden sm:inline">Tags</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-6 space-y-3">
            {mockUsers.map((user) => (
              <div key={user.id} className="p-4 border rounded-2xl  ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {user.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {user.username}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.followers} followers
                      </p>
                    </div>
                  </div>
                  <Button variant="default" size="sm">
                    Follow
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="trends" className="mt-6 space-y-3">
            {mockTrends.map((trend) => (
              <div key={trend.id} className="p-4 rounded-2xl border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-bl from-primary to-secondary">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {trend.tag}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {trend.posts}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="hashtags" className="mt-6 space-y-3">
            {mockHashtags.map((hashtag) => (
              <div key={hashtag.id} className="p-4 border rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center  justify-center rounded-full bg-linear-to-bl from-primary to-secondary">
                      <Hash className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {hashtag.tag}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {hashtag.posts}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="music" className="mt-6 space-y-3">
            {mockMusics.map((music) => (
              <div key={music.id} className="p-4 rounded-2xl border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-bl from-primary to-secondary">
                      <Music className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {music.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {music.artist}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {music.uses}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Use
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Search;
