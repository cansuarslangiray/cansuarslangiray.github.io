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
        gitUrl: "https://github.com/cansuarslangiray/Zombie-Farmer",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Desert Run",
        description: "Desert Run is an endless runner game that places you in a scorching desert landscape. You take control of a determined character racing through a narrow pathway, between towering desert hills. Your mission is to steer your character left or right to avoid obstacles and use your jumping to overcome fallen trees. As the game continues, the speed will increase and makes each hurdle more challenging to overcome.",
        image: "/image/project/SubwaySurf.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/DesertRun",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Dino",
        description: "A mobile game developed in Unity that faithfully replicates the classic gameplay of the famous Chrome Dino game, which is a popular offline browser game. The game challenges players to control a running dinosaur and help it avoid obstacles by jumping over them. The gameplay is simple yet addictive, making it an enjoyable experience for players of all ages." +
            "",
        image: "/image/project/dinogif.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/Dino",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Obstacle",
        description: "In this game, your objective is to navigate from one point to another without colliding with any obstacles. As you progress, obstacles will fall from the top and balls will roll in from the sides. The game also features stationary obstacles and rotating barriers. If you collide with an obstacle, it will change color." +
            "",
        image: "/image/project/Obstacle.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/Obstacle",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Starship Sprint",
        description: "Startship Sprint is a 3D platformer arcade game where players launch control a starship with the aim of landing it to the designated area. There are multiple levels the players can complete. It features a simple yet addictive gameplay.",
        image: "/image/project/ss.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/StarshipSprint",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Elements Unleashed",
        description: "",
        image: "/image/project/u-137.png",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/u-137",
        previewUrl: "/"
    },
    {
        id: 7,
        title: "Unlocker's Tale",
        description: "Unlocker’s Tale is a 3D third-person adventure game which is inspired by the game called Open the Door: A Short Story”. This game consists of three levels and each level has a different playing style.",
        image: "/image/project/ut.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/UnlockersTale",
        previewUrl: "/"
    },
    {
        id: 8,
        title: "Susuwatari",
        description: "A mobile game developed in Unity that replicates the classic gameplay of Flappy Bird. It challenges players to navigate a Susuwatari through a series of pipes, tapping the screen to keep the Susuwatari airborne. The game features simple controls and addictive gameplay, perfect for quick and fun gaming sessions.",
        image: "/image/project/furry.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/Susuwatari",
        previewUrl: "/"
    }, {
        id: 9,
        title: "Pizza Harvest",
        description: "Pizza Harvest is a game where you play as a farmer tasked with feeding different animals. Each animal has varying speeds, and they require different numbers of pizzas to get full. Your objective is to feed the animals until they are satisfied and earn points.",
        image: "/image/project/PizzaHarverst.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/PizzaHarvest",
        previewUrl: "/"
    },
    {
        id: 9,
        title: "Space Shooter",
        description: "Star Shooter is a 2D arcade-like game where players control a spaceship in space, battling enemy ships while collecting power-ups. I developed this game following the Udemy course The Ultimate Guide to Game Development with Unity",
        image: "/image/project/laser.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/SpaceShooter",
        previewUrl: "/"
    },
    {
        id: 10,
        title: "Direction Dash",
        description: "Direction Dash is an exciting 3D racing game where you control a car and navigate it through a challenging course filled with obstacles. Test your reflexes and driving skills as you dash forward, backward, left, and right to avoid crashing into obstacles and aim for the highest score!",
        image: "/image/project/PlayCar.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/DirectionDash",
        previewUrl: "/"
    },
    {
        id: 11,
        title: "The Gap Pilot",
        description: "The Gap Pilot is a game developed in Unity that offers a 3D twist on the classic Flappy Bird game. Players take control of an airplane navigating through narrow passages between towering walls. You can steer the airplane using either the WASD keys or arrow keys.",
        image: "/image/project/PlanePlay.gif",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/cansuarslangiray/The-Gap-Pilot",
        previewUrl: "/"
    },
    {
        id: 12,
        title: "Syllabus Conversion and Management Application",
        description: "The program, tailored for educators and school administrators, efficiently converts diverse syllabus data into a unified JSON format for seamless integration with systems like OASIS. It incorporates version control, prompting users to justify modifications, and ensuring transparent academic record-keeping. The import feature facilitates the examination and comparison of stored JSON files, promoting data accessibility and transferability. With its user-friendly design, the program ensures ease of use without requiring specialized training.",
        image: "/image/project/syl.png",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/cansuarslangiray/SE302Project",
        previewUrl: "/"
    },
    {
        id: 13,
        title: "DictOff",
        description: "",
        image: "",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/cansuarslangiray/DictOff",
        previewUrl: "/"
    },
    {
        id: 14,
        title: "Pisti",
        description: "",
        image: "",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/cansuarslangiray/Pisti",
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
        <section id="projects">
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