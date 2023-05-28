import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [scroll, setScroll] = useState(0);
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (projectsContainerRef.current) {
      const scrollTop = projectsContainerRef.current.scrollTop;
      // Do something with the scrollTop value
      console.log(scrollTop);
      setScroll(scrollTop);
    }
  };

  return (
    <>
      <Head>
        <title>Mohamed Yasser | Frontend Developer | Projects</title>
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-5 py-2 h-[65vh] overflow-y-scroll"
        ref={projectsContainerRef}
        onScroll={handleScroll}
      >
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3 projects-container"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.name}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard
                project={project}
                scrollTop={scroll}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
