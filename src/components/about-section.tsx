import { Button } from "@/components/ui/button"
import Image from "next/image"
import ABOUT_LOGO from "../assets/about-picture.png"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src={ABOUT_LOGO}
            alt="Medical professional illustration"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div>
          <p className="text-sm font-medium mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover the Faces Behind Our Mental Health Consultancy
          </h2>
          <p className="text-muted-foreground mb-8">
            We are a dedicated team of mental health professionals committed to providing
            compassionate and evidence-based care. With years of combined experience,
            our experts specialize in various therapeutic approaches to support your
            mental well-being. We believe in creating a safe, welcoming space where
            you can explore your journey towards better mental health.
          </p>
          <Button variant="destructive" className="bg-orange-500 hover:bg-orange-600">
            See detail
          </Button>
        </div>
      </div>
    </section>
  )
}

