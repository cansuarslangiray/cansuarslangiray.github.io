"use client";
import React from "react";
import Image from "next/image";

import {TypeAnimation} from 'react-type-animation';
import {motion} from "framer-motion";


const HeroSection = () => {
    return (
        <section className={"lg:py-16"} id="about" >

            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale:0.5}} animate={{ opacity:1, scale:1}} transition={{duration: 0.5}} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className={"text-transparent bg-clip-text bg-gradient-to-r from-[#FFAFCC] to-[#A2D2FF]"}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hello, I'm {""}
                        </span>
                        <br>
                        </br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Cansu',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'a Game Developer',
                                1000,
                                'a 2D pixel artist ',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-gray-600 sm:text-lg mb-6 lf:text-xl">
                        I am a third-year computer engineering student in Izmir University of Economics who is into game development. Below you can find more information about me, and the projects I have worked on. 
                    </p>    
                    <div>
                        <button
                            className={"px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#FFD6FF] via-[#C8B6FF] to to-[#BBD0FF] hover:bg-slate-800 text-white"}>
                                <span className={"transition-colors duration-200 block hover:bg-slate-50 hover:bg-opacity-30 rounded-full px-5 py-2"}>
                                    <a className="text-black" href={"public/CansuArslangiray.pdf"} download={"CansuArslangiray.pdf"}>Download CV</a>
                                </span>
                        </button>
                    </div>
                </motion.div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className={"rounded-full bg-[#FFAFCC] w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] relative"}>
                        <Image src={"/image/Foto.png"}
                               alt={"hero image"}
                               className={"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
                               width={250}
                               height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;