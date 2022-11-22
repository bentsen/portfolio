import Image from "next/image";

const Expertise = () => {

    return(
        <>
            <div className={"pt-10"}>
                <div className={"mx-auto my-0 w-[1333px] flex flex-col items-center"}>
                    <div>
                        <h1 className={"text-white text-6xl"}>My Expertise</h1>
                    </div>
                    <div className={"flex justify-between w-3/4 pt-10 gap-5"}>
                        <div className={"w-1/3 border border-white p-5"}>
                            <div className={"flex flex-row items-center gap-2"}>
                                <div>
                                    <Image src={"/expertise/frontend.png"} alt={"react"} width={50} height={50}/>
                                </div>
                                <div className={"text-white text-3xl font-bold"}>
                                    <h3>Frontend</h3>
                                    <span>React, NextJS</span>
                                </div>
                            </div>
                            <div className={"pt-2 text-white font-medium"}>
                                <p>I feel at home in the React ecosystem. It fits my thought process and work process perfectly. I primarily use the frameworks Next and Remix.</p>
                            </div>
                        </div>
                        <div className={"w-1/3 border border-white p-5"}>
                            <div className={"flex flex-row items-center gap-2"}>
                                <div>
                                    <Image src={"/expertise/frontend.png"} alt={"react"} width={50} height={50}/>
                                </div>
                                <div className={"text-white text-3xl font-bold"}>
                                    <h3>Frontend</h3>
                                    <span>React, NextJS</span>
                                </div>
                            </div>
                            <div className={"pt-2 text-white font-medium"}>
                                <p>I feel at home in the React ecosystem. It fits my thought process and work process perfectly. I primarily use the frameworks Next and Remix.</p>
                            </div>
                        </div>
                        <div className={"w-1/3 border border-white p-5"}>
                            <div className={"flex flex-row items-center gap-2"}>
                                <div>
                                    <Image src={"/expertise/frontend.png"} alt={"react"} width={50} height={50}/>
                                </div>
                                <div className={"text-white text-3xl font-bold"}>
                                    <h3>Frontend</h3>
                                    <span>React, NextJS</span>
                                </div>
                            </div>
                            <div className={"pt-2 text-white font-medium"}>
                                <p>I feel at home in the React ecosystem. It fits my thought process and work process perfectly. I primarily use the frameworks Next and Remix.</p>
                            </div>
                        </div>
                    </div>
                    <div className={"pt-20 flex flex-col"}>
                        <div>
                            <h1 className={"text-3xl text-white font-bold"}>What I use for development</h1>
                        </div>
                        <div className={"flex justify-between pt-10"}>
                            <div className={"text-center text-white leading-10"}>
                                <Image src={"/programming-languages/ts-logo.png"} alt={"ts"} width={50} height={50}/>
                                <span>TS</span>
                            </div>
                            <div className={"text-center text-white leading-10"}>
                                <Image src={"/programming-languages/ts-logo.png"} alt={"ts"} width={50} height={50}/>
                                <span>JS</span>
                            </div>
                            <div className={"text-center text-white"}>
                                <Image src={"/programming-languages/py-logo.png"} alt={"ts"} width={50} height={50}/>
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise