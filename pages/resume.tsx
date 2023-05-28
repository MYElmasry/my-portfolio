import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Head from "next/head";

type Props = {};

const Resume = (props: Props) => {
  return (
    <>
      <Head>
        <title>Mohamed Yasser | Frontend Developer | Resume</title>
      </Head>
      <motion.div
        className="px-6 py-2 "
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold ">Education</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Computer Science.</h5>
              <p className="font-semibold ">
                Arab Academy for Science, Technology and Maritime
                Transport(2019-2021)
              </p>
              <p className="my-3">
                I am graduated from Computing and Information Technology college
                from Arab Academy for Science, Technology and Maritime
                Transport.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold ">Experience</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Frontend Developer Jr.</h5>
              <p className="font-semibold ">CAPMAS (Jul 2022 - Aug 2022)</p>
              <p className="my-3">
                Developed software for a Climate Monitoring System using Arduino
                programming language and multiple sensors to display
                temperature, pressure, humidity, light, and gas on an LCD
                monitor.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
