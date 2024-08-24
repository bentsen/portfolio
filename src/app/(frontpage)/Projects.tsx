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

const Projects = () => {
  return (
    <div>
      <div className={"mx-auto my-0 md:w-[1333px] flex flex-col items-center"}>
        <div className={"md:text-left text-center w-full"}>
          <h1 className={"md:text-5xl text-4xl text-white"}>My Projects</h1>
        </div>
        <div className="mt-14 md:hidden flex flex-col gap-5 w-full px-2">
          <SmallProject
            name="velkoz"
            description="Web Development"
            image="/projects-images/velkoz.png"
            language={["typescript"]}
            link="/projects/velkoz"
          />
          <SmallProject
            name="Wow Mount"
            description="Web Development"
            image="/projects-images/wow.png"
            language={["typescript"]}
            link="/projects/wowmount"
          />
          <SmallProject
            name="Fog"
            description="Web Development"
            image="/projects-images/fog.png"
            language={["java"]}
            link="/projects/fog"
          />
          <SmallProject
            name="WowDethBets"
            description="Web Development"
            image="/projects-images/wowdeathbets.png"
            language={["typescript"]}
            link="/projects/wowdethbets"
          />
          <SmallProject
            name="Poke Battle"
            description="Machine Learning / Web Development"
            image="/projects-images/pokebattle.png"
            language={["java"]}
            link="/projects/pokebattle"
          />
          <SmallProject
            name="Fishing Friend"
            description="Bot"
            image="/projects-images/fishingfriend.png"
            language={["java"]}
            link="/projects/fishingfriend"
          />
          <SmallProject
            name="Tagfat"
            description="Web Development"
            image="/projects-images/tagfat.png"
            language={["typescript"]}
            link="/projects/tagfat"
          />
          <SmallProject
            name="Velkoz"
            description="Web Development"
            image="/projects-images/velkoz.png"
            language={["typescript"]}
            link="/projects/velkoz"
          />
        </div>
        <div className={"mt-14 hidden md:flex flex-wrap gap-5 w-full"}>
          <div className="flex flex-row gap-5">
            <SmallProject
              name="velkoz"
              description="Web Development"
              image="/projects-images/velkoz.png"
              language={["typescript"]}
              link="/projects/velkoz"
            />
            <SmallProject
              name="Wow Mount"
              description="Web Development"
              image="/projects-images/wow.png"
              language={["typescript"]}
              link="/projects/wow"
            />
            <SmallProject
              name="Fog"
              description="Web Development"
              image="/projects-images/fog.png"
              language={["java"]}
              link="/projects/fog"
            />
          </div>
          <div className={"w-[820px] h-[1200px] flex flex-col gap-5"}>
            <LargeProject
              name="Cs Predictor"
              description="Web Development & Machine Learning"
              image="/projects-images/cs_predictor.png"
              language={["typescript", "python"]}
              link="/projects/cs_predictor"
            />
            <LargeProject
              name="Poke Battle"
              description="Web Development & Machine Learning"
              image="/projects-images/pokebattle.png"
              language={["python", "typescript"]}
              link="/projects/pokebattle"
            />
          </div>
          <div className={"w-[400px] h-auto flex flex-col gap-5"}>
            <SmallProject
              name="Fishing Friend"
              description="Bot"
              image="/projects-images/fishingfriend.png"
              language={["java"]}
              link="/projects/fishingfriend"
            />
            <SmallProject
              name="Tagfat"
              description="Web Development"
              image="/projects-images/tagfat.png"
              language={["typescript"]}
              link="/projects/tagfat"
            />
            <SmallProject
              name="Velkoz"
              description="Web Development"
              image="/projects-images/velkoz.png"
              language={["typescript"]}
              link="/projects/velkoz"
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
  language: string[];
  link: string;
}

const SmallProject = (props: ProjectProps) => {
  const { name, description, image, language, link } = props;

  return (
    <Link href={link}>
      <div
        className={
          "md:w-[400px] w-full h-96 flex flex-col cursor-pointer group border border-[#30363d] rounded-md"
        }
      >
        <div className={"h-3/4 relative overflow-hidden rounded-t-md"}>
          <Image
            className={"group-hover:scale-[1.15] transition-all duration-300"}
            src={image}
            alt={"project image"}
            fill
          />
        </div>
        <div className={"bg-[#161b22] h-1/4 rounded-b-md flex flex-row"}>
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
          <div className="w-1/2 h-full flex items-center justify-end">
            <div
              className={
                "flex items-start justify-center text-white flex-col gap-2 pr-10"
              }
            >
              {language.map((lang) => (
                <div key={lang} className="flex flex-row items-center gap-2">
                  <div
                    style={{ backgroundColor: getLanguageColor(lang) }}
                    className={"rounded-full w-2 h-2"}
                  ></div>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LargeProject = (props: ProjectProps) => {
  const { name, description, image, language, link } = props;

  return (
    <Link href={link}>
      <div
        className={
          "w-[820px] h-[600px] flex flex-col cursor-pointer group col-span-2 row-span-2 border border-[#30363d] rounded-md hover:rounded-t-none"
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
        <div className={"bg-[#161b22] h-[20%] rounded-b-md flex flex-row"}>
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
          <div className="w-1/2 h-full flex items-center justify-end">
            <div
              className={
                "flex items-start justify-center text-white flex-col gap-2 pr-10"
              }
            >
              {language.map((lang) => (
                <div key={lang} className="flex flex-row items-center gap-2">
                  <div
                    style={{ backgroundColor: getLanguageColor(lang) }}
                    className={"rounded-full w-2 h-2"}
                  ></div>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
