import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Heart,
  MessageCircle,
  MessageSquare,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: "Instant Messaging",
      description:
        "Chat with friends in real-time with lightning-fast message delivery and rich media support.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Users,
      title: "Communities",
      description:
        "Join or create communities around your interests and connect with like-minded people.",
      gradient: "from-primary-dark to-accent",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data is encrypted end-to-end. We never sell your information to third parties.",
      gradient: "from-accent to-primary-light",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized for speed and performance. Experience smooth interactions every time.",
      gradient: "from-primary-light to-primary",
    },
    {
      icon: Heart,
      title: "Reactions & Stories",
      description:
        "Express yourself with reactions, emojis, and share your daily moments with stories.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with people worldwide. Built-in translation breaks language barriers.",
      gradient: "from-primary-dark to-primary",
    },
  ];
  return (
    <>
      {" "}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={"./logo.png"}
                alt="ChatUp Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                ChatUp
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Home", "Features", "Download"].map((item) => (
                <a
                  key={item}
                  onClick={() => {
                    const section = document.getElementById(item);
                    section?.classList.add("show");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button
                onClick={() => (window.location.href = "/login")}
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-primary/50 to-background" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Connect. Share. Thrive.
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Welcome to the{" "}
              <span className="text-gradient">Future of Social</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              ChatUp brings people together in meaningful ways. Connect with
              friends, join communities, and share your story with the world.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient">10M+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient">500M+</div>
                <div className="text-sm text-muted-foreground">
                  Messages Daily
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="py-20 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Stay Connected</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to bring people together and make
              communication effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features?.map((feature, index) => (
              <div
                key={index}
                className=" bg-white/80 group hover:shadow-[1px_3px_7px_1px] shadow-primary/50  duration-150 backdrop-blur-3xl rounded-3xl"
              >
                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 group-hover:w-8 group-hover:h-8 duration-150  text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="download"
        className="py-20 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/10 to-primary-dark/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className=" duration-150 hover:bg-card backdrop-blur-lg rounded-3xl p-8 sm:p-12  shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Join the{" "}
                <span className="text-primary">Conversation?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start connecting with millions of users worldwide. Sign up today
                and experience the future of social networking.
              </p>

              <div className="grid md:grid-cols-2 grid-cols-1 max-w-lg mx-auto items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto group"
                >
                  Start Chatting Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={"./logo.png"}
                  alt="ChatUp Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">ChatUp</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting people worldwide through meaningful conversations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} ChatUp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
