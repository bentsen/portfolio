"use client";

import { useRef } from "react";
import Projects from "./Projects";
import Expertise from "./Expertise";
import Image from "next/image";
import Contact from "./Contact";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
    <div className={"w-full h-auto"}>
      <section className="h-screen">
        <div className="bg-[url('/bg.png')] bg-center bg-cover h-full animate-[pulse_4s_infinite]" />
        <div
          className={
            "h-full w-full bg-gradient-to-b from-[#0d1117]/10 to-[#0d1117] absolute top-0 left-0 pointer-events-none"
          }
        ></div>
        <div className="absolute left-1/2 md:bottom-4 bottom-6">
          <ChevronDownIcon
            onClick={() => handleScroll(secondPage)}
            className="text-white w-8 h-8 animate-bounce cursor-pointer"
          />
        </div>
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute left-1/2 top-1/2 w-full"
        >
          <div className={"flex flex-col gap-5"}>
            <h1
              className={
                "text-[5vw] md:block hidden text-white font-bold uppercase text-center"
              }
            >
              Hey, i&apos;am Mikkel Bentsen
            </h1>
            <h1 className="text-4xl md:hidden text-white font-bold uppercase text-center">
              Mikkel Bentsen
            </h1>
            <h3
              className={
                "md:text-3xl text-white font-medium uppercase text-center"
              }
            >
              Software Engineer, Full-stack web developer
            </h3>
          </div>
        </div>
      </section>
      <section
        ref={secondPage}
        id={"expertise"}
        className={"md:h-screen h-auto"}
      >
        <div className={"h-full"}>
          <Expertise />
        </div>
      </section>
      <section className={"h-auto pt-20"} id="projects">
        <div className={"h-full relative mt-10"}>
          <Projects />
        </div>
      </section>
      <section className="py-48" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Page;
