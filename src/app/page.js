import Image from "next/image";
import {white} from "next/dist/lib/picocolors";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#f8fafc] ">
            <Navbar/>
            <div className={" container mt-24 mx-auto px-12 py-4"}>
                <HeroSection/>
                <AboutSection/>
                <AchievementsSection/>
                <ProjectSection/>
                <EmailSection/>
            </div>
            {/*<Footer/>*/}
        </main>
    );
}
