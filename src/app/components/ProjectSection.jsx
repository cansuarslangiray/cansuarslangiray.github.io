"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";
import ProjectModal from "@/app/components/ProjectModal";
import projectsData from "@/projects.json";


const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        console.log("clicked on project");
        setSelectedProject(project);
    };

    const handleModalClose = () => {
        setSelectedProject(null);
    };

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(tag)
    );
    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };
    return (
        <section id="projects">
            <h2 className={"text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12"}>
                My Projects
            </h2>
            <div className={"text-white flex flex-row justify-center items-center gap-2 py-6"}>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Games"
                    isSelected={tag === "game"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Applications"
                    isSelected={tag === "app"}
                />
            </div>
            <ul ref={ref} className={"grid md:grid-cols-3 gap-8 md:gap-12"}>
                {filteredProjects.map((project, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial={"initial"}
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.thumbnail}
                            gitUrl={project.gitUrl}
                            click={() => handleProjectClick(project)} // Add onClick handler
                        ></ProjectCard>
                    </motion.li>
                ))}
            </ul>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={handleModalClose}
                />
            )}
        </section>
    );
}
export default ProjectSection