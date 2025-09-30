import React from 'react';
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="flex items-center gap-2 font-medium text-sm"
      >
        {children}
      </a>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-all duration-300 ${
        isScrolling ? 'bg-white shadow-lg' : 'bg-black/20 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolling ? 'text-blue-gray-800' : 'text-white drop-shadow-lg'
          }`}
        >
          RASHMITA GOYAL
        </h1>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex transition-colors duration-300 ${
            isScrolling ? "text-gray-900" : "text-white drop-shadow-md"
          }`}
        >
          <li><a href="#about" className="hover:text-blue-400 transition-colors font-medium">About</a></li>
          <li><a href="#speakers" className="hover:text-blue-400 transition-colors font-medium">Speakers</a></li>
          <li><a href="#schedule" className="hover:text-blue-400 transition-colors font-medium">Schedule</a></li>
          <li><a href="#faq" className="hover:text-blue-400 transition-colors font-medium">FAQ</a></li>
        </ul>
        {/* <div className="hidden items-center gap-4 lg:flex">
          <button className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${
            isScrolling ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200 drop-shadow-md'
          }`}>
            Log in
          </button>
          <button className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
            isScrolling ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/90 text-gray-900 hover:bg-white shadow-lg'
          }`}>
            Register Now
          </button>
        </div> */}
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block lg:hidden p-2 rounded-lg transition-colors ${
            isScrolling ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20 drop-shadow-md'
          }`}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 lg:hidden shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-900">
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
            <li><a href="#speakers" className="hover:text-blue-500 transition-colors">Speakers</a></li>
            <li><a href="#schedule" className="hover:text-blue-500 transition-colors">Schedule</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded text-sm font-medium text-gray-700 hover:text-gray-900">
              Log in
            </button>
            <button className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;