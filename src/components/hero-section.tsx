import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroLogo from "../assets/logo-hero.png"

export function HeroSection() {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-center justify-between py-12 px-36 md:py-24 gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Healthy Minds, Happy Lives{" "}
          <span className="text-[#EC744A]">Mental Health Consultancy</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
        Your journey to better mental health starts here. We provide personalized support, expert guidance, and innovative tools to help you navigate life's challenges and build emotional resilience.
        </p>
        <Button className="bg-[#EC744A] hover:bg-black text-white px-8 py-6 text-lg">
          Get started
        </Button>
        {/* <div className="flex items-center gap-8 pt-8">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src="/placeholder.svg"
              alt={`Partner logo ${i}`}
              width={100}
              height={40}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div> */}
      </div>
      <div className="flex-1 relative">
        <Image
          src= {HeroLogo}
          alt="Mental health illustration"
          width={600}
          height={600}
          className="w-full"
          priority
        />
      </div>
    </div>
  )
}

