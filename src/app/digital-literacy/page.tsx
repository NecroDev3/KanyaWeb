"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function DigitalLiteracyPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <SiteHeader
        tagline="Digital Literacy"
        items={[
          { label: "Home", href: "/" },
          { label: "Agriculture", href: "/agriculture" },
          { label: "Construction", href: "/construction" },
          { label: "Contact", onClick: () => scrollToSection("contact") },
        ]}
      />

      {/* Main content */}
      <main className="flex flex-col gap-10 py-6 px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex min-h-11 items-center gap-2 text-[#cf4500] hover:text-[#b03a00] transition-colors">
                <span className="text-xl">←</span>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
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
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Information Technology Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Information Technology: End User Computing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Information Technology: End User Computing</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 61591 | Duration: 6 months | Level 3</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Microsoft Office Suite mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Computer hardware and software fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Internet and email communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>File management and data organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Digital workplace productivity tools</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 3
                </div>
              </div>
            </div>

            {/* Information Technology: Systems Development */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Information Technology: Systems Development</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 78965 | Duration: 6 months | Level 4</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Programming fundamentals and logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Database design and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Web development technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Software testing and debugging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>System analysis and design</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 4
                </div>
              </div>
            </div>

            {/* Information Technology: Technical Support */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Information Technology: Technical Support</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">SAQA ID: 78964 | Duration: 6 months | Level 4</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Hardware troubleshooting and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Network installation and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Operating system configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Help desk and customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Security implementation and monitoring</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  NQF Level 4
                </div>
              </div>
            </div>

            {/* Computer Technician */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                <Image src="/images/qcto.png" alt="QCTO logo" width={110} height={40} className="h-10 w-auto object-contain" />
                <Image src="/images/mictseta.png" alt="MICT SETA logo" width={40} height={40} className="h-10 w-10 object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#cf4500] font-semibold mb-2">Qualification / Programme Title</p>
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Occupational Certificate: Computer Technician</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">Accredited with QCTO | SAQA ID: 101408 | NQF Level 5</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>282 credits of occupational training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Install, maintain and repair computer hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Software, network and ICT support skills</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  QCTO &amp; MICT SETA
                </div>
              </div>
            </div>

            {/* Software Developer */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                <Image src="/images/qcto.png" alt="QCTO logo" width={110} height={40} className="h-10 w-auto object-contain" />
                <Image src="/images/mictseta.png" alt="MICT SETA logo" width={40} height={40} className="h-10 w-10 object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#cf4500] font-semibold mb-2">Qualification / Programme Title</p>
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Occupational Certificate: Software Developer</h3>
                <p className="text-sm text-[#cf4500] font-semibold mb-3">Accredited with QCTO | SAQA ID: 118707 | NQF Level 5</p>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>220 credits of occupational training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Design, build and maintain software applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Web, application and programming practices</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">
                  QCTO &amp; MICT SETA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Industry Certifications Available</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">MICTSETA Certified</h3>
              <p className="text-[#323231]">IT: End User Computing NQF Level 3</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">Systems Development</h3>
              <p className="text-[#323231]">Advanced programming and development skills</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <div className="text-4xl text-[#cf4500] mb-4">🔧</div>
              <h3 className="font-bold text-lg mb-2">Technical Support</h3>
              <p className="text-[#323231]">Professional IT support and troubleshooting</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Choose Our IT Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
              <p className="text-[#323231]">Learn on up-to-date computers and software</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">👨‍🏫</div>
              <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-[#323231]">Certified IT professionals with industry experience</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Career Advancement</h3>
              <p className="text-[#323231]">High-demand IT skills for career growth</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#cf4500] mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Industry Recognition</h3>
              <p className="text-[#323231]">SAQA registered qualifications</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Apply for IT Training</h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Start Your IT Career</h3>
              <p className="text-[#323231] mb-6 leading-relaxed">
                Ready to develop professional IT skills for the modern workplace? Our comprehensive programs will prepare you for success in the technology industry.
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
                  <option value="end-user-computing">Information Technology: End User Computing</option>
                  <option value="systems-development">Information Technology: Systems Development</option>
                  <option value="technical-support">Information Technology: Technical Support</option>
                </select>
                <div className="space-y-2">
                  <label className="text-sm text-[#323231] font-medium">Current IT Experience Level:</label>
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
                  placeholder="Tell us about your IT career goals and any specific technologies you'd like to learn" 
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

      <SiteFooter />
    </div>
  );
} 