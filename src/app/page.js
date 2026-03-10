import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import projectsData from "@/projects.json";
import certificateData from "@/certificates.json";

config.autoAddCss = false;

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <div className="container mx-auto px-5 pt-28 pb-10 md:px-10">
        <AboutSection />
        <ProjectSection projectsData={projectsData} certificateData={certificateData} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
