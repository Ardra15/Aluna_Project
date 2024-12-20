import { GraduationCap, Coffee } from 'lucide-react'

export default function MentorSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium mb-2">Mentor</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Introducing Experienced Consulting
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-white/10 rounded-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Growth</h3>
              <p className="text-emerald-50">
                Work with experienced mentors who guide you through personal development and emotional well-being. Our experts provide tailored strategies for your mental health journey.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-white/10 rounded-lg">
              <Coffee className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Reduced Burnout</h3>
              <p className="text-emerald-50">
                Learn effective stress management techniques and work-life balance strategies. Our mentors help you develop sustainable practices for long-term mental wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

