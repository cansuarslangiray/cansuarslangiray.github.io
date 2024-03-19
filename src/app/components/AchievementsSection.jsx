"use client";
import React from "react";
import dynamic from "next/dynamic";


const AnimatedNumbers = dynamic(() => {
    return import("react-animated-numbers");
}, {ssr:false});

const achievementList = [
    {
        metric: "Games",
        value: "15",
        postfix: "+",
    },
    {
        metric: "Applications",
        value: "3",
    },
];

const AchievementsSection = () => {
    return (
        <div className={"py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>
            <div className={"border-[#abc4ff] border rounded-md py-8 px-16 flex flex-row items-center justify-around"} style={{
                borderWidth: "4px",
                borderRadius: "16px"
            }}>
                {
                    achievementList.map((achievement, index) => {
                        return (
                            <div key={index} className={"flex flex-col items-center justify-center mx-4"}
                            >
                                <h2 className={"text-[#abc4ff] text-4xl font-bold flex flex-row"}>
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale={"en-US"}
                                        className={"text-[#abc4ff] text-4xl font-bold"}
                                        configs={(_,index)=> {
                                            return{
                                                mass: 1,
                                                friction: 100,
                                                tensions: 140 *(index +1),
                                            };
                                        }}
                                        />
                                    {achievement.postfix}
                                </h2>
                                <p className={"text-[#ADB7BE] text-gray-600"}>{achievement.metric}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default AchievementsSection