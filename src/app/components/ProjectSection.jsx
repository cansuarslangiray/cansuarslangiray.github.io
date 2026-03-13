"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectModal from "@/app/components/ProjectModal";

const labelsByLanguage = {
  en: {
    projects: "Projects",
    certificates: "Certificates",
    all: "All",
    games: "Games",
    applications: "Applications",
    certificatesSubtitle: "Professional and academic certificates from recent programs and trainings.",
    loadingCertificates: "Loading certificates...",
    details: "Details",
    additionalInformation: "Additional Information",
    detailsSoon: "Details will be available soon.",
    moreInfo: "More info",
  },
  tr: {
    projects: "Projeler",
    certificates: "Sertifikalar",
    all: "Tümü",
    games: "Oyunlar",
    applications: "Uygulamalar",
    certificatesSubtitle: "Son dönem program ve eğitimlerden profesyonel ve akademik sertifikalar.",
    loadingCertificates: "Sertifikalar yükleniyor...",
    details: "Detaylar",
    additionalInformation: "Ek Bilgiler",
    detailsSoon: "Detaylar yakında eklenecek.",
    moreInfo: "Daha Fazla Bilgi",
  },
};

const ProjectSection = ({ language = "en", projectsData, fullProjectsData = [], certificateData = [] }) => {
  const labels = labelsByLanguage[language] ?? labelsByLanguage.en;
  const [activeView, setActiveView] = useState("projects");
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [certificates, setCertificates] = useState(certificateData);
  const [isCertificatesLoading, setIsCertificatesLoading] = useState(false);

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
    if (activeView !== "certificates" || certificates.length > 0 || isCertificatesLoading) {
      return;
    }

    const loadCertificates = async () => {
      setIsCertificatesLoading(true);
      try {
        const response = await fetch("/data/certificates.json", { cache: "force-cache" });
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setCertificates(data);
          }
        }
      } finally {
        setIsCertificatesLoading(false);
      }
    };

    loadCertificates();
  }, [activeView, certificates.length, isCertificatesLoading]);

  const projectMap = useMemo(
    () => new Map(projectsData.map((project) => [project.id, project])),
    [projectsData],
  );
  const fullProjectMap = useMemo(
    () => new Map(fullProjectsData.map((project) => [project.id, project])),
    [fullProjectsData],
  );

  const normalizeProjectForModal = useCallback((project) => ({
    ...project,
    headerOne: project.headerOne ?? labels.details,
    headerTwo: project.headerTwo ?? labels.additionalInformation,
    textOne: project.textOne ?? project.description ?? "",
    textTwo: project.textTwo ?? labels.detailsSoon,
    textThree: project.textThree ?? labels.detailsSoon,
    imageOne: project.imageOne ?? project.thumbnail,
    imageTwo: project.imageTwo ?? project.thumbnail,
    imageThree: project.imageThree ?? project.thumbnail,
  }), [labels.additionalInformation, labels.details, labels.detailsSoon]);

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
    const fallbackPlatform = isGame ? ["steam"] : [];

    return {
      techTags: project.techTags ?? fallbackTech,
      platforms: project.platforms ?? fallbackPlatform,
      platformLinks: project.platformLinks ?? {},
    };
  };

  const previewText = (description) =>
    description.includes(".") ? `${description.split(".")[0]}.` : description;

  const localizeTechTag = (tagName) => {
    if (language !== "tr") {
      return tagName;
    }

    const normalized = tagName.toLowerCase();
    if (normalized === "game") return "Oyun";
    if (normalized === "mobile game") return "Mobil Oyun";
    if (normalized === "desktop app") return "Masaüstü Uygulama";
    if (normalized === "company project") return "Şirket Projesi";
    if (normalized === "multiplayer") return "Çok Oyunculu";
    return tagName;
  };

  const openProjectDetails = (projectId) => {
    const fullProject = fullProjectMap.get(projectId) ?? projectMap.get(projectId);
    if (fullProject) {
      setSelectedProject(normalizeProjectForModal(fullProject));
    }
  };

  return (
    <section id="showcase" className="showcase-shell mb-14 scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="section-heading">{activeView === "projects" ? labels.projects : labels.certificates}</h2>

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
            {labels.projects}
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
            {labels.certificates}
          </button>
        </div>
      </div>

      {activeView === "projects" && (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { value: "All", label: labels.all },
              { value: "Games", label: labels.games },
              { value: "Applications", label: labels.applications },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTag(item.value)}
                className={`pill-soft px-4 py-2 text-sm transition-colors ${
                  tag === item.value
                    ? "active"
                    : "hover:border-[#cab8f5] hover:bg-[#f8f4ff]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <ul className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const meta = getProjectPreviewMeta(project);
              return (
                <li key={project.id}>
                  <ProjectCard
                    title={project.title}
                    description={previewText(project.description)}
                    imgUrl={project.thumbnail}
                    techTags={meta.techTags.map(localizeTechTag)}
                    platforms={meta.platforms}
                    platformLinks={meta.platformLinks}
                    moreInfoLabel={labels.moreInfo}
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
            {labels.certificatesSubtitle}
          </p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate) => (
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
          {isCertificatesLoading && <p className="text-sm text-[#6e6e73]">{labels.loadingCertificates}</p>}
        </>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectSection;
