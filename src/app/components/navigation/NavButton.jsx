import React from "react";
import Link from "next/link";
import {
  Github,
  Home,
  Linkedin,
  Mail,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "mails":
      return <Mail className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    case "whatsapp":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  nweTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50  hover:text-yellow-200"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={nweTab ? "_blank" : "_self"}
              className=" rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full " />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-white text-sm rounded-md shadow-lg whitespace-nowrap ">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50  hover:text-yellow-200">
            <NavLink
              variants={item}
              href={link}
              target={nweTab ? "_blank" : "_self"}
              className=" rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              {/* <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause"> */}
              <span className="relative w-10 h-10 p-2.5 xs:w-14 xs:h-14 xs:p-4 ">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full " />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-white text-sm rounded-md shadow-lg whitespace-nowrap ",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
