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
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Construction Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plaster */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Plaster</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 261657 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Surface preparation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Mixing and applying plaster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Interior and exterior plastering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Repair and maintenance techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Quality control and finishing</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 3
                </div>
              </div>
            </div>

            {/* Painter - Decoration */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Painter - Decoration</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 261666 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Surface preparation for painting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Paint application techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Color theory and mixing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Decorative finishes and effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Equipment maintenance and safety</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 3
                </div>
              </div>
            </div>

            {/* Bricklayer */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Bricklayer</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 261659 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Brick and block laying techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Foundation and wall construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Mortar mixing and application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Building alignment and leveling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Construction safety practices</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 3
                </div>
              </div>
            </div>

            {/* Tiling and Glazing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Tiling and Glazing</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 261665 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Surface preparation for tiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Tile cutting and installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Grouting and sealing techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Window and door glazing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Quality finishing and maintenance</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 3
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
                  <option value="plaster">Plaster</option>
                  <option value="painter-decoration">Painter - Decoration</option>
                  <option value="bricklayer">Bricklayer</option>
                  <option value="tiling-glazing">Tiling and Glazing</option>
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