"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConstructionPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="w-full bg-black text-white p-4 md:p-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Link href="/" className="font-bold text-2xl md:text-3xl hover:text-[#cf4500] transition-colors">
              KanyaCSI
            </Link>
            <div className="text-sm md:text-base text-gray-300">Construction Skills</div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-[#cf4500] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/agriculture" className="hover:text-[#cf4500] transition-colors duration-300">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/digital-literacy" className="hover:text-[#cf4500] transition-colors duration-300">
                  Digital Literacy
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-[#cf4500] transition-colors duration-300 focus:outline-none focus:text-[#cf4500]"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col gap-8 py-6 px-4 md:px-8">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <Link href="/" className="flex items-center gap-2 text-[#cf4500] hover:text-[#b03a00] transition-colors">
                <span className="text-xl">←</span>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Construction Skills
              <span className="text-[#cf4500]"> Training Programs</span>
            </h1>
            <p className="text-lg text-[#323231] leading-relaxed">
              Professional construction training programs that prepare you for a successful career in the building industry with hands-on experience and industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => scrollToSection('programs')}
                className="px-6 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Programs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-[#323231] text-[#323231] rounded-lg hover:bg-[#323231] hover:text-white transition-all duration-300 font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/construction.png" 
              alt="Construction training with students learning building skills" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Construction Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Building Construction */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Building Construction</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Foundation and concrete work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Bricklaying and masonry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Roofing and structural work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Building regulations and codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Project planning and management</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 12 months | NQF Level 3
                </div>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Plumbing</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Pipe installation and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Water supply systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Drainage and sewerage systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Bathroom and kitchen installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Emergency repairs and maintenance</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 8 months | NQF Level 2
                </div>
              </div>
            </div>

            {/* Electrical Installation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Electrical Installation</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Electrical wiring and circuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Safety protocols and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Lighting and power systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Motor control and automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Troubleshooting and maintenance</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 10 months | NQF Level 3
                </div>
              </div>
            </div>

            {/* Carpentry & Joinery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Carpentry & Joinery</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Wood working techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Furniture making and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Door and window installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Cabinet making and fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Tool usage and maintenance</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 9 months | NQF Level 2
                </div>
              </div>
            </div>

            {/* Painting & Decorating */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Painting & Decorating</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Surface preparation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Paint application methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Color theory and mixing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Wallpaper hanging and removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Decorative finishes and effects</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 6 months | NQF Level 2
                </div>
              </div>
            </div>

            {/* Construction Safety */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Construction Safety</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Health and safety regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Risk assessment and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Personal protective equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Emergency procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Site safety management</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 3 months | NQF Level 2
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose Our Construction Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🔨</div>
              <h3 className="font-bold text-lg mb-2">Hands-On Training</h3>
              <p className="text-[#323231]">Real construction site experience with industry tools</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🏗️</div>
              <h3 className="font-bold text-lg mb-2">Industry Standards</h3>
              <p className="text-[#323231]">Training aligned with construction industry requirements</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Safety First</h3>
              <p className="text-[#323231]">Comprehensive safety training and certification</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">Job Opportunities</h3>
              <p className="text-[#323231]">High demand for skilled construction workers</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Apply for Construction Training</h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Build Your Future</h3>
              <p className="text-[#323231] mb-6 leading-relaxed">
                Start your career in construction with our comprehensive training programs. Learn from industry experts and gain the skills employers are looking for.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#cf4500] font-bold">📧</span>
                  <span className="text-[#323231]">michmcm@iafrica.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#323231]">Quick Application</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#cf4500]"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#cf4500]"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#cf4500]"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#cf4500]">
                  <option value="">Select Program</option>
                  <option value="building-construction">Building Construction</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical Installation</option>
                  <option value="carpentry">Carpentry & Joinery</option>
                  <option value="painting">Painting & Decorating</option>
                  <option value="safety">Construction Safety</option>
                </select>
                <textarea 
                  placeholder="Tell us about your construction interests and experience" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#cf4500]"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#323231] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold text-[#cf4500] hover:text-white transition-colors">
              KanyaCSI
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} KanyaCSI - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 