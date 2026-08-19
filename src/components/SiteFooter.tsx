"use client";

import Link from "next/link";

export function SiteFooter({
  onNavigate,
}: {
  onNavigate?: (sectionId: string) => void;
}) {
  return (
    <footer className="w-full">
      <div className="bg-black text-white py-10 px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-[#cf4500] hover:text-white transition-colors">
              KanyaCSI
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              Providing quality skills training and development to empower individuals and organizations across South Africa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate("programs")}
                    className="min-h-11 text-gray-400 hover:text-[#cf4500] transition-colors"
                  >
                    Programs
                  </button>
                ) : (
                  <Link href="/programs" className="inline-flex min-h-11 items-center text-gray-400 hover:text-[#cf4500]">
                    Programs
                  </Link>
                )}
              </li>
              <li>
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate("about")}
                    className="min-h-11 text-gray-400 hover:text-[#cf4500] transition-colors"
                  >
                    About Us
                  </button>
                ) : (
                  <Link href="/#about" className="inline-flex min-h-11 items-center text-gray-400 hover:text-[#cf4500]">
                    About Us
                  </Link>
                )}
              </li>
              <li>
                {onNavigate ? (
                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className="min-h-11 text-gray-400 hover:text-[#cf4500] transition-colors"
                  >
                    Contact
                  </button>
                ) : (
                  <Link href="/#contact" className="inline-flex min-h-11 items-center text-gray-400 hover:text-[#cf4500]">
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Contact</h3>
            <a
              href="mailto:michmcm@iafrica.com"
              className="inline-flex min-h-11 items-center text-sm text-gray-400 hover:text-[#cf4500] break-all"
            >
              michmcm@iafrica.com
            </a>
          </div>
        </div>
        <p className="max-w-6xl mx-auto text-sm text-gray-500 mt-8 pt-6 border-t border-white/10">
          © {new Date().getFullYear()} KanyaCSI — All rights reserved
        </p>
      </div>
    </footer>
  );
}
