import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1 "
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h5 className="my-3 font-medium">
          I'm a motivated Computer Science graduate and aspiring Front End
          Developer with academic experience in developing websites and web
          applications using modern and cutting-edge front-end technologies,
          including HTML, CSS, JavaScript, and various libraries and frameworks.
          I'm skilled at building projects from scratch, learning new concepts
          and techniques, working well under pressure, and collaborating
          effectively with team members.
        </h5>
        <div className="flex-grow p-4 mt-5 -ml-6 -mr-6 bg-gray-400 dark:bg-dark-100">
          <h6 className="my-3 font-bold tracking-wide">What I Offer</h6>
          <motion.div
            className="grid gap-6 lg:grid-cols-2 "
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                key={service.title}
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default index;
