import { Heart, Users2, Building2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function WhySection() {
  return (
    <section className="flex flex-col py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto h-full justify-center items-center">
      <div className="text-center mb-12">
        <p className="text-sm font-medium mb-2">Why?</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Our Mental Health Consultants are the Best Choice
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Holistic approach</h3>
            <p className="text-muted-foreground">
              We believe in treating the whole person, not just symptoms. Our comprehensive approach combines traditional therapy with modern techniques for lasting well-being.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <Users2 className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-emerald-50">
              Our team consists of licensed professionals with years of experience in various mental health fields, ensuring you receive the highest quality care and support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <Building2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              Access professional mental health support anytime, anywhere. Our digital platform makes it easy to connect with therapists and resources when you need them most.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

