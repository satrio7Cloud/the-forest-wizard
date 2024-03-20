"use client";
import { motion } from "framer-motion";
import ProjectsLayout from "./ProjectsLayout";

const container = {
  hidden: { opcaity: 0 },
  show: {
    opcaity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.0,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-white w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((projects, index) => {
        return <ProjectsLayout key={index} {...projects} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
