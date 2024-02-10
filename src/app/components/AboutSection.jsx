"use client";
import React, {useTransition,useState } from "react";
import Image from "next/image";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const  [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className={"text-white "}>
            <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
                < Image src={"/image/foto2.png"} width={500} height={500}/>
                <div>
                    <h2 className={"text-4xl font-bold text-white mb-4"}>About Me</h2>
                    <p className={"text-base lg:text-lg"}>Experienced third-year computer engineering student with a
                        focus on game development. Skilled in
                        C#, Unity Engine, and object-oriented programming, eager to create immersive player experiences.
                        Seeking industry opportunities to further develop as a game developer. Also passionate about
                        music, cinema, and accomplished in gymnastics at domestic and international levels for over a
                        decade.</p>
                    <div className={"flex flex-row mt-8"}>
                        <span
                            className={"mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b  border-purple-500"}>Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection