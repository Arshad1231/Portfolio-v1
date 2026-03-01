import React, { useEffect, useState } from 'react'
import { useAssets } from '../Context/AssestsContext'

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import InfoComponent from '../MiniComponents/InfoComponent';

const HeroSection1 = () => {
  const [show, setShow] = useState(false)
  const { images } = useAssets()

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className="bg-yellow-500 relative text-white min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-10 py-10 lg:py-0 w-full min-w-[320px]">

      {/* BACKGROUND IMAGE - BEHIND EVERYTHING */}
      <div className="absolute inset-0 md:-bottom-20 lg:-bottom-40 flex justify-center lg:justify-end items-end z-0 opacity-100 pointer-events-none overflow-visible lg:pr-20">
        <img
          src={images.Avatar}
          alt="Avatar"
          className={`
            w-full max-w-[320px] lg:max-w-none md:-bottom-20 min-w-[1024px] lg:min-w-[400px] h-auto object-cover
            transition-all duration-1000 ease-in-out delay-300
            ${show
              ? 'opacity-100 translate-x-0 translate-y-0'
              : 'opacity-0 -translate-x-10 translate-y-10 lg:-translate-x-20 lg:translate-y-20'}
          `}
        />
      </div>

      <div className='relative z-10 w-full flex flex-col lg:flex-row gap-8 lg:gap-0 h-full'>
        {/* LEFT SIDE - TEXT */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-2 text-center lg:text-left drop-shadow-lg lg:left-40 mt-10 lg:mt-0 lg:pl-20">

          {/* Line 1 */}
          <h1
            className={`
                font-strong-text text-4xl sm:text-5xl md:text-5xl font-black leading-[0.8] mb-2 lg:mb-0
                transition-all duration-1000 ease-in-out
                ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 lg:translate-x-32'}
              `}
          >
            Hello, I&apos;m
          </h1>

          {/* Line 2 */}
          <h1
            className={`
                font-strong-text text-6xl sm:text-7xl md:text-9xl font-black leading-[0.8] mb-2 lg:mb-0
                transition-all duration-1000 ease-in-out delay-100
                ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 lg:translate-x-40'}
              `}
          >
            Shaik
          </h1>

          {/* Line 3 */}
          <h1
            className={`
                font-strong-text text-6xl sm:text-7xl md:text-9xl font-black leading-[0.8] mb-2 lg:mb-0
                transition-all duration-1000 ease-in-out delay-200
                ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-14 lg:translate-x-48'}
              `}
          >
            Arshad
          </h1>
          <h2
            className={`
                mt-4 lg:mt-3
                text-base sm:text-lg font-semibold
                tracking-wide
                text-white/90
                drop-shadow-md
                leading-[1.2] lg:leading-[0.2]
                italic
                transition-all duration-1000 ease-out delay-300
                ${show
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'}
              `}
          >
            Turning ideas into production-ready apps
          </h2>

          {/* Social Links */}
          <div
            className={`
                flex gap-4 lg:gap-2 mt-6 lg:mt-3 lg:ml-4
                transition-all duration-1000 ease-in-out delay-400 
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:translate-y-32'}
              `}
          >
            {/* GitHub */}
            <a
              href="#GITHUB_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-white rounded-md
                          hover:bg-white hover:text-black transition
                          flex items-center justify-center text-2xl"
            >
              <FaGithubSquare />
            </a>

            {/* LinkedIn */}
            <a
              href="#LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-white rounded-md
                          hover:bg-white hover:text-black transition
                          flex items-center justify-center text-2xl"
            >
              <FaLinkedin />
            </a>

            {/* Placeholder */}
            <a
              href="#PLACEHOLDER_LINK"
              className="px-4 py-3 border border-white rounded-md
                          hover:bg-white hover:text-black transition
                          flex items-center justify-center text-sm"
            >
              Link
            </a>
          </div>

        </div>

        {/* INFO COMPONENT - BELOW TEXT ON MOBILE */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative z-0 mt-10 lg:mt-0">
          <InfoComponent />
        </div>
      </div>
    </div>
  )
}

export default HeroSection1
