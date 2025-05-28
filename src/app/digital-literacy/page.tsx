"use client";

import Image from "next/image";
import Link from "next/link";

export default function DigitalLiteracyPage() {
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
            <div className="text-sm md:text-base text-gray-300">Digital Literacy</div>
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
                <Link href="/construction" className="hover:text-[#cf4500] transition-colors duration-300">
                  Construction
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
              Digital Literacy
              <span className="text-[#cf4500]"> Training Programs</span>
            </h1>
            <p className="text-lg text-[#323231] leading-relaxed">
              Comprehensive digital skills training programs designed to prepare you for the modern workplace with essential computer skills, digital tools, and technology proficiency.
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
              src="/images/computer2.png" 
              alt="Computer skills training in a modern classroom" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Digital Literacy Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Basic Computer Skills */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Basic Computer Skills</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Computer fundamentals and hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Operating system navigation (Windows/Mac)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>File management and organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Keyboard and mouse proficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Basic troubleshooting skills</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 4 weeks | NQF Level 1
                </div>
              </div>
            </div>

            {/* Microsoft Office Suite */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Microsoft Office Suite</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Microsoft Word (documents & formatting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Microsoft Excel (spreadsheets & formulas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Microsoft PowerPoint (presentations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Microsoft Outlook (email & calendar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Integration between Office applications</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 8 weeks | NQF Level 2
                </div>
              </div>
            </div>

            {/* Internet & Email */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Internet & Email</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Web browsing and search techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Email setup and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Online safety and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Social media basics and etiquette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Online banking and e-commerce</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 6 weeks | NQF Level 2
                </div>
              </div>
            </div>

            {/* Digital Communication */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Digital Communication</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Video conferencing (Zoom, Teams, Skype)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Instant messaging and chat platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>File sharing and cloud storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Collaborative document editing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Professional online presence</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 4 weeks | NQF Level 2
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Data Management</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Database fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Data entry and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Spreadsheet advanced functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Data analysis and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Data backup and security</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 6 weeks | NQF Level 3
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Digital Marketing</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Social media marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Content creation and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Basic website management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Online advertising basics</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  Duration: 8 weeks | NQF Level 3
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Industry Certifications Available</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">MICTSETA Certified</h3>
              <p className="text-[#323231]">IT: End User Computing NQF Level 3</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">Microsoft Office Specialist</h3>
              <p className="text-[#323231]">Industry-recognized Office Suite certification</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">🌐</div>
              <h3 className="font-bold text-lg mb-2">Digital Literacy Certificate</h3>
              <p className="text-[#323231]">Comprehensive digital skills certification</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose Our Digital Literacy Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
              <p className="text-[#323231]">Learn on up-to-date computers and software</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">👨‍🏫</div>
              <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-[#323231]">Certified IT professionals with teaching experience</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Career Advancement</h3>
              <p className="text-[#323231]">Essential skills for modern workplace success</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Flexible Learning</h3>
              <p className="text-[#323231]">Part-time and full-time options available</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Apply for Digital Literacy Training</h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Start Your Digital Journey</h3>
              <p className="text-[#323231] mb-6 leading-relaxed">
                Ready to develop essential digital skills for the modern workplace? Our comprehensive programs will prepare you for success in today's technology-driven world.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#cf4500] font-bold">📧</span>
                  <span className="text-[#323231]">michmcm@iafrica.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#cf4500]">
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
                  <option value="basic-computer">Basic Computer Skills</option>
                  <option value="office-suite">Microsoft Office Suite</option>
                  <option value="internet-email">Internet & Email</option>
                  <option value="digital-communication">Digital Communication</option>
                  <option value="data-management">Data Management</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
                <div className="space-y-2">
                  <label className="text-sm text-[#323231] font-medium">Current Computer Experience Level:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="beginner" className="text-[#cf4500]" />
                      <span className="text-sm">Beginner</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="intermediate" className="text-[#cf4500]" />
                      <span className="text-sm">Intermediate</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="experience" value="advanced" className="text-[#cf4500]" />
                      <span className="text-sm">Advanced</span>
                    </label>
                  </div>
                </div>
                <textarea 
                  placeholder="Tell us about your digital learning goals and any specific software you'd like to learn" 
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