import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/assets/logoputih.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <Image src={Logo} alt="Aluna Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold">Aluna</span>
            </div>
            <p className="text-emerald-50">
              Your trusted partner in mental health and well-being. We're here to support your journey to a healthier mind.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-emerald-50 hover:text-white">
                  Chatbot
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-50 hover:text-white">
                  Mental Counseling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-50 hover:text-white">
                  Journaling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-50 hover:text-white">
                  Good for You
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-emerald-50">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-emerald-50">aluna@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-emerald-50">Jl. Bambang Yosowiyuto, Surabaya</span>
              </li>
            </ul>
          </div>

          {/* Maps Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.748367506922!2d107.76445673868045!3d-6.927955196375099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4a6175d148b%3A0xcf3db690ca7ca9dd!2sITB%20GEO%20Jatinangor!5e0!3m2!1sen!2sid!4v1734692385692!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-emerald-400/30 text-center">
          {/* <div className="flex justify-center gap-4 mb-4">
            {['Instagram', 'Facebook', 'YouTube', 'Twitter', 'LinkedIn'].map((social) => (
              <Link
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4" />
              </Link>
            ))}
          </div> */}
          <p className="text-emerald-50 text-sm">
            copyright 2023 @Aluna all right reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

