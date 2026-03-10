import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EuProgramsSection from "@/components/EuProgramsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ImpactSection from "@/components/ImpactSection";
import NewsSection from "@/components/NewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EuProgramsSection />
        <ProjectsSection />
        <ImpactSection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
