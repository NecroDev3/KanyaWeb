"use client";

import Image from "next/image";
import Link from "next/link";

export default function AgriculturePage() {
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
            <div className="text-sm md:text-base text-gray-300">Agricultural Skills</div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
              <li>
                <Link href="/" className="hover:text-[#cf4500] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/construction" className="hover:text-[#cf4500] transition-colors duration-300">
                  Construction
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
              Agricultural Skills
              <span className="text-[#cf4500]"> Training Programs</span>
            </h1>
            <p className="text-lg text-[#323231] leading-relaxed">
              Comprehensive agricultural training programs designed to equip you with modern farming techniques, sustainable practices, and business skills for agricultural success.
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
              src="/images/farm.png" 
              alt="Agricultural training with students working in fields" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Agricultural Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Crop Production */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Crop Production</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 49052 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Soil preparation and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Seed selection and planting techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Crop nutrition and fertilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Pest and disease management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Harvesting and post-harvest handling</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Farm Supervisor, Crop Production Manager, Agricultural Technician</p>
                </div>
              </div>
            </div>

            {/* Mixed Farming - replacing Livestock Management */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Mixed Farming</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 68977 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Integrated crop and livestock systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Resource optimization and efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Diversified farming strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Risk management in farming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Farm planning and management</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Mixed Farm Manager, Agricultural Consultant, Farm Operations Coordinator</p>
                </div>
              </div>
            </div>

            {/* Sustainable Farming */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Sustainable Farming</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 116222 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Organic farming principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Water conservation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Soil health and conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Renewable energy in agriculture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Environmental impact assessment</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Sustainability Coordinator, Organic Farm Manager, Environmental Consultant</p>
                </div>
              </div>
            </div>

            {/* Agricultural Business */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Agricultural Business</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 116291 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Farm business planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Financial management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Marketing and sales strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Supply chain management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Agricultural economics</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Agricultural Business Manager, Farm Financial Advisor, Agricultural Economist</p>
                </div>
              </div>
            </div>

            {/* Animal Production - replacing Food Processing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Animal Production</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 49048 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Livestock breeding and genetics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Animal nutrition and feeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Animal health management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Production systems and housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Animal product marketing</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Livestock Production Manager, Animal Husbandry Specialist, Breeding Coordinator</p>
                </div>
              </div>
            </div>

            {/* Agricultural Technology */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Agricultural Technology</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 116275 | Duration: 6 months</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Modern farming equipment operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Precision agriculture techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Irrigation system management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Agricultural machinery maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Digital farming applications</span>
                  </li>
                </ul>
                <div className="bg-[#f8f8f8] p-3 rounded-lg">
                  <p className="text-sm text-[#323231]"><strong>Career Opportunities:</strong> Agricultural Technician, Equipment Operator, Precision Agriculture Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose Our Agricultural Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🌱</div>
              <h3 className="font-bold text-lg mb-2">Practical Training</h3>
              <p className="text-[#323231]">Hands-on experience in real farming environments</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Certified Programs</h3>
              <p className="text-[#323231]">AGRISETA accredited qualifications</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">👥</div>
              <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-[#323231]">Learn from experienced agricultural professionals</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">Job Placement</h3>
              <p className="text-[#323231]">Support in finding employment or starting your own farm</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Apply for Agricultural Training</h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Get Started Today</h3>
              <p className="text-[#323231] mb-6 leading-relaxed">
                Ready to transform your future with agricultural skills? Contact us to learn more about our programs and application process.
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
                  <option value="crop-production">Crop Production</option>
                  <option value="livestock">Livestock Management</option>
                  <option value="sustainable">Sustainable Farming</option>
                  <option value="business">Agricultural Business</option>
                  <option value="processing">Food Processing</option>
                  <option value="technology">Agricultural Technology</option>
                </select>
                <textarea 
                  placeholder="Tell us about your agricultural interests and goals" 
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