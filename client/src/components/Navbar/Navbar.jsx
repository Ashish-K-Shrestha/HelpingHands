import { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-0 left-0 w-full border-b-[1px] border-primary/50 z-[99999]">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo section */}
            <div className="text-2xl md:text-3xl text-white uppercase">
              <a href="#">
                Helping{" "}
                <span className="inline-block font-bold text-primary">
                  Hands
                </span>
              </a>
            </div>
            {/* Desktop Menu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[72px]">
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>
                  {/* dropdown section */}
                  <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className="space-y-3">
                      <li className="p-2 hover:bg-violet-200">Services</li>
                      <li className="p-2 hover:bg-violet-200">About us</li>
                      <li className="p-2 hover:bg-violet-200">
                        Privacy Policy
                      </li>
                    </ul>
                  </div>
                </li>
                <li>About us</li>
                <li>
                  <div className="flex items-center gap-4">
                    {/* icon here */}
                    <div>
                      <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/90 p-2" />
                    </div>
                    {/* Mobile no. */}
                    <div>
                      <p>Talk to us</p>
                      <p> +977 9818652210 </p>
                    </div>
                  </div>
                </li>
                {/* Light and dark mode switcher */}
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-2xl"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </ul>
            </div>
            {/* Mobile Menu section */}
            <div className="md:hidden flex items-center gap-4">
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile side Menu components */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
