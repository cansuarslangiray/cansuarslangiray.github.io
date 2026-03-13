 "use client";

import { useMemo, useState } from "react";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import projectsData from "@/projects.json";
import fullProjectsData from "@/projects.json";
import projectTranslations from "@/app/i18n/projectTranslations";

const applyProjectTranslations = (projects, language) => {
  if (language !== "tr") {
    return projects;
  }

  return projects.map((project) => {
    const translation = projectTranslations[project.id];
    return translation ? { ...project, ...translation } : project;
  });
};

export default function Home() {
  const [language, setLanguage] = useState("en");
  const localizedProjects = useMemo(
    () => applyProjectTranslations(projectsData, language),
    [language],
  );
  const localizedFullProjects = useMemo(
    () => applyProjectTranslations(fullProjectsData, language),
    [language],
  );

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <div className="container mx-auto px-5 pt-28 pb-10 md:px-10">
        <AboutSection language={language} />
        <ProjectSection
          language={language}
          projectsData={localizedProjects}
          fullProjectsData={localizedFullProjects}
        />
        <EmailSection language={language} />
      </div>
      <Footer language={language} />
    </main>
  );
}
