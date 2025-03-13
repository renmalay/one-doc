"use client";

import CarouselBg from "@/components/carousel";
import Header from "@/components/header";
import Overview from "@/components/overview";
import Services from "@/components/services";



import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Teachers, Rethink_Sans } from 'next/font/google'

const teachers = Teachers({
  weight: '400',
})

const rethinkSans = Rethink_Sans({
  weight:['400','700'],
})

const overviewData = [
  { value: "15+", title: "Years of Existence"},
  { value: "98%", title: "Client Satisfaction"},
  { value: "15+", title: "Years of Existence"},
];

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <>
      <div className="relative min-h-screen">
        <CarouselBg />

        {/* Foreground Content */}
        <div className="absolute inset-0 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-25">

          <Header />
          
          <div className="flex flex-col md:flex-row h-[calc(100vh-8em)]">
          {/* Left Side */}
            <div className="w-full mt-10 md:w-1/2 flex flex-col justify-center text-white" data-aos="fade-right" data-aos-duration="2000">
              <h2 className={`mt-0 md:-mt-[100px] flex flex-col gap-1 md:gap-5 ${rethinkSans.className} font-bold justify-around sm:justify-start text-4xl md:text-5xl lg:text-6xl`}>
                <span className="block">ONE</span>
                <span className="block">DOCUMENT</span>
                <span className="block">CORPORATION</span>
              </h2>
              <button className="w-32 sm:w-36 md:w-40 mt-5 px-4 py-3 text-sm sm:text-base md:text-lg bg-blue-600 text-white shadow-2xl font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>

            {/* Right Side */}
            <div className="w-full mt-10 md:w-1/2 flex flex-col md:justify-around md:items-end md:h-full" data-aos="fade-left" data-aos-duration="2000">
              <div className="md:h-1/3"></div>
              <div className="w-full bg-gray-300 rounded-2xl md:rounded-l-2xl md:rounded-r-none flex justify-center items-center shadow-lg shadow-blue-700/50 -me-4 sm:-me-8 md:-me-12 lg:-me-20 xl:-me-25">
                <span className={`text-black  ${teachers.className} text-sm lg:text-lg mx-10 text-justify my-5 `}> 
                  One Document Corporation is focused on Information Technology-related project development and technology-based solutions. On our fifteen (15) year existence, we continue to expand our reach through program-based versatile integrated systems that accelerate progress for any business operation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full block">
        <Services />
      </div>
        <div className="bg-[var(--company-color)] w-full text-white grid grid-cols-1 md:grid-cols-3 py-5 gap-5 md:py-0 md:gap-0 items-center text-center">
          {overviewData.map((item, index) => (
            <Overview key={index} index={index} value={item.value} title={item.title} />
          ))}
        </div>
        
        <div className="bg-blue-900 w-full text-white items-center text-center">
          <h1 className="text-1xl sm:text-4xl md:text-5xl lg:text-6xl py-10">FOOTER</h1>
        </div>
  </>
  );
}
