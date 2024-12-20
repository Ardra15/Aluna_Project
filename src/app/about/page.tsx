import AboutHero from "@/components/about-hero";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Team from "@/components/team";
import Welcome from "@/components/welcome";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <Welcome />
      <Team />
      <Footer />
    </main>
  );
}