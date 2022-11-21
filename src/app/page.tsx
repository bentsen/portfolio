const Page = () => {
    return(
        <>
            <div>
                <section className={"bg-[url('/background.jpg')] bg-center bg-cover h-screen"}>
                    <div className={"h-full w-full bg-gradient-to-b from-overlay1 to-overlay2 absolute top-0 left-0"}></div>
                    <div className={"h-full p-20"}>
                        <div className={"flex justify-center pt-52 h-full"}>
                            <div className={"flex flex-col gap-5"}>
                                <h1 className={"text-[5vw] text-white font-bold uppercase text-center"}>Hey, i am Mikkel Bentsen</h1>
                                <h3 className={"text-3xl text-white font-medium uppercase text-center"}>Software Engineer, Full-stack web developer</h3>
                            </div>
                            <div className={"animate-bounce cursor-pointer absolute bottom-10 left-1/2 cursor-pointer"}>
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
                <section className={"h-screen"}>
                    <div className={"bg-bgcolor h-full"}>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Page
