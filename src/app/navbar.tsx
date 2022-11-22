import Link from "next/link";

const Navbar = () => {

    return(
        <>
            <nav className={"w-full h-20 absolute"}>
                <div className={"flex flex-row h-full"}>
                    <div className={"flex justify-between items-center text-white h-full w-full px-10"}>
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
                                <Link href={"/about"}>
                                    <li>{"// About me"}</li>
                                </Link>
                                <Link href={"/projects"}>
                                    <li>{"// Projects"}</li>
                                </Link>
                                <Link href={"/contact"}>
                                    <li>{"// Contact"}</li>
                                </Link>
                            </ul>
                        </div>
                        <div className={""}></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar