"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section id="about" className="mb-12 grid gap-8 rounded-[22px] border border-[#d2d2d7] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:p-10 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <p className="mb-4 inline-flex rounded-full border border-[#c8d8f8] bg-[#eef5ff] px-4 py-1 text-sm font-semibold text-[#1f4f97]">
          Game Developer Portfolio
        </p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Cansu Arslangiray
        </h1>
        <p className="mb-8 max-w-3xl text-base leading-8 text-[#6e6e73] sm:text-lg">
          Computer Engineering student focused on game development, gameplay systems, and player-centered design.
          I build projects with Unity, C#, and modern tooling while continuously improving through real game
          production.
        </p>

        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href="/CansuArslangiray.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:col-span-4">
        <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-8 border-[#f0f6ff] bg-[#eaf3ff] sm:h-[290px] sm:w-[290px]">
          <img src="/image/me.jpg" alt="Cansu Arslangiray" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
