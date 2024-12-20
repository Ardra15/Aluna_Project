import AboutSection from "@/components/about-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import MentorSection from "@/components/mentor-section";
import ServicesSection from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import WhySection from "@/components/why-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <WhySection />
      <AboutSection />
      <ServicesSection />
      <MentorSection />
      <FaqSection />
      <Footer />
    </main>
  </div>
  );
}
