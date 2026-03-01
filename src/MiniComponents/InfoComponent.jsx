import React, { useState } from 'react'
import { motion } from "framer-motion"

const InfoComponent = () => {

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative w-full min-h-[400px] lg:h-screen lg:w-[120%] overflow-hidden text-white flex flex-col items-center lg:block">

      {/* Nav */}
      <nav className="relative lg:absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl lg:right-10 lg:top-[25%] mt-4 lg:mt-0 flex p-1.5 z-20 w-[300px] max-w-[95%] lg:w-80 overflow-hidden shadow-lg font-for-heading">

        {/* Sliding Indicator */}
        <div
          className="absolute top-1.5 bottom-1.5 left-1.5 w-[31%] bg-yellow-500 rounded-lg transition-transform duration-500 ease-in-out shadow-md"
          style={{ transform: `translateX(${activeIndex * 103}%)` }}
        />

        <button
          onClick={() => setActiveIndex(0)}
          className={`relative z-10 flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg font-medium text-center transition-all duration-300 ${activeIndex === 0 ? "text-white" : "text-white/80 hover:text-white"}`}
        >
          Services
        </button>

        <button
          onClick={() => setActiveIndex(1)}
          className={`relative z-10 flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg font-medium text-center transition-all duration-300 ${activeIndex === 1 ? "text-white" : "text-white/80 hover:text-white"}`}
        >
          Projects
        </button>

        <button
          onClick={() => setActiveIndex(2)}
          className={`relative z-10 flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg font-medium text-center transition-all duration-300 ${activeIndex === 2 ? "text-white" : "text-white/80 hover:text-white"}`}
        >
          About Me
        </button>
      </nav>


      {/* Sliding Panels */}
      <div className="relative lg:absolute lg:right-10 lg:top-[60%] lg:-translate-y-1/2 w-[300px] max-w-[95%] lg:w-80 h-[28rem] lg:h-[32rem] overflow-hidden mt-2 lg:mt-0">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >

          {/* Services Panel */}
          <motion.div
            className="w-full h-full flex-shrink-0 flex flex-col justify-center px-1"
            variants={panelVariants}
            initial="hidden"
            animate={activeIndex === 0 ? "show" : "hidden"}
          >
            <h2 className='text-3xl font-for-heading text-center lg:text-left drop-shadow-md mb-4'>
              Services
            </h2>
            <motion.p
              variants={panelVariants}
              className="text-sm text-white/90 leading-relaxed font-for-body text-center lg:text-left mb-6"
            >
              I build scalable web applications and intelligent AI systems
              designed for performance, real-world impact, and production deployment.
            </motion.p>

            <ul className="flex flex-col gap-3">
              <motion.li
                variants={panelVariants}
                className="px-4 py-3 text-sm font-medium border border-white/40 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-center lg:text-left shadow-sm"
              >
                Full-Stack Website Development
              </motion.li>

              <motion.li
                variants={panelVariants}
                className="px-4 py-3 text-sm font-medium border border-white/40 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-center lg:text-left shadow-sm"
              >
                AI / ML / Deep Learning Model Development, Training and Deployment
              </motion.li>
            </ul>
          </motion.div>


          {/* Projects Panel */}
          <motion.div
            className="w-full h-full flex-shrink-0 flex flex-col justify-center px-1"
            variants={panelVariants}
            initial="hidden"
            animate={activeIndex === 1 ? "show" : "hidden"}
          >
            <h2 className="text-3xl font-for-heading text-center lg:text-left drop-shadow-md mb-4">
              Projects
            </h2>
            <motion.p
              variants={panelVariants}
              className="text-sm text-white/90 leading-relaxed font-for-body text-center lg:text-left mb-6"
            >
              Here are some of the key solutions I've built and delivered, focusing on real-world capabilities.
            </motion.p>
            <ul className="flex flex-col gap-3">
              <motion.li variants={panelVariants} className="px-4 py-3 text-sm font-medium border border-white/40 bg-white/5 rounded-xl hover:bg-white hover:text-black transition shadow-sm text-center lg:text-left">
                Portfolio Website
              </motion.li>
              <motion.li variants={panelVariants} className="px-4 py-3 text-sm font-medium border border-white/40 bg-white/5 rounded-xl hover:bg-white hover:text-black transition shadow-sm text-center lg:text-left">
                E-commerce App
              </motion.li>
              <motion.li variants={panelVariants} className="px-4 py-3 text-sm font-medium border border-white/40 bg-white/5 rounded-xl hover:bg-white hover:text-black transition shadow-sm text-center lg:text-left">
                Chat Application
              </motion.li>
            </ul>
          </motion.div>


          {/* About Me Panel */}
          <motion.div
            className="w-full h-full flex-shrink-0 flex flex-col justify-center px-1"
            variants={panelVariants}
            initial="hidden"
            animate={activeIndex === 2 ? "show" : "hidden"}
          >
            <h2 className="text-3xl font-for-heading text-center lg:text-left drop-shadow-md mb-4">
              About Me
            </h2>

            <motion.p
              variants={panelVariants}
              className="text-sm leading-relaxed text-white/90 text-center lg:text-left font-for-body"
            >
              AI & MERN developer building intelligent, scalable
              applications from scratch — turning complex ideas
              into production-ready solutions.
              <br />
              <br />
              With hands-on experience in Machine Learning and Deep Learning,
              I design systems that are not only functional but optimized for
              performance and real-world impact.
              <br />
              <br />
              I collaborate effectively within teams, communicate clearly,
              and contribute across the full development lifecycle.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default InfoComponent