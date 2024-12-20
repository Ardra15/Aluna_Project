export default function AboutHero() {
    return (
      <div className="relative min-h-[400px] bg-gradient-to-r from-emerald-500 to-emerald-700 overflow-hidden">
        {/* Decorative background curves */}
        <div className="absolute inset-0">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 text-white/10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
          >
            <path d="M0 100C30 50 70 0 100 100" />
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="flex">
            {/* Vertical Line */}
            <div className="hidden md:block w-px bg-white mr-8 mt-4" style={{ height: '120px' }} />
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-lg text-white/90">
                Welcome to Aluna, where we blend technology with compassion to support your mental well-being journey. Our platform offers personalized tools and guidance to help you navigate life's challenges and cultivate emotional resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  