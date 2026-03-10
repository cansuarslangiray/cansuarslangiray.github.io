"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
const ProjectModal = dynamic(() => import("@/app/components/ProjectModal"), { ssr: false });

const ProjectSection = ({ projectsData, certificateData }) => {
  const [activeView, setActiveView] = useState("projects");
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleTabChange = (event) => {
      if (event.detail === "projects" || event.detail === "certificates") {
        setActiveView(event.detail);
      }
    };

    window.addEventListener("showcase-tab-change", handleTabChange);
    return () => window.removeEventListener("showcase-tab-change", handleTabChange);
  }, []);

  const filteredProjects = useMemo(() => {
    if (tag === "All") {
      return projectsData;
    }

    return projectsData.filter((project) =>
      project.tags.some((projectTag) => projectTag.toLowerCase() === tag.toLowerCase()),
    );
  }, [tag]);

  const getProjectPreviewMeta = (project) => {
    const isGame = project.tags?.some((item) => item.toLowerCase() === "games");
    const fallbackTech = isGame ? ["Unity", "C#", "Game"] : ["Java", "JavaFX", "Desktop App"];
    const fallbackPlatform = isGame ? ["steam"] : ["gamestore"];

    return {
      techTags: project.techTags ?? fallbackTech,
      platforms: project.platforms ?? fallbackPlatform,
      platformLinks: project.platformLinks ?? {},
    };
  };

  const previewText = (description) =>
    description.includes(".") ? `${description.split(".")[0]}.` : description;

  return (
    <section id="showcase" className="showcase-shell mb-14 scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="section-heading">{activeView === "projects" ? "Projects" : "Certificates"}</h2>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveView("projects")}
            className={`pill-soft px-4 py-2 text-sm transition-colors ${
              activeView === "projects"
                ? "active"
                : "hover:border-[#cab8f5] hover:bg-[#f8f4ff]"
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveView("certificates")}
            className={`pill-soft px-4 py-2 text-sm transition-colors ${
              activeView === "certificates"
                ? "active"
                : "hover:border-[#cab8f5] hover:bg-[#f8f4ff]"
            }`}
          >
            Certificates
          </button>
        </div>
      </div>

      {activeView === "projects" && (
        <>
          <p className="section-subtitle mb-6">Selected game and software projects I built and shipped.</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {["All", "Games", "Applications"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTag(item)}
                className={`pill-soft px-4 py-2 text-sm transition-colors ${
                  tag === item
                    ? "active"
                    : "hover:border-[#cab8f5] hover:bg-[#f8f4ff]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const meta = getProjectPreviewMeta(project);
              return (
                <li key={project.id}>
                  <ProjectCard
                    title={project.title}
                    description={previewText(project.description)}
                    imgUrl={project.thumbnail}
                    techTags={meta.techTags}
                    platforms={meta.platforms}
                    platformLinks={meta.platformLinks}
                    click={() => setSelectedProject(project)}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}

      {activeView === "certificates" && (
        <>
          <p className="section-subtitle mb-6">
            Professional and academic certificates from recent programs and trainings.
          </p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificateData.map((certificate) => (
              <a
                key={certificate.name}
                className="group overflow-hidden rounded-3xl border border-[#e4dcf6] bg-white/95 shadow-[0_10px_26px_rgba(72,85,125,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(72,85,125,0.14)]"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative h-[165px] overflow-hidden border-b border-[#eee7fb] bg-[#f8fafc] sm:h-[190px]">
                  <Image
                    src={certificate.imagePath}
                    alt={certificate.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-[#2a2340]">{certificate.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default ProjectSection;
