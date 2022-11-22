'use client'

import {useRef} from "react";
import Projects from "./Projects";
import Expertise from "./Expertise";
import Image from "next/image";

const Page = () => {

    const secondPage = useRef(null)

    const handleScroll = (ref: React.RefObject<HTMLElement> | null) => {
        window.scrollTo({
            top: ref?.current?.offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }

    return(
        <>
            <div className={"w-full h-auto"}>
                <section className={"bg-[url('/background.png')] bg-center bg-cover h-screen"}>
                    <div className={"h-full w-full bg-gradient-to-b from-overlay1 to-overlay2 absolute top-0 left-0 pointer-events-none"}></div>
                    <div className={"h-full p-20 ml-auto mr-auto"}>
                        <div className={"sun left-[56%] top-[17%] absolute will-change-transform"}></div>
                        <div className={"flex justify-center pt-52 h-full"}>
                            <div className={"flex flex-col gap-5"}>
                                <h1 className={"text-[5vw] text-white font-bold uppercase text-center"}>Hey, i am Mikkel Bentsen</h1>
                                <h3 className={"text-3xl text-white font-medium uppercase text-center"}>Software Engineer, Full-stack web developer</h3>
                            </div>
                            <div onClick={() => handleScroll(secondPage)} className={"animate-bounce cursor-pointer absolute bottom-10 left-1/2 cursor-pointer"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={secondPage} className={"h-screen"}>
                    <div className={"h-full relative"}>
                        <div className={"h-1/2 w-full bg-gradient-to-t from-overlay1 to-overlay2 absolute top-0 left-0 pointer-events-none -z-10"}></div>
                        <Image className={"absolute left-0 top-0 -z-20 opacity-10"} src={"/binary.png"} alt={"binary"} fill/>
                        <div className={"h-1/2 w-full bg-gradient-to-b from-overlay1 to-overlay2 absolute top-[50%] left-0 pointer-events-none -z-10"}></div>
                        <Expertise/>
                    </div>
                </section>
                <section className={"h-auto"}>
                    <div className={"h-full relative mt-10"}>
                        <Projects/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Page

