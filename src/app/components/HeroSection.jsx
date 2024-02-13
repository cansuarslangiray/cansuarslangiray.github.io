"use client";
import React from "react";
import Image from "next/image";

import {TypeAnimation} from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>

            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left ">

                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className={"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"}>
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
                                'Game Developer',
                                1000,
                                ' Developer',
                                1000,
                                '2D pixel artist ',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl">
                        Experienced computer engineering student skilled in game development seeks industry
                        opportunities, also excelling in gymnastics and passionate about music and cinema.
                    </p>
                    <div>
                        <button
                            className={"px-6 py-2 w-full sm:w-fit  rounded-full mr-4 mb-3 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  "}>
                            Hire Me
                        </button>
                        <button
                            className={"px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to to-pink-500 hover:bg-slate-800 text-white  "}>
                                <span className={"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"}>
                                Download CV
                                </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className={"rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] relative"}>
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