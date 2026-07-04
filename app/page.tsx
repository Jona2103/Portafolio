import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      <Hero />

      <div className="flex flex-col gap-24 pb-12">
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
