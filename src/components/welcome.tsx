import Image from "next/image";
import Ardra from "@/assets/Ardra.png";

export default function Welcome() {
  return (
  <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src={Ardra}
            alt="Founder"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-medium">Welcome Message</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Start Your Mental Health Journey Here A Warm Welcome to Our Consultancy
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Aluna, your dedicated partner in fostering mental well-being and mindfulness. At Aluna, we
            understand the importance of mental health and are committed to providing a holistic approach to support you
            on your journey. Our platform offers an easy-to-use scheduling service, allowing you to book sessions with
            experienced psychologists who can guide you through any challenges.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our AI-powered chatbot serves as a compassionate counselor, always ready to provide support and advice
            whenever you need it. To further enrich your experience, we offer a journaling feature that encourages self-reflection,
            helping you track your emotional growth and personal progress. At Aluna, we aim to create a space
            where you can feel heard, understood, and empowered to live a more balanced and mindful life.
          </p>
          <p className="font-medium">Ardra Rafif S - Founder of Aluna</p>
        </div>
      </div>
    </section>
  );
}
