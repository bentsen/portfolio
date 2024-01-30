import Image from "next/image";

const Expertise = () => {
  return (
    <div className={"pt-24"}>
      <div className={"mx-auto my-0 md:w-[1333px] flex flex-col items-center"}>
        <div>
          <h1 className={"text-white md:text-6xl text-4xl"}>My Expertise</h1>
        </div>
        <div className={"flex flex-col gap-2 md:gap-0 md:flex-row w-3/4 pt-10"}>
          <ExpertisePanel>
            <div className={"flex flex-row items-center gap-2"}>
              <div>
                <Image
                  src={"/expertise/frontend.png"}
                  alt={"react"}
                  width={50}
                  height={50}
                />
              </div>
              <div className={"text-white text-3xl font-bold"}>
                <h3>Frontend</h3>
                <span>React, NextJS</span>
                <hr className={"border-none h-2 bg-blue-400"} />
              </div>
            </div>
            <div className={"pt-5 text-white font-medium"}>
              <div className={"text-gray-500"}>{"<p>"}</div>
              <div className={"pl-3 pt-1 pb-1"}>
                <div className={"border-l-2 border-gray-500 pl-2 font-medium"}>
                  <p>
                    I feel at home in the React ecosystem. It fits my thought
                    process and work process perfectly. I primarily use the
                    frameworks NextJS.
                  </p>
                </div>
              </div>
              <div className={"text-gray-500"}>{"<p/>"}</div>
            </div>
          </ExpertisePanel>
          <ExpertisePanel>
            <div className={"flex flex-row items-center gap-2"}>
              <div>
                <Image
                  src={"/expertise/frontend.png"}
                  alt={"react"}
                  width={50}
                  height={50}
                />
              </div>
              <div className={"text-white text-3xl font-bold"}>
                <h3>Backend</h3>
                <span>Typescript, Java</span>
                <hr className={"border-none h-2 bg-orange-400"} />
              </div>
            </div>
            <div className={"pt-5 text-white font-medium"}>
              <div className={"text-gray-500"}>{"<p>"}</div>
              <div className={"pl-3 pt-1 pb-1"}>
                <div className={"border-l-2 border-gray-500 pl-2 font-medium"}>
                  <p>
                    I began coding with Java and frequently used it for creating
                    APIs. However, I later developed a strong preference for
                    TypeScript and have since been exclusively using it
                    alongside the Express framework.
                  </p>
                </div>
              </div>
              <div className={"text-gray-500"}>{"<p/>"}</div>
            </div>
          </ExpertisePanel>
          <ExpertisePanel>
            <div className={"flex flex-row items-center gap-2"}>
              <div>
                <Image
                  src={"/expertise/frontend.png"}
                  alt={"react"}
                  width={50}
                  height={50}
                />
              </div>
              <div className={"text-white text-3xl font-bold"}>
                <h3>Hosting & CI/CD</h3>
                <span>Digital Ocean</span>
                <hr className={"border-none h-2 bg-pink-400"} />
              </div>
            </div>
            <div className={"pt-5 text-white font-medium"}>
              <div className={"text-gray-500"}>{"<p>"}</div>
              <div className={"pl-3 pt-1 pb-1"}>
                <div className={"border-l-2 border-gray-500 pl-2 font-medium"}>
                  <p>
                    When i am working on projects for school i mostly deploy on
                    vercel for an easy and quiock deployment. For my more
                    professional projects i use Digital Ocean for hosting and
                    Github Actions for CI/CD.
                  </p>
                </div>
              </div>
              <div className={"text-gray-500"}>{"<p/>"}</div>
            </div>
          </ExpertisePanel>
        </div>
        <div className={"pt-20 flex flex-col"}>
          <div>
            <h1 className={"md:text-3xl text-2xl text-white font-bold"}>
              What I use for development
            </h1>
          </div>
          <div className={"flex justify-between pt-10"}>
            <div className={"text-center text-white leading-10"}>
              <Image
                src={"/programming-languages/logo-typescript.svg"}
                alt={"ts"}
                width={50}
                height={50}
              />
              <span>TS</span>
            </div>
            <div className={"text-center text-white leading-10"}>
              <Image
                src={"/programming-languages/logo-javascript.svg"}
                alt={"js"}
                width={50}
                height={50}
              />
              <span>JS</span>
            </div>
            <div className={"text-center text-white"}>
              <Image
                src={"/programming-languages/logo-python.svg"}
                alt={"py"}
                width={50}
                height={50}
              />
              <span>Python</span>
            </div>
            <div className={"text-center text-white"}>
              <Image
                src={"/programming-languages/logo-java.svg"}
                alt={"java"}
                width={38}
                height={30}
              />
              <span>Java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertisePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "md:w-1/3 h-auto border-y-2 border-x md:border-r-0 md:first:border-l-2 md:last:border-r-2 border-neutral-700 p-5 md:pt-10 md:pb-10"
      }
    >
      {children}
    </div>
  );
};

export default Expertise;
