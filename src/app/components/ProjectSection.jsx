"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import ProjectCard from "@/app/components/ProjectCard";
const ProjectModal = dynamic(() => import("@/app/components/ProjectModal"), { ssr: false });

const ProjectSection = ({ projectsData }) => {
  const [activeView, setActiveView] = useState("projects");
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [certificateData, setCertificateData] = useState(null);

  useEffect(() => {
    const handleTabChange = (event) => {
      if (event.detail === "projects" || event.detail === "certificates") {
        setActiveView(event.detail);
      }
    };

    window.addEventListener("showcase-tab-change", handleTabChange);
    return () => window.removeEventListener("showcase-tab-change", handleTabChange);
  }, []);

  useEffect(() => {
    if (activeView === "certificates" && !certificateData) {
      import("@/certificates.json").then((module) => setCertificateData(module.default));
    }
  }, [activeView, certificateData]);

  const filteredProjects = useMemo(() => {
    if (tag === "All") {
      return projectsData;
    }

    return projectsData.filter((project) =>
      project.tags.some((projectTag) => projectTag.toLowerCase() === tag.toLowerCase()),
    );
  }, [tag, projectsData]);

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

  const openProjectDetails = async (projectId) => {
    setIsProjectLoading(true);
    try {
      const projectsModule = await import("@/projects.json");
      const fullProject = projectsModule.default.find((item) => item.id === projectId);
      if (fullProject) {
        setSelectedProject(fullProject);
      }
    } finally {
      setIsProjectLoading(false);
    }
  };

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
                    click={() => openProjectDetails(project.id)}
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
            {(certificateData ?? []).map((certificate) => (
              <a
                key={certificate.name}
                className="overflow-hidden rounded-3xl border border-[#e4dcf6] bg-white/95 shadow-[0_6px_16px_rgba(72,85,125,0.08)] transition-shadow duration-200 hover:shadow-[0_10px_22px_rgba(72,85,125,0.12)]"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-[165px] overflow-hidden border-b border-[#eee7fb] bg-[#f8fafc] sm:h-[190px]">
                  <img
                    src={certificate.imagePath}
                    alt={certificate.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-[#2a2340]">{certificate.name}</h3>
                </div>
              </a>
            ))}
          </div>
          {!certificateData && <p className="text-sm text-[#6e6e73]">Loading certificates...</p>}
        </>
      )}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {isProjectLoading && !selectedProject && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/25">
          <div className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#4d4d52]">
            Loading project details...
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
