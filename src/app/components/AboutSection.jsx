"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className={"list-disc pl-2"}>
                <li>C#, Java, Python, SQL</li>
                <li>Project Management</li>
                <li>Git for version control System</li>
                <li>Unity Engine</li>
                <li>JavaFX</li>
                <li>Gradle, Maven</li>
                <li>MySQL</li>
                <li>Jetbrains Tools</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className={"list-disc pl-2"}>
                <li>IZMIR UNIVERSITY OF ECONOMICS</li>
                <li>ŞEHİT ABDÜLKADİR KILAVUZ ANATOLIAN HIGHSCHOOL</li>

            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className={"list-disc pl-2"}>
                <li>Google Project Management</li>
                <li>Game Development with Unity</li>
                <li>Python for Machine Learning</li>
                <li>Tensorflow Bootcamp</li>
                <li>Flutter Bootcamp</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className={"text-white "}>
            <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
                < Image src={"/image/foto2.png"} width={500} height={500}/>
                <div className={"mt-4 md:mt-0 text-left flex flex-col h-full"}>
                    <h2 className={"text-4xl font-bold text-white mb-4"}>About Me</h2>
                    <p className={"text-base lg:text-lg"}>Experienced third-year computer engineering student with a
                        focus on game development. Skilled in
                        C#, Unity Engine, and object-oriented programming, eager to create immersive player experiences.
                        Seeking industry opportunities to further develop as a game developer. Also passionate about
                        music, cinema, and accomplished in gymnastics at domestic and international levels for over a
                        decade.</p>
                    <div className={"flex flex-row justify-start mt-8"}>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            {" "}
                            Educations{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className={"mt-8"}>{
                        TAB_DATA.find((t) => t.id === tab).content
                    }</div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection