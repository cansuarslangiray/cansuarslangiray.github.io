"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Zombie Farmer",
        description: "In Zombie Farmer, you take on the role of a brave farmer whose fields have been invaded by zombies. Your objective is to eliminate the increasing number of zombies in each level to survive. However, you must do so within 30 seconds, or else you'll succumb to the undead!" +
            "",
        image: "/image/project/TopDownShooter/1.jpg",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Dino",
        description: "A mobile game developed in Unity that faithfully replicates the classic gameplay of the famous Chrome Dino game, which is a popular offline browser game. The game challenges players to control a running dinosaur and help it avoid obstacles by jumping over them. The gameplay is simple yet addictive, making it an enjoyable experience for players of all ages." +
            "",
        image: "/image/project/dinogif.gif",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Obstacle",
        description: "In this game, your objective is to navigate from one point to another without colliding with any obstacles. As you progress, obstacles will fall from the top and balls will roll in from the sides. The game also features stationary obstacles and rotating barriers. If you collide with an obstacle, it will change color." +
            "",
        image: "/image/project/Obstacle.gif",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Susuwatari",
        description: "A mobile game developed in Unity that replicates the classic gameplay of Flappy Bird. It challenges players to navigate a Susuwatari through a series of pipes, tapping the screen to keep the Susuwatari airborne. The game features simple controls and addictive gameplay, perfect for quick and fun gaming sessions.",
        image: "/image/project/furry.gif",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    }, {
        id: 5,
        title: "Pizza Harvest",
        description: "Pizza Harvest is a game where you play as a farmer tasked with feeding different animals. Each animal has varying speeds, and they require different numbers of pizzas to get full. Your objective is to feed the animals until they are satisfied and earn points.",
        image: "/image/project/PizzaHarverst.gif",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };
    return (
        <section>
            <h2 className={"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"}>
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
                    name="Game"
                    isSelected={tag === "Game"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Java"
                    isSelected={tag === "Java"}
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
                            transition={{duration: 0.3, delay: index *0.4}}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    )
                )}
            </ul>
        </section>
    )
}
export default ProjectSection