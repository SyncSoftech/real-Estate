


import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function HearMeFooter() {
  return (
    <footer className="bg-[#748c8d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT - logo, description, badges, newsletter */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center gap-6">
              <img
                src="/LOGO.jpg"
                alt="Hear Me London logo"
                className="w-40 sm:w-44 h-auto object-contain"
              />

              <div className="flex items-center sm:items-start gap-6 sm:gap-10 ml-0 sm:ml-4">
                {/* Social icons - keep them small and stack on very small screens */}
                <div className="flex items-center gap-3">
                  <Link href="#" aria-label="LinkedIn">
                    <img
                      src="/footer/linkedin.png"
                      alt="LinkedIn"
                      className="w-7 h-auto object-contain"
                    />
                  </Link>
                  <Link href={'https://facebook.com/about-ginjo-construction'} aria-label="Facebook">
                    <img
                      src="/footer/facebook.png"
                      alt="Facebook"
                      className="w-7 h-auto object-contain"
                    />
                  </Link>
                  <Link href={'https://www.instagram.com/ginjoconstruction/'} aria-label="Instagram">
                    <img
                      src="/footer/instagram.png"
                      alt="Instagram"
                      className="w-7 h-auto object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-2xl md:text-3xl text-white max-w-xl">
              Honest Commercial Support. Real Project Results.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/UKGBC-Black-bkg.png"
                alt="UKGBC badge"
                className="w-20 h-auto object-contain"
              />
              <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/regulated-by-rics-logo-white-1536x934.webp"
                alt="RICS badge"
                className="w-20 h-auto object-contain"
              />
            </div>

            {/* Contact info (kept simple instead of full newsletter form) */}
            <div className="mt-10 max-w-sm">
              <h4 className="text-lg flex items-center font-semibold text-white tracking-wide">
                <Phone className="mr-3" />
                <span className="text-base">+44 07730748210</span>
              </h4>

              <h4 className="text-lg flex items-center font-semibold text-white tracking-wide mt-3">
                <Mail className="mr-3" />
                <span className="text-base">sales@ginjo.co.uk</span>
              </h4>
            </div>
          </div>

          {/* RIGHT - links + opening times */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                <h5 className="text-xs text-white font-semibold uppercase tracking-wide">Main Pages</h5>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/caseStudies" className="hover:underline">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/insights" className="hover:underline">
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs text-white font-semibold uppercase tracking-wide">Quick Links</h5>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <Link href="/ourPeople" className="hover:underline">
                      Our People
                    </Link>
                  </li>
                  <li>
                    <Link href="/Career" className="hover:underline">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/Gallery" className="hover:underline">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacyPolicy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business hours & CTA */}
            <div className="mt-8 border-t pt-6">
              <h6 className="text-xs text-white uppercase">Our Business Hours (UK Time Zone)</h6>
              <p className="mt-3 text-sm">
                <span className="font-semibold">Monday - Friday:</span> 9am — 6pm
              </p>
              <p className="text-sm">
                <span className="font-semibold">Sat - Sun:</span> Closed*
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white">© GINJO, All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-white">
            {/* credit / small links area kept intentionally empty to preserve design */}
          </div>
        </div>
      </div>
    </footer>
  );
}
