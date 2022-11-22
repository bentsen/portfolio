'use client';

import {useState} from "react";

const Page = () => {
    const [lort, setLort] = useState("hej")

    const handleClick = () => {
        setLort("hej seb")
    }

    return(
        <>
            <div className={"pt-20"}>
                <h1>{lort}</h1>
                <button onClick={handleClick}>tryk her</button>
            </div>
        </>
    )
}

export default Page