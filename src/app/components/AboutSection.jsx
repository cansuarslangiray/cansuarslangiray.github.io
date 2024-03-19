"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGgCircle } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import certificateData from "@/certificates.json"


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div style={{
                margin: "auto"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <ul style={{
                        padding: "10px",
                        border: "4px solid #A2D2FF",
                        borderRadius: "16px",
                        listStyle: "none"
                    }} className={"list-disc pl-2"}>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Programming languages: C#, Java, C, JavaScript, Python, SQL.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Project Management.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Git for version control system.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Unity Engine for game development engine.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            JavaFX for application interface.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Gradle and Maven for project build automation.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            MySQL for database management.
                        </li>
                        <li style={{ display: "flex", alignItems: "center", padding: "3px" }}>
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "10px", color: "#A2D2FF", padding: "5px", marginRight: "5px" }} />
                            Jetbrains Toolchain.
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
            }}>
                <div style={{
                    padding: "20px",
                    width: "70%",
                    borderRadius: "16px",
                    border: "4px solid #e7c6ff",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <p className="font-bold">Izmir University of Economics</p>
                        <p className="font-semibold">2021 - 2025</p>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "30px",
                        paddingRight: "30px"
                    }}>
                        <p style={{
                            fontStyle: "italic",
                            fontWeight: "normal",
                        }}>B.Sc - Computer Engineering</p>
                        <p style={{
                            fontStyle: "italic",
                            fontWeight: "normal",
                        }}>GPA: 3.1</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div class="project-grid">
                {certificateData.map((certificate, index) => (
                    <a class="certificate-url" href={certificate.url} target="_blank">
                        <div class="project-tile">
                            <div class="image-container">
                                <img src={certificate.imagePath} alt="certificate" class="project-image-landscape" />
                            </div>
                            <div style={{textAlign:"center",
                        fontWeight: "bold"}}>{certificate.name}</div>
                        </div>
                    </a>
                ))}
            </div>
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
        <section className={"text-gray-600 "}>
            <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
                < Image src={"/image/unity.png"} width={500} height={500} />
                <div className={"mt-4 md:mt-0 text-left flex flex-col h-full"}>
                    <h2 className={"text-4xl font-bold text-black mb-4"}>About Me</h2>
                    <p className={"text-base lg:text-lg"}>Experienced third-year computer engineering student with a
                        focus on game development. Skilled in
                        C#, Unity Engine, and object-oriented programming, eager to create immersive player experiences.
                        Seeking industry opportunities to further develop as a game developer. Also passionate about
                        music, cinema, and accomplished in gymnastics at domestic and international levels for over a
                        decade.</p>
                </div>
            </div>
            <div className={"flex flex-row justify-center mt-8 text-black"}>
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
                    Education{" "}
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
        </section>
    )
}
export default AboutSection