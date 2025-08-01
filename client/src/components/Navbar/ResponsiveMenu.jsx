import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-50 ${showMenu ? "left-0" : "-left-[100%]"
          } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden`}
      >
        {/* Navbar section */}
        <div>
          {/* user section */}
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1 className="text-xl font-semibold">Ashish K. Shrestha</h1>
              <h1 className="text-sm text-slate-500">+9779818652210</h1>
            </div>
          </div>
          {/* Menu section */}
          <nav className="mt-12">
            <ul className="space-y-6 text-lg font-semibold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Nav Footer section */}
        <div>
          <p>@2025 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
