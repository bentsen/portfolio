import Image from "next/image";
import Link from "next/link";

const getLanguageColor = (language: string) => {
  const colors = new Map([
    ["typescript", "#3178c6"],
    ["java", "#e76f00"],
    ["python", "#3776ab"],
  ]);
  return colors.get(language);
};

const projectList = [];

const Projects = () => {
  return (
    <div className={""}>
      <div className={"mx-auto my-0 md:w-[1333px] flex flex-col items-center"}>
        <div className={"md:text-left text-center w-full"}>
          <h1 className={"md:text-5xl text-4xl text-white"}>My Projects</h1>
        </div>
        <div className={"mt-14 hidden md:flex flex-wrap gap-5 w-full"}>
          <div className="flex flex-row gap-5">
            <SmallProject
              href="/velkoz"
              name="velkoz"
              description="Web Development"
              image="/projects-images/velkoz.png"
              language="typescript"
            />
            <SmallProject
              href="/wow-mount"
              name="Wow Mount"
              description="Web Development"
              image="/projects-images/wow.png"
              language="typescript"
            />
            <SmallProject
              href="/fog"
              name="Fog"
              description="Web Development"
              image="/projects-images/fog.png"
              language="java"
            />
          </div>
          <div className={"w-[820px] h-[1200px] flex flex-col gap-5"}>
            <LargeProject
              href="/wowdeathbets"
              name="WowDeathBets"
              description="Web Development"
              image="/projects-images/wowdeathbets.png"
              language="typescript"
            />
            <LargeProject
              href="/poke-battle"
              name="Poke Battle"
              description="Machine Learning / Web Development"
              image="/projects-images/pokebattle.png"
              language="python"
            />
          </div>
          <div className={"w-[400px] h-auto flex flex-col gap-5"}>
            <SmallProject
              href="/fishing-friend"
              name="Fishing Friend"
              description="Bot"
              image="/projects-images/fishingfriend.png"
              language="java"
            />
            <SmallProject
              href="/tagfat"
              name="Tagfat"
              description="Web Development"
              image="/projects-images/tagfat.png"
              language="typescript"
            />
            <SmallProject
              href="/velkoz"
              name="Velkoz"
              description="Web Development"
              image="/projects-images/velkoz.png"
              language="typescript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  language: string;
  href: string;
}

const SmallProject = (props: ProjectProps) => {
  const { name, description, image, language, href } = props;

  return (
    <Link
      href={{ pathname: href }}
      className={"md:w-[400px] w-full h-96 flex flex-col cursor-pointer group"}
    >
      <div className={"h-3/4 relative overflow-hidden"}>
        <Image
          className={
            "rounded-t-md group-hover:scale-[1.15] transition-all duration-300"
          }
          src={image}
          alt={"project image"}
          fill
        />
      </div>
      <div className={"bg-bgcolor2 h-1/4 rounded-b-md flex flex-row"}>
        <div className={"pl-10 pt-5 w-1/2"}>
          <h3 className={"text-2xl text-white font-bold"}>{name}</h3>
          <div
            className={
              "text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"
            }
          >
            <span>{description}</span>
          </div>
          <div
            className={
              "text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"
            }
          >
            <span>Show Project</span>
          </div>
        </div>
        <div
          className={
            "w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"
          }
        >
          <div
            style={{ backgroundColor: getLanguageColor(language) }}
            className={`rounded-full w-2 h-2`}
          ></div>
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </div>
      </div>
    </Link>
  );
};

const LargeProject = (props: ProjectProps) => {
  const { name, description, image, language, href } = props;

  return (
    <Link
      href={{ pathname: href }}
      className={
        "w-[820px] h-[600px] flex flex-col cursor-pointer group col-span-2 row-span-2"
      }
    >
      <div className={"h-[80%] relative overflow-hidden"}>
        <Image
          className={
            "rounded-t-md group-hover:scale-[1.15] transition-all duration-300"
          }
          src={image}
          alt={"project image"}
          fill
        />
      </div>
      <div className={"bg-bgcolor2 h-[20%] rounded-b-md flex flex-row"}>
        <div className={"pl-10 pt-5 w-1/2"}>
          <h3 className={"text-2xl text-white font-bold"}>{name}</h3>
          <div
            className={
              "text-gray-500 group-hover:-translate-y-7 group-hover:opacity-0 transition-all duration-200"
            }
          >
            <span>{description}</span>
          </div>
          <div
            className={
              "text-gray-500 group-hover:-translate-y-7 opacity-0 group-hover:opacity-100 transition-all duration-200"
            }
          >
            <span>Show Project</span>
          </div>
        </div>
        <div
          className={
            "w-1/2 flex justify-end items-center text-white flex-row gap-2 pr-10"
          }
        >
          <div
            style={{ backgroundColor: getLanguageColor(language) }}
            className={"rounded-full w-2 h-2"}
          ></div>
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </div>
      </div>
    </Link>
  );
};

export default Projects;
