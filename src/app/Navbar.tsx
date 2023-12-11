"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
  });

  return (
    <nav
      className={
        "w-full h-20 absolute border-b " +
        (scroll
          ? "border-gray-500 backdrop-blur-md duration-300 transition-all"
          : "border-transparent")
      }
    >
      <div className={"flex flex-row h-full"}>
        <div
          className={
            "flex justify-between items-center text-white h-full w-full px-10"
          }
        >
          <div className={"block"}>
            <Link href={"/"}>
              <h1 className={"text-3xl"}>Mikkel</h1>
            </Link>
          </div>
          <div className={"mx-5"}>
            <ul className={"flex flex-row gap-10 text-lg font-medium"}>
              <Link href={"/"}>
                <li>{"// Home"}</li>
              </Link>
              <a href="/#expertise">
                <li>{"// Expertise"}</li>
              </a>
              <a href={"/#projects"}>
                <li>{"// Projects"}</li>
              </a>
              <Link href={"/#contact"}>
                <li>{"// Contact"}</li>
              </Link>
            </ul>
          </div>
          <div className={""}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
