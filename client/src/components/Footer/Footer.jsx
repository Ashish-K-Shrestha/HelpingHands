import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const importantLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Service",
  },
  {
    name: "Login",
  },
];

const Links = [
  {
    name: "Privacy Policy",
  },
  {
    name: "Services",
  },
  {
    name: "About us",
  },
];
const Footer = () => {
  return (
    <div className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to to-violet-900">
      <div className="mx-auto max-w-[1200px] p-4">
        {/* footer containt section  */}
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-3xl">
              <a href="/#home" className="uppercase">
                Helping
                <span className="inline-block font-bold text-primary">
                  Hands
                </span>
              </a>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              voluptatibus necessitatibus veniam delectus. Explicabo, facere!
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+977 9818652210</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={importantLinks} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={Links} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Social Links
              </h1>
              <div className="space-y-3">
                <h1>Subscribe to our newsletter</h1>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="flex gap-3 mt-6 items-center">
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer copyright section */}
        <div className="bottom-footer">
          <p className="border-t-2 border-gray-300/50 py-6 text-center">
            Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
