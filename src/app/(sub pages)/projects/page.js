import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/app/components/RenderModel";
// import StickWizard from "@/app/components/models/StickWizard";
import dynamic from "next/dynamic";

const StickWizard = dynamic(
  () => import("@/app/components/models/StickWizard"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-25 top-0 left-0"
        priority
        sizes="100vw"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <StickWizard />
        </RenderModel>
      </div>
    </>
  );
}
