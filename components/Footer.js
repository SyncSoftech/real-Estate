'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const mainPages = [
    { name: 'Hearing Loss Consultation', href: '/hearing-consultation' },
    { name: 'Earwax Removal', href: '/earwax-removal' },
    { name: 'Hearing Aids London', href: '/hearing-aids' },
    { name: 'Aftercare', href: '/aftercare' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Logo and Description Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <Image src="/Hearing_clinic-logo.png" alt="Logo" width={100} height={100} />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-24">
            At Namankar Hearing Services, we provide same-day appointments for hearing care and professional earwax removal. Our fully qualified and registered audiologists bring over 10 years of collective experience, using the latest hearing technology to deliver precise, comfortable, and effective results for every patient.
            </p>

            {/* Certification Logos */}
            <div className="flex items-center gap-6 mb-8">
              {/* HCPC Logo */}
              <div className="bg-black text-white px-3 py-2 text-xs font-bold">
                <div>hcpc</div>
                <div className="text-[10px] font-normal">registered</div>
                <div className="text-[8px] font-normal">www.hcpc-uk.org</div>
              </div>

              {/* BSHAA Logo */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-xs">BSHAA</div>
                    <div className="text-red-500 text-[8px]">.org</div>
                  </div>
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-red-500 rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Pages Column */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 mt-10 ml-14">
              Main Pages
            </h4>
            <ul className="space-y-4 ml-14">
              {mainPages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 mt-10 ml-5">
              Our Business Hours
            </h4>
            
            <div className="space-y-4 mb-8 ml-5">
              <div>
                <div className="font-medium text-gray-900">Monday - Friday:</div>
                <div className="text-gray-600">9am — 6pm</div>
              </div>
              
              <div>
                <div className="font-medium text-gray-900">Sat - Sun:</div>
                <div className="text-gray-600">Closed*</div>
              </div>
              
              <div className="text-xs text-gray-500 italic">
                *excl special weekend clinics
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Namankar hearing services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
