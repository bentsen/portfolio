import Image from "next/image";

const Projects = () => {

    return(
        <>
            <div className={""}>
               <div className={"mx-auto my-0 w-[1333px] flex flex-col items-center"}>
                   <div className={"text-left w-full"}>
                       <h1 className={"text-5xl text-white"}>My Projects</h1>
                   </div>
                   <div className={"mt-14 flex flex-wrap gap-5 w-full"}>
                       <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                            <div className={"h-3/4 relative overflow-hidden"}>
                                <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/velkoz.png"} alt={"velkoz"} fill/>
                            </div>
                           <div className={"bg-bgcolor2 h-1/4 rounded-b-md flex flex-row"}>
                                <div className={"pl-10 pt-5 w-1/2"}>
                                    <h3 className={"text-2xl text-white font-bold"}>Velkoz</h3>
                                    <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                        <span className={""}>Web Development</span>
                                    </div>
                                    <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                        <span className={""}>Show Project</span>
                                    </div>
                                </div>
                               <div className={"w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"}>
                                   <div className={"rounded-full bg-typescript w-2 h-2"}></div>
                                   Typescript
                               </div>
                           </div>
                       </div>
                       <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                           <div className={"h-3/4 relative overflow-hidden"}>
                               <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/wow.png"} alt={"velkoz"} fill/>
                           </div>
                           <div className={"bg-bgcolor2 h-1/4 rounded-b-md flex flex-row"}>
                               <div className={"pl-10 pt-5 w-3/4"}>
                                   <h3 className={"text-2xl text-white font-bold"}>Wow Mount Viewer</h3>
                                   <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                       <span className={""}>Web Development</span>
                                   </div>
                                   <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                       <span className={""}>Show Project</span>
                                   </div>
                               </div>
                               <div className={"w-1/4 flex justify-end items-center text-white flex-row gap-2 pr-2"}>
                                   <div className={"rounded-full bg-typescript w-2 h-2"}></div>
                                   Typescript
                               </div>
                           </div>
                       </div>
                       <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                           <div className={"h-3/4 relative overflow-hidden"}>
                               <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/fog.png"} alt={"velkoz"} fill/>
                           </div>
                           <div className={"bg-bgcolor2 h-1/4 rounded-b-md flex flex-row"}>
                               <div className={"pl-10 pt-5 w-1/2"}>
                                   <h3 className={"text-2xl text-white font-bold"}>Fog</h3>
                                   <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                       <span className={""}>Web Development</span>
                                   </div>
                                   <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                       <span className={""}>Show Project</span>
                                   </div>
                               </div>
                               <div className={"w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"}>
                                   <div className={"rounded-full bg-java w-2 h-2"}></div>
                                   Java
                               </div>
                           </div>
                       </div>
                       <div className={"w-[820px] h-[1200px] flex flex-col gap-5"}>
                           <div className={"w-[820px] h-[600px] flex flex-col cursor-pointer group col-span-2 row-span-2"}>
                               <div className={"h-[80%] relative overflow-hidden"}>
                                   <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/tagfat.png"} alt={"velkoz"} fill/>
                               </div>
                               <div className={"bg-bgcolor2 h-[20%] rounded-b-md flex flex-row"}>
                                   <div className={"pl-10 pt-5 w-1/2"}>
                                       <h3 className={"text-2xl text-white font-bold"}>Tagfat</h3>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                           <span className={""}>Web Development</span>
                                       </div>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                           <span className={""}>Show Project</span>
                                       </div>
                                   </div>
                                   <div className={"w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"}>
                                       <div className={"rounded-full bg-typescript w-2 h-2"}></div>
                                       Typescript
                                   </div>
                               </div>
                           </div>
                           <div className={"w-[820px] h-[600px] flex flex-col cursor-pointer group col-span-2 row-span-2"}>
                               <div className={"h-[80%] relative overflow-hidden"}>
                                   <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/velkoz.png"} alt={"velkoz"} fill/>
                               </div>
                               <div className={"bg-bgcolor2 h-[20%] rounded-b-md"}>
                                   <div className={"pl-10 pt-5"}>
                                       <h3 className={"text-2xl text-white font-bold"}>Velkoz</h3>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                           <span className={""}>Web Development</span>
                                       </div>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                           <span className={""}>Show Project</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className={"w-[400px] h-auto flex flex-col gap-5"}>
                           <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                               <div className={"h-3/4 relative overflow-hidden"}>
                                   <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/fishingfriend.png"} alt={"velkoz"} fill/>
                               </div>
                               <div className={"bg-bgcolor2 h-1/4 rounded-b-md flex flex-row"}>
                                   <div className={"pl-10 pt-5 w-1/2"}>
                                       <h3 className={"text-2xl text-white font-bold"}>Fishing Friend</h3>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                           <span className={""}>Bot</span>
                                       </div>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                           <span className={""}>Show Project</span>
                                       </div>
                                   </div>
                                   <div className={"w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"}>
                                       <div className={"rounded-full bg-java w-2 h-2"}></div>
                                       Java
                                   </div>
                               </div>
                           </div>
                           <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                               <div className={"h-3/4 relative overflow-hidden"}>
                                   <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/velkoz.png"} alt={"velkoz"} fill/>
                               </div>
                               <div className={"bg-bgcolor2 h-1/4 rounded-b-md"}>
                                   <div className={"pl-10 pt-5"}>
                                       <h3 className={"text-2xl text-white font-bold"}>Velkoz</h3>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                           <span className={""}>Web Development</span>
                                       </div>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                           <span className={""}>Show Project</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className={"w-[400px] h-96 flex flex-col cursor-pointer group"}>
                               <div className={"h-3/4 relative overflow-hidden"}>
                                   <Image className={"rounded-t-md group-hover:scale-[1.15] transition-all duration-300"} src={"/projects-images/velkoz.png"} alt={"velkoz"} fill/>
                               </div>
                               <div className={"bg-bgcolor2 h-1/4 rounded-b-md"}>
                                   <div className={"pl-10 pt-5"}>
                                       <h3 className={"text-2xl text-white font-bold"}>Velkoz</h3>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"}>
                                           <span className={""}>Web Development</span>
                                       </div>
                                       <div className={"text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"}>
                                           <span className={""}>Show Project</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Projects