import { IProject } from "@/type";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  scrollTop: number;
  showDetails: number | null;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
  scrollTop,
  showDetails,
  setShowDetails,
}) => {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    setTopPosition(scrollTop);
  }, [scrollTop]);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="w-full cursor-pointer"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
      />
      <p className="mt-3 text-center">{name}</p>
      {showDetails === id && (
        <div
          className={`absolute left-0 z-10 grid w-full h-auto p-2 md:p-10 rounded-lg text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100`}
          style={{
            top: `${topPosition > 0 ? topPosition - 60 : topPosition}px`,
          }}
        >
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                className="w-full"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                target="_blank"
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                target="_blank"
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium ">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
