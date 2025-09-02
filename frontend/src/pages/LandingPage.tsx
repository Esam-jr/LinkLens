import { useState } from "react";
import {
  Earth,
  Video,
  Users,
  MessageCircle,
  ArrowRight,
  Star,
  Play,
  UserPlus,
  Search,
  Award,
  Menu,
  X,
  Clock,
  BookOpen,
  Trophy,
  PaletteIcon,
} from "lucide-react";
import { Link } from "react-router";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants/constants";

const LandingPage = () => {
  const { theme, setTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Video,
      title: "HD Video Calls",
      description:
        "Crystal clear video conversations with native speakers in real-time. Practice pronunciation and build confidence through face-to-face interactions.",
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Smart Chat System",
      description:
        "AI-powered chat with instant translations, grammar corrections, and vocabulary suggestions to enhance your learning experience.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Native Speaker Network",
      description:
        "Connect with verified native speakers from around the world. Choose tutors based on your schedule, interests, and learning goals.",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Structured Learning",
      description:
        "Follow our expertly designed curriculum or create custom learning paths. Track progress with detailed analytics and achievement badges.",
      color: "text-info",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your lifestyle. Available 24/7 with tutors across different time zones for maximum convenience.",
      color: "text-success",
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description:
        "Earn badges, track milestones, and celebrate your progress. Gamified learning keeps you motivated and engaged.",
      color: "text-warning",
    },
  ];

  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description:
        "Sign up and tell us about your language goals, current level, and preferred learning style.",
      step: "01",
    },
    {
      icon: Search,
      title: "Find Your Perfect Partner",
      description:
        "Browse our network of verified native speakers and choose partners that match your interests.",
      step: "02",
    },
    {
      icon: Video,
      title: "Start Learning",
      description:
        "Book your first session and begin practicing through video calls and interactive chat.",
      step: "03",
    },
    {
      icon: Award,
      title: "Track Progress",
      description:
        "Monitor your improvement with detailed analytics and celebrate milestones along the way.",
      step: "04",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Language Enthusiast",
      content:
        "LinkLens helped me improve my Spanish by connecting with native speakers. The video quality is amazing!",
      rating: 5,
    },
    {
      name: "Miguel Rodriguez",
      role: "English Learner",
      content:
        "I've made so many friends through this platform. It's more than just language learning - it's cultural exchange.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "French Student",
      content:
        "The interface is so intuitive and the community is incredibly supportive. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen" data-theme={theme}>
      {/* Navigation */}
      <header className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm border-b border-base-200 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Earth className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              LinkLens
            </span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a
                href="#features"
                className="hover:text-primary transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors duration-200"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors duration-200"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme Selector */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle">
                <PaletteIcon className="w-5 h-5" />
              </button>
              <div
                tabIndex={0}
                className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl
                w-56 border border-base-content/10 max-h-80 overflow-y-auto"
              >
                <div className="space-y-1">
                  {THEMES.map((themeOption) => (
                    <button
                      key={themeOption.name}
                      className={`
                      w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors
                      ${
                        theme === themeOption.name
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-base-content/5"
                      }
                    `}
                      onClick={() => setTheme(themeOption.name)}
                    >
                      <PaletteIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {themeOption.label}
                      </span>
                      {/* Theme Preview Colors */}
                      <div className="ml-auto flex gap-1">
                        {themeOption.colors.map((color, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/login" className="btn btn-ghost">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Start Learning
            </Link>
          </div>

          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="#testimonials">Reviews</a>
                </li>

                {/* Mobile Theme Selector */}
                <li className="border-t border-base-200 mt-2 pt-2">
                  <details>
                    <summary className="flex items-center gap-2">
                      <PaletteIcon className="w-4 h-4" />
                      Themes
                    </summary>
                    <ul className="max-h-60 overflow-y-auto">
                      {THEMES.slice(0, 10).map((themeOption) => (
                        <li key={themeOption.name}>
                          <button
                            className={`w-full text-left flex items-center gap-2 ${
                              theme === themeOption.name
                                ? "text-primary font-semibold"
                                : ""
                            }`}
                            onClick={() => setTheme(themeOption.name)}
                          >
                            <div className="flex gap-1">
                              {themeOption.colors
                                .slice(0, 3)
                                .map((color, i) => (
                                  <span
                                    key={i}
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                            </div>
                            <span className="text-xs">{themeOption.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>

                <li className="border-t border-base-200 mt-2 pt-2">
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup" className="btn btn-primary btn-sm">
                    Start Learning
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200">
        <div className="hero-content max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-warning text-warning"
                    />
                  ))}
                </div>
                <span className="text-sm opacity-70">
                  Trusted by 50,000+ learners
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Master Any Language Through
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  Real Conversations
                </span>
              </h1>

              <p className="text-xl opacity-80 mb-8 leading-relaxed max-w-lg">
                Connect with native speakers worldwide through immersive video
                calls and intelligent chat. Learn naturally, practice
                confidently, and achieve fluency faster than ever before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/signup" className="btn btn-primary btn-lg group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Get Started
                </Link>
                <button className="btn btn-outline btn-lg group">
                  <Video className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 text-sm opacity-70">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Chat Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>HD Video Calls</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Language learning conversation"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-base-100 rounded-xl shadow-lg p-4 border border-base-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Live Chat Active</p>
                      <p className="text-xs opacity-70">
                        Connected with Maria from Spain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-base-100 rounded-xl shadow-lg p-4 border border-base-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">HD Video Call</p>
                      <p className="text-xs opacity-70">
                        Crystal clear quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {" "}
                Master Languages
              </span>
            </h2>
            <p className="text-xl opacity-70 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human
              connection to create the most effective language learning
              experience possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="card-body">
                  <div
                    className={`w-16 h-16 bg-base-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="card-title text-xl group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="opacity-70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl opacity-70 max-w-3xl mx-auto">
              Get started in minutes and begin your language learning journey
              with our simple, proven process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-content rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="opacity-70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CTA Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-lg opacity-80 mb-8 max-w-xl">
                Set up your profile and start your first real conversation in
                minutes. Learn naturally with immersive calls and messages
                tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/login" className="btn btn-ghost btn-lg">
                  Sign In
                </Link>
              </div>
            </div>

            {/* Visuals */}
            <div className="relative">
              <div className="absolute -z-10 -top-10 -left-10 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-base-300">
                <img
                  src="/img1.jpeg"
                  alt="Practice session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-base-300">
                <img
                  src="/img2.jpeg"
                  alt="Language partners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What our community says</h2>
            <p className="text-lg opacity-70">
              Join thousands of satisfied language learners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-warning fill-current"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 text-base-content">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Earth className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  LinkLens
                </span>
              </div>
              <p className="opacity-70 mb-6 max-w-md leading-relaxed">
                Connecting language learners with native speakers worldwide
                through immersive video calls and intelligent chat. Master any
                language naturally and confidently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3 opacity-70">
                <li>
                  <a
                    href="#features"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3 opacity-70">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-base-200 mt-12 pt-8">
            <div className="text-center">
              <p className="opacity-70">
                &copy; 2024 LinkLens. All rights reserved. Connecting language
                learners worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
