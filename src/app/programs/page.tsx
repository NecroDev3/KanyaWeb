"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ProgramsPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <SiteHeader
        tagline="All Programs"
        items={[
          { label: "Home", href: "/" },
          { label: "Current Programs", onClick: () => scrollToSection("current-programs") },
          { label: "Past Programs", onClick: () => scrollToSection("past-programs") },
          { label: "Accreditations", onClick: () => scrollToSection("accreditations") },
        ]}
      />

      {/* Main content */}
      <main className="flex flex-col gap-10 py-6 px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="flex items-center gap-2 text-[#cf4500] hover:text-[#b03a00] transition-colors">
              <span className="text-xl">←</span>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              All Training
              <span className="text-[#cf4500]"> Programs</span>
            </h1>
            <p className="text-lg text-[#323231] leading-relaxed max-w-4xl mx-auto">
              Explore our comprehensive range of training programs, from current offerings to our successful past implementations. 
              KanyaCSI has been delivering quality skills development since 2010, with accreditations from multiple SETAs.
            </p>
          </div>
        </section>

        {/* Current Programs Section */}
        <section id="current-programs" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Current Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Agricultural Skills */}
            <Link href="/agriculture" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/farm.png" 
                  alt="Agricultural training" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Agricultural Skills</h3>
                <p className="text-[#323231] mb-4">Mixed Farming, Animal Production, Poultry, and Sustainable Farming practices.</p>
                <div className="text-sm text-[#cf4500] font-medium">AGRISETA Accredited</div>
              </div>
            </Link>

            {/* Construction */}
            <Link href="/construction" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/construction.png" 
                  alt="Construction training" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Construction Skills</h3>
                <p className="text-[#323231] mb-4">Building, Plumbing, Electrical, Carpentry, Painting, and Safety training.</p>
                <div className="text-sm text-[#cf4500] font-medium">Industry Certified</div>
              </div>
            </Link>

            {/* Digital Literacy */}
            <Link href="/digital-literacy" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/computer2.png" 
                  alt="Digital literacy training" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Digital Literacy</h3>
                <p className="text-[#323231] mb-4">IT End User Computing, Technical Support, and Microsoft Office training.</p>
                <div className="text-sm text-[#cf4500] font-medium">MICTSETA Accredited</div>
              </div>
            </Link>

            {/* Business Administration */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Business Administration</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Business Administration Services NQF L4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Contact Centre Support NQF L2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Generic Management NQF L4</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">Services SETA Accredited</div>
              </div>
            </div>

            {/* New Venture Creation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">New Venture Creation</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>New Venture Creation NQF L2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>New Venture Creation NQF L4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>SMME Entrepreneurship Training</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">MICTSETA & Services SETA</div>
              </div>
            </div>

            {/* Life Skills Coaching */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500]">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-[#323231]">Life Skills Coaching</h3>
                <ul className="text-[#323231] mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Accredited Life Skills Coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Communication & Conflict Resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">✓</span>
                    <span>Leadership & Supervisory Skills</span>
                  </li>
                </ul>
                <div className="text-sm text-[#cf4500] font-medium">SABPP & COMENSA Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Programs & Achievements */}
        <section id="past-programs" className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Recent Training Programs Completed</h2>
          
          <div className="space-y-8">
            {/* 2024 Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <h3 className="text-2xl font-bold text-[#cf4500] mb-4">2024 Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">MICTSETA Funded Programs</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>New Venture Creation Level 4 - 25 Learners (3 months + 30 months practical)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Further Education Technical Support Level 4 - 45 Learners (March - October)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Intern Programme - 15 Graduates (12-month workplace experience)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Upcoming 2025-2026</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Learnership Technical Support Level 4 - Unemployed Youth (Gugulethu Training Centre)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2022-2023 Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <h3 className="text-2xl font-bold text-[#cf4500] mb-4">2022-2023 Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">BAWUSA Skills Programs</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Occupational Health and Safety and Fire Fighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Painter Training (Non-accredited)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">MICTSETA Programs</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>New Venture Creation Level 4 - 35 learners (6 months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Further Education Technical Support Level 4 - 25 Youth (May-October 2023)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2020-2021 Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <h3 className="text-2xl font-bold text-[#cf4500] mb-4">2020-2021 Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">CWP AIDS Foundation</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>COVID-19 Workplace Preparedness Training - 15 Learners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>COVID-19 Workplace Compliance Officer - 40 Learners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Health and Safety in the Workplace</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">BUWUSA Programs</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Farm Labourers and Dop System Training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Gender-Based Violence Awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Labour Relations Short Learning Programme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2019-2020 Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#cf4500]">
              <h3 className="text-2xl font-bold text-[#cf4500] mb-4">2019-2020 Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">CWP AIDS Foundation</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Health and Safety Training - Beaufort West</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Basic Computer Skills Training - Knysna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Plumbing Training - Swellendam & Beaufort West</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">CPUT & Other Programs</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>Online Life Skills Coaching (Academy of Life Coaching & SABPP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">•</span>
                      <span>CPUT Staff Development Program - Team Effectiveness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section id="accreditations" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-3 px-4 text-center">Our Accreditations</h2>
          <p className="text-center text-[#323231] mb-10 px-4 max-w-3xl mx-auto">
            Accredited with QCTO occupational qualifications and skills programmes, supported by our SETA accreditations.
          </p>

          <h3 className="text-2xl font-bold text-black mb-6 px-4 text-center">QCTO Qualifications &amp; Skills Programmes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
            {/* First Aid */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-4 py-4 flex flex-wrap items-center justify-center gap-4">
                <Image src="/images/qcto.png" alt="QCTO logo" width={140} height={56} className="h-14 w-auto object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#cf4500] font-semibold mb-2">Qualification / Programme Title</p>
                <h4 className="text-lg font-bold text-[#323231] mb-4 leading-snug">
                  Occupational Skill Programme: Intermediate Emergency First Aid
                </h4>
                <div className="bg-[#f8f8f8] rounded-lg p-4 space-y-2 text-sm text-[#323231]">
                  <p><span className="font-semibold">Accredited with:</span> QCTO</p>
                  <p><span className="font-semibold">NQF Level:</span> 03</p>
                  <p><span className="font-semibold">Programme ID:</span> SP-230802</p>
                  <p><span className="font-semibold">Credits:</span> 5</p>
                  <p><span className="font-semibold">Details:</span> Intermediate emergency first aid responder skills for workplace and community incidents.</p>
                </div>
              </div>
            </div>

            {/* Computer Technician */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-4 py-4 flex flex-wrap items-center justify-center gap-4">
                <Image src="/images/qcto.png" alt="QCTO logo" width={140} height={56} className="h-14 w-auto object-contain" />
                <Image src="/images/mictseta.png" alt="MICT SETA logo" width={56} height={56} className="h-14 w-14 object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#cf4500] font-semibold mb-2">Qualification / Programme Title</p>
                <h4 className="text-lg font-bold text-[#323231] mb-4 leading-snug">
                  Occupational Certificate: Computer Technician
                </h4>
                <div className="bg-[#f8f8f8] rounded-lg p-4 space-y-2 text-sm text-[#323231]">
                  <p><span className="font-semibold">Accredited with:</span> QCTO (MICT SETA)</p>
                  <p><span className="font-semibold">NQF Level:</span> 5</p>
                  <p><span className="font-semibold">SAQA ID:</span> 101408</p>
                  <p><span className="font-semibold">Credits:</span> 282</p>
                  <p><span className="font-semibold">Details:</span> Install, maintain and repair computer hardware, software and networks for ICT support roles.</p>
                </div>
              </div>
            </div>

            {/* Software Developer */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-4 py-4 flex flex-wrap items-center justify-center gap-4">
                <Image src="/images/qcto.png" alt="QCTO logo" width={140} height={56} className="h-14 w-auto object-contain" />
                <Image src="/images/mictseta.png" alt="MICT SETA logo" width={56} height={56} className="h-14 w-14 object-contain" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#cf4500] font-semibold mb-2">Qualification / Programme Title</p>
                <h4 className="text-lg font-bold text-[#323231] mb-4 leading-snug">
                  Occupational Certificate: Software Developer
                </h4>
                <div className="bg-[#f8f8f8] rounded-lg p-4 space-y-2 text-sm text-[#323231]">
                  <p><span className="font-semibold">Accredited with:</span> QCTO (MICT SETA)</p>
                  <p><span className="font-semibold">NQF Level:</span> 5</p>
                  <p><span className="font-semibold">SAQA ID:</span> 118707</p>
                  <p><span className="font-semibold">Credits:</span> 220</p>
                  <p><span className="font-semibold">Details:</span> Design, build and maintain software applications using industry development practices.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-black mb-6 px-4 text-center">SETA Accreditations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* MICTSETA */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-6 py-4 flex items-center justify-center">
                <Image src="/images/mictseta.png" alt="MICT SETA logo" width={80} height={80} className="h-20 w-20 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#cf4500] mb-2">MICT SETA</h3>
                <p className="text-sm text-[#323231] mb-3">Accreditation: ACC/2018/01/0005</p>
                <ul className="space-y-2 text-[#323231] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>National Certificate: IT End User Level 3 (ID: 49077)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>FET Certificate: IT Technical Support Level 4 (ID: 78964)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Occupational Certificate: Computer Technician NQF Level 5 (SAQA ID: 101408)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Occupational Certificate: Software Developer NQF Level 5 (SAQA ID: 118707)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services SETA */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-6 py-4 flex items-center justify-center">
                <Image src="/images/servicesseta.png" alt="Services SETA logo" width={120} height={80} className="h-20 w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#cf4500] mb-2">Services SETA</h3>
                <p className="text-sm text-[#323231] mb-3">Accreditation: 13473</p>
                <ul className="space-y-2 text-[#323231] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>New Venture SMME Creation Level 2 (ID: 49648)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>New Venture Creation Level 4 (ID: 66249)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Business Administration Services Level 4 (ID: 61595)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AGRISETA */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#cf4500]">
              <div className="bg-black px-6 py-4 flex items-center justify-center">
                <Image src="/images/agriseta.png" alt="AgriSETA logo" width={100} height={80} className="h-20 w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#cf4500] mb-2">AgriSETA &amp; Others</h3>
                <ul className="space-y-2 text-[#323231] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Mixed Farming (ID: 48977)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Animal Production (ID: 48970)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>Poultry (ID: 49582)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cf4500] font-bold">•</span>
                    <span>SABPP: Life Skills Coaching Practitioner</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <div className="bg-gradient-to-r from-[#323231] to-black py-16 px-6 rounded-xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Training Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              With over 14 years of experience and multiple SETA accreditations, KanyaCSI is your trusted partner for skills development and training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="px-8 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
              </Link>
              <Link 
                href="/"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
} 