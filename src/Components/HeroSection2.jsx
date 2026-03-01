import React from "react";
import { motion } from "framer-motion";
import { TbDeviceImacCode, TbDatabase, TbChartArcs } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaLaptopCode, FaBrain, FaCogs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { MdOutlineAppSettingsAlt, MdOutlineModelTraining } from "react-icons/md";
import { useAssets } from "../Context/AssestsContext";

const techStack = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <TbDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const aiSkills = [
  "CNN / RNN Architectures",
  "Regression & Classification",
  "Natural Language Processing",
  "Feature Engineering",
  "Model Evaluation",
  "Deployment Pipelines",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection2 = () => {
  const { links } = useAssets();

  return (
    <motion.section
      className="bg-yellow-400 w-full px-4 sm:px-6 md:px-8 py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* SECTION TITLE */}
        <motion.div variants={boxVariants} className="text-center">
          <h2 className=" text-4xl md:text-5xl font-for-heading font-black text-white mb-4 tracking-tight">
            Capabilities & Expertise
          </h2>
          <p className="font-for-body text-white max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Bridging the gap between scalable full-stack web infrastructure and
            high-performance,  intelligent AI/ML systems. Built for the modern web.
          </p>
        </motion.div>

        {/* DOMAIN EXPERTISE GRID (Web vs AI) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* WEB DEVELOPMENT CARD */}
          <motion.div
            variants={boxVariants}
            className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group"
          >
            {/* Color accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500" />

            <div className="absolute right-[-10%] bottom-[-10%] text-[10rem] text-yellow-50 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <TbDeviceImacCode />
            </div>

            <div className="relative z-10">
              <div className="text-4xl md:text-5xl text-yellow-500 mb-4">
                <TbDeviceImacCode />
              </div>
              <h3 className="text-2xl sm:text-3xl font-for-heading font-black text-gray-900 mb-4">
                Full-Stack Web Engineering
              </h3>
              <p className="text-gray-600 font-for-body text-sm md:text-base leading-relaxed mb-8">
                I build responsive, scalable, and highly performant web applications.
                Focusing on modern MERN stack architecture, I ensure seamless user
                experiences from the database layer to the frontend.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 relative z-10 mt-auto">
              {techStack.map((tech) => (
                <div key={tech.name} className="relative overflow-hidden group/tech rounded-full shadow-sm border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover/tech:translate-y-0 transition-transform duration-300 ease-out" />
                  <div className="relative z-10 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 group-hover/tech:text-gray-900 transition-colors duration-300">
                    {tech.icon}
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* AI / ML CARD */}
          <motion.div
            variants={boxVariants}
            className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group"
          >
            {/* Color accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />

            <div className="absolute right-[-10%] bottom-[-10%] text-[10rem] text-purple-50 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <FaBrain />
            </div>

            <div className="relative z-10">
              <div className="text-4xl md:text-5xl text-purple-500 mb-4">
                <FaBrain />
              </div>
              <h3 className="text-2xl sm:text-3xl font-for-heading font-black text-gray-900 mb-4">
                Intelligent AI / ML Systems
              </h3>
              <p className="font-for-body text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                From structured datasets to production-ready intelligent models.
                I design supervised and deep learning networks engineered for accuracy,
                computational efficiency, and real-world impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 relative z-10 mt-auto">
              {aiSkills.map((item) => (
                <div key={item} className="relative overflow-hidden group/ai rounded-full shadow-sm border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 bg-purple-500 translate-y-[100%] group-hover/ai:translate-y-0 transition-transform duration-300 ease-out" />
                  <div className="relative z-10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 group-hover/ai:text-white transition-colors duration-300">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* DETAILED EXPERTISE GRID (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.div variants={boxVariants} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaLaptopCode />
            </div>
            <h4 className="font-for-heading font-black text-[1.1rem] text-gray-900 mb-2">Web Apps</h4>
            <p className="text-sm text-gray-600 font-for-body leading-relaxed">Interactive, highly scalable browser-based applications that adapt across devices.</p>
          </motion.div>

          <motion.div variants={boxVariants} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaDatabase />
            </div>
            <h4 className="font-for-heading font-black text-[1.1rem] text-gray-900 mb-2">Data Engineering</h4>
            <p className="text-sm text-gray-600 font-for-body leading-relaxed">Structured modeling, preprocessing pipelines, and scalable database architectures.</p>
          </motion.div>

          <motion.div variants={boxVariants} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <MdOutlineModelTraining />
            </div>
            <h4 className="font-for-heading font-black text-[1.1rem] text-gray-900 mb-2">ML Workflows</h4>
            <p className="text-sm text-gray-600 font-for-body leading-relaxed">End-to-end model training, hyperparameter tuning, and seamless production deployment.</p>
          </motion.div>

          <motion.div variants={boxVariants} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <TbChartArcs />
            </div>
            <h4 className="font-for-heading font-black text-[1.1rem] text-gray-900 mb-2">Optimization</h4>
            <p className="text-sm text-gray-600 font-for-body leading-relaxed">Advanced tuning strategies ensuring reliability, reducing overfitting, and enhancing speed.</p>
          </motion.div>

        </div>

        {/* BOTTOM UNIFIED CTA */}
        <motion.div
          variants={boxVariants}
          className="relative mt-8 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2rem] shadow-2xl p-10 md:p-14 flex flex-col items-center text-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

          <h3 className="relative z-10 text-3xl md:text-5xl font-for-heading font-black text-white mb-6">
            Got an ambitious project?
          </h3>
          <p className="relative z-10 font-for-body text-gray-300 max-w-2xl mb-10 leading-relaxed md:text-lg">
            Whether it's a scalable data-driven web platform or an intricate machine
            learning system, let's architect and transform your concept into reality.
          </p>

          <a
            className="relative z-10"
            href={`mailto:${links.email}?subject=Project inquiry (Web / AI)&body=Hi,%0D%0A%0D%0AI would like to discuss a project with you.`}
          >
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-gray-900 font-for-body text-sm md:text-base font-bold rounded-xl shadow-xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300">
              Let's build together →
            </button>
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection2;