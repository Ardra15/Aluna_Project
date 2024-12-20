import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Ardra from "@/assets/Ardra.png";
import Panji from "@/assets/panji.jpg";
import Yusril from "@/assets/yusril.jpg";
const teamMembers = [
  {
    name: 'Ardra',
    role: 'Founder of Aluna',
    image: Ardra
  },
  {
    name: 'Satria',
    role: 'Co founder',
    image: Panji
  },
  {
    name: 'Mahen',
    role: 'Co founder',
    image: Yusril
  }
]

export default function Team() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-sm font-medium mb-4">Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Caring for Your Mental Health Get to Know Our Team of Experts
          </h3>
          <p className="text-gray-600">
            Our dedicated team of mental health professionals brings together expertise, 
            compassion, and a commitment to your wellbeing. With diverse backgrounds in 
            psychology and counseling, we're here to support you on your journey to 
            better mental health.
          </p>
          <Button 
            className="mt-8 bg-[#E97451] hover:bg-[#C45D3E] text-white"
          >
            See more
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-[#2F4F4F] text-white px-4 py-2 rounded-full">
                {member.name} - {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}