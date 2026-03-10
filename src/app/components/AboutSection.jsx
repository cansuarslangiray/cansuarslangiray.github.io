"use client";

import React from "react";

const skills = [
    "Unity Engine",
    "C#",
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "Git",
    "Project Management",
];

const AboutSection = () => {
    return (
        <section className="mb-14" aria-label="About">
            <div className="mb-6">
                <h2 className="section-heading">About Me</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
                <div className="glass-card overflow-hidden lg:col-span-4">
                    <img src="/image/unity.jpg" alt="Unity" className="h-full min-h-[260px] w-full object-cover"/>
                </div>

                <div className="glass-card space-y-5 p-6 lg:col-span-8">
                    <p className="section-subtitle">
                        I’m a Computer Engineering graduate and a game developer who loves taking projects from a simple
                        concept to a finished, playable loop. Whether it’s designing systems or cleaning up
                        architecture, I’m always focused on how to make the game feel better for the player. I thrive on
                        iterative work taking feedback and turning it into a smoother experience. I really enjoy the
                        challenge of building things that are both technically solid and genuinely fun to play.
                    </p>

                    <div className="rounded-xl border border-[#e5e7eb] bg-[#fafafa] p-4">
                        <h3 className="mb-2 text-lg font-bold text-[#1d1d1f]">Education</h3>
                        <p className="text-[#4d4d52]">Izmir University of Economics, B.Sc. Computer Engineering (2021 -
                            2025)</p>
                        <p className="mt-1 text-sm text-[#6e6e73]">GPA: 3.1</p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-lg font-bold text-[#1d1d1f]">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="badge-pill">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
