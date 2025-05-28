"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - replace with your actual values or set environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxxxx';
      
      // Prepare template parameters
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        phone: contactForm.phone || 'Not provided',
        program: contactForm.program || 'Not specified',
        message: contactForm.message,
        to_email: 'michmcm@iafrica.com'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Success
      alert('Thank you for your message! We will contact you soon.');
      setContactForm({ name: '', email: '', phone: '', program: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at michmcm@iafrica.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white text-black font-sans">
    {/* Header */}
    <header className="w-full bg-black text-white p-4 md:p-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="font-bold text-2xl md:text-3xl">KanyaCSI</div>
          <div className="text-sm md:text-base text-gray-300">Empowering through skills</div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
            <li>
              <button 
                onClick={() => scrollToSection('programs')} 
                className="hover:text-[#cf4500] transition-colors duration-300 focus:outline-none focus:text-[#cf4500]"
              >
                Programs
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')} 
                className="hover:text-[#cf4500] transition-colors duration-300 focus:outline-none focus:text-[#cf4500]"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-[#cf4500] transition-colors duration-300 focus:outline-none focus:text-[#cf4500]"
              >
                About
              </button>
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
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Transform Your Future with 
              <span className="text-[#cf4500]"> Learnerships</span> and 
              <span className="text-[#cf4500]"> Skills Development</span>
            </h1>
            <p className="text-lg text-[#323231] leading-relaxed">
              Practical, industry-recognized training programs to advance your career and improve your employability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => scrollToSection('programs')}
                className="px-6 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Programs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-[#323231] text-[#323231] rounded-lg hover:bg-[#323231] hover:text-white transition-all duration-300 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/class2.png" 
              alt="Diverse group of students in a skills training classroom" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6">
              <h2 className="text-2xl font-bold text-white text-center">Building Skills for Tomorrow</h2>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="max-w-6xl mx-auto w-full py-12 bg-[#f8f8f8] rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Our Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Agriculture Program */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/farm.png" 
                  alt="Agricultural training with students working in fields" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Agricultural Skills</h3>
                <p className="text-[#323231] mb-4 leading-relaxed">Learn sustainable farming practices, crop management, and modern agricultural techniques to boost productivity and food security.</p>
                <Link href="/agriculture" className="text-[#cf4500] font-medium hover:underline focus:outline-none focus:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Construction Program */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/construction.png" 
                  alt="Construction training with students learning building skills" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Construction</h3>
                <p className="text-[#323231] mb-4 leading-relaxed">Comprehensive training in building techniques, safety protocols, and industry standards for the construction sector.</p>
                <Link href="/construction" className="text-[#cf4500] font-medium hover:underline focus:outline-none focus:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Computer Skills Program */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#cf4500] transform hover:-translate-y-2">
              <div className="h-48 relative">
                <Image 
                  src="/images/computer2.png" 
                  alt="Computer skills training in a modern classroom" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#323231]">Digital Literacy</h3>
                <p className="text-[#323231] mb-4 leading-relaxed">Develop essential computer skills, from basic office applications to advanced digital tools needed in today&apos;s workplace.</p>
                <Link href="/digital-literacy" className="text-[#cf4500] font-medium hover:underline focus:outline-none focus:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Qualifications Section */}
          <div className="mt-10 px-4" id="services">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Qualifications & Certifications</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <p className="mb-4 text-[#323231] text-center">We offer learnerships and a learner exits with a National Certificate:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[#cf4500]">National Certificates Available:</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>Business Administration Services NQF L2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>Contact Centre Support NQF L2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>Generic Management NQF L4</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>New Venture Creation NQF L2 & L4</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>MICTSETA Technical Support NQF L4</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-[#cf4500]">Specialized Programs:</h4>
                  <ul className="space-y-2 text-[#323231]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>IT: End User Computing NQF L3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>New Venture Creation SMME NQF L2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>AGRISETA Qualifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>Skills Development Training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf4500] font-bold">✓</span>
                      <span>Assessment & Moderation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/programs"
              className="inline-block px-8 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse All Programs
            </Link>
          </div>
        </section>

        {/* Training in Action Section */}
        <section className="max-w-6xl mx-auto w-full py-12">
          <h2 className="text-3xl font-bold text-black mb-8 px-4 text-center">Training in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {[
              { src: "/images/farm.png", alt: "Students learning agricultural techniques in a field" },
              { src: "/images/construction2.png", alt: "Construction trainees working with safety equipment" },
              { src: "/images/computer.png", alt: "IT students in a computer lab" },
              { src: "/images/class.png", alt: "Manufacturing skills training workshop" }
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg group bg-gray-200 relative">
                {/* Using Next.js Image component for optimization */}
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg group-hover:scale-110 transition-transform duration-500"
                  onLoad={() => {
                    console.log(`Image loaded successfully: ${image.src}`);
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`, e);
                  }}
                />
              </div>
            ))}
          </div>
          
        </section>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto w-full py-16 px-4 bg-gradient-to-br from-[#f8f8f8] to-white rounded-xl">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">About KanyaCSI</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[#323231] leading-relaxed">
                <strong>KanyaCSI</strong> is a dynamic Business Development and skills development provider, founded by Michelle McMaster in 2010. It is 100% black-owned, 100% women owned and has a <span className="text-[#cf4500] font-semibold">BBBEE Level 1 status</span> as per revised Codes of Good Practice.
              </p>
              
              <p className="text-[#323231] leading-relaxed">
                The organization was established with the aim of accelerating the integration of women and the previously disadvantaged into leading business ventures as a countermeasure to power other groups who were sidelined from the mainstream of the South African economy due to the previous discriminatory laws of apartheid.
              </p>
              
              <p className="text-[#323231] leading-relaxed">
                Our services encompass skills development and training, Independent Skills Facilitation/Consulting, Enterprise/SMME Development, Technical Development and Support, End User Computing and Project Management, RPL and Skills Life Coaching.
              </p>
              
              <div className="bg-[#cf4500] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#cf4500]">
                <p className="text-[#323231] font-medium">
                  We are accredited by the MICTSETA, Services SETA, Agri SETA and the South African Board of Peoples Practices &quot;SABPP&quot;.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-[#cf4500]">
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Our Vision</h3>
              <p className="mb-6 text-[#323231] leading-relaxed">
                To continuously improve the quality of our service and to extend our scope to meet the skills demand and requirements of the South African economy.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">Our Mission</h3>
              <p className="mb-6 text-[#323231] leading-relaxed">
                To provide quality service to ensure that learners develop new skills for employability and to be self-employed.
              </p>
              
              <div className="bg-gradient-to-r from-[#cf4500] to-[#b03a00] p-4 rounded-lg text-white">
                <p className="italic text-center font-medium">
                  &quot;KanyaCSI believes that it has the vision, commitment and expertise to develop human potential and create a world that works better.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="max-w-6xl mx-auto w-full py-12 px-4">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f8f8f8] to-white p-6 rounded-lg shadow-lg border-l-4 border-[#cf4500]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0 ring-4 ring-[#cf4500] ring-opacity-20">
                  <Image 
                    src="/images/computer.png" 
                    alt="Student portrait" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="italic mb-3 text-[#323231] leading-relaxed">
                    &quot;The agricultural training program at KanyaCSI gave me the skills and confidence to start my own small farm. Now I&apos;m employing three people from my community.&quot;
                  </p>
                  <p className="font-bold text-[#cf4500]">- Thabo M.</p>
                  <p className="text-sm text-[#323231]">Agricultural Skills Graduate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f8f8f8] to-white p-6 rounded-lg shadow-lg border-l-4 border-[#cf4500]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0 ring-4 ring-[#cf4500] ring-opacity-20">
                  <Image 
                    src="/images/farm.png" 
                    alt="Student portrait" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="italic mb-3 text-[#323231] leading-relaxed">
                    &quot;After completing the IT program, I secured a position at a software company. The practical training made all the difference in my job interviews.&quot;
                  </p>
                  <p className="font-bold text-[#cf4500]">- Lerato N.</p>
                  <p className="text-sm text-[#323231]">Digital Literacy Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="w-full bg-gradient-to-r from-[#323231] to-black py-16 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 opacity-10">
            <Image 
              src="/images/construction.png" 
              alt="Background pattern" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Advance Your Career?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Register for one of our upcoming training programs and take the first step toward a brighter future.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-block px-8 py-4 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Register Now
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto w-full py-12 px-4">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6 text-[#323231] leading-relaxed">
                Have questions about our programs or ready to enroll? Contact us using the information below or fill out our contact form.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-[#f8f8f8] rounded-lg">
                  <div className="text-[#cf4500] text-xl">✉️</div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-[#323231]">michmcm@iafrica.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#cf4500]">
                <h4 className="text-lg font-bold mb-2">Contact Hours</h4>
                <p className="text-[#323231]">Monday - Friday: 8:00 AM - 4:30 PM</p>
                <p className="text-[#323231]">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#323231] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf4500] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#323231] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf4500] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#323231] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf4500] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-[#323231] mb-1">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={contactForm.program}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf4500] focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="agricultural">Agricultural Skills</option>
                    <option value="construction">Construction</option>
                    <option value="digital">Digital Literacy</option>
                    <option value="business">Business Administration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#323231] mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf4500] focus:border-transparent resize-none"
                    placeholder="Tell us about your training needs or ask any questions"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#cf4500] text-white rounded-lg hover:bg-[#b03a00] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <div className="bg-[#323231] text-white py-2 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} KanyaCSI - All rights reserved</p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-300 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500]">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500]">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-black text-white py-8 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#cf4500]">KanyaCSI</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Providing quality skills training and development to empower individuals and organizations across South Africa.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('programs')}
                    className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500]"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500]"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500]"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <button className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500] w-8 h-8 rounded-full bg-gray-800 hover:bg-[#cf4500] flex items-center justify-center">
                  FB
                </button>
                <button className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500] w-8 h-8 rounded-full bg-gray-800 hover:bg-[#cf4500] flex items-center justify-center">
                  TW
                </button>
                <button className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500] w-8 h-8 rounded-full bg-gray-800 hover:bg-[#cf4500] flex items-center justify-center">
                  IG
                </button>
                <button className="text-gray-400 hover:text-[#cf4500] transition-colors focus:outline-none focus:text-[#cf4500] w-8 h-8 rounded-full bg-gray-800 hover:bg-[#cf4500] flex items-center justify-center">
                  LI
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}