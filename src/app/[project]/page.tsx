import Image from "next/image";
import { data } from "../../projects";

type Project = {
  name: string;
  image: string;
  description: string;
};

const Project = async ({ params }: { params: { project: string } }) => {
  const project: Project | undefined = data.find(
    (p) => p.name === params.project
  );

  return (
    <div className="pt-28 p-20 text-white">
      {project ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            {project.name.toLocaleUpperCase()}
          </h1>
          <Image
            src={project.image}
            alt="project image"
            width={300}
            height={300}
            className="w-full h-96 object-cover"
          />
          <div>
            <p>{project.description}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Project not found</h1>
          <p>Make sure project exits</p>
        </div>
      )}
    </div>
  );
};

export default Project;
