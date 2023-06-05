"use client";

import { useRef } from "react";
import Projects from "./Projects";
import Expertise from "./expertise/page";
import Home from "./page";
import Image from "next/image";

const Page = () => {
  const secondPage = useRef(null);

  const handleScroll = (ref: React.RefObject<HTMLElement> | null) => {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={"w-full h-auto"}>
        <section
          className={"bg-[url('/background.png')] bg-center bg-cover h-screen"}
        >
          <div
            className={
              "h-full w-full bg-gradient-to-b from-overlay1 to-overlay2 absolute top-0 left-0 pointer-events-none"
            }
          >
            <Home />
          </div>
        </section>
        <section ref={secondPage} id="expertise" className={"h-screen"}>
          <div className={"h-full relative"}>
            <div
              className={
                "h-1/2 w-full bg-gradient-to-t from-overlay1 to-overlay2 absolute top-0 left-0 pointer-events-none -z-10"
              }
            ></div>
            <Image
              className={"absolute left-0 top-0 -z-20 opacity-10"}
              src={"/binary.png"}
              alt={"binary"}
              fill
            />
            <div
              className={
                "h-1/2 w-full bg-gradient-to-b from-overlay1 to-overlay2 absolute top-[50%] left-0 pointer-events-none -z-10"
              }
            ></div>
            <Expertise />
          </div>
        </section>
        <section className={"h-auto"}>
          <div className={"h-full relative mt-10"}>
            <Projects />
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
