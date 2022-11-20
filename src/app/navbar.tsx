import Link from "next/link";

const Navbar = () => {

    return(
        <>
            <nav className={"w-full h-20 absolute"}>
                <div className={"flex flex-row h-full"}>
                    <div className={"flex justify-between items-center text-white h-full w-full px-7"}>
                        <div className={"block"}>
                            <h1 className={"text-3xl cursor-pointer"}>Mikkel</h1>
                        </div>
                        <div className={"mx-5"}>
                            <ul className={"flex flex-row gap-10 text-lg font-medium"}>
                                <Link href={"/"}>
                                    <li className={"cursor-pointer"}>// Home</li>
                                </Link>
                                <Link href={"/about"}>
                                    <li className={"cursor-pointer"}>// About me</li>
                                </Link>
                                <Link href={"/projects"}>
                                    <li className={"cursor-pointer"}>// Projects</li>
                                </Link>
                                <Link href={"/contact"}>
                                    <li className={"cursor-pointer"}>// Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar