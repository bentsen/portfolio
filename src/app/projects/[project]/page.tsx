import Image from "next/image";

const hej = async ({ params }: { params: { project: string } }) => {
  return (
    <div className="h-screen">
      <div className="w-full h-2/4 relative">
        <Image
          src={`/projects-images/${params.project}.png`}
          className="object-cover"
          fill
          alt="banner of project"
        />
      </div>
    </div>
  );
};

export default hej;
