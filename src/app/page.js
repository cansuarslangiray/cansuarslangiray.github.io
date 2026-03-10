import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import projectsData from "@/projectsPreview.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <div className="container mx-auto px-5 pt-28 pb-10 md:px-10">
        <AboutSection />
        <ProjectSection projectsData={projectsData} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
