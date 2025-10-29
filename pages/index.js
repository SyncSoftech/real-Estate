'use client';

import Head from "next/head";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero"
import Blog from "@/components/blog"
import ServicesSection from "@/components/services"
import Testimonial from "@/components/testimonial"
import ProductSlider from "@/components/slider"
import Sliderpartner from "@/components/sliderpartner" 
import { useState, useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // --- Testimonial Logic ---
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "I have been seeing Mark for 14 years now. I simply couldn't do without a good audiologist. It's the difference between me earning a living and not earning a living.",
      name: "Anne Robinson",
      title: "Journalist & Television Presenter",
      image: "/images/anne-robinson.jpg",
      story: "#anne-story",
    },
    {
      id: 2,
      quote:
        "The team's expertise and care transformed my daily life. I can now enjoy conversations with my family again and feel confident in social situations.",
      name: "David Thompson",
      title: "Retired Teacher",
      image: "/images/david-thompson.jpg",
      story: "#david-story",
    },
    {
      id: 3,
      quote:
        "From the moment I walked in, I felt understood and cared for. The personalized approach made all the difference in my hearing journey.",
      name: "Sarah Wilson",
      title: "Marketing Executive",
      image: "/images/sarah-wilson.jpg",
      story: "#sarah-story",
    },
  ];

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const previousTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // Auto advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") previousTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const currentClient = testimonials[currentTestimonial];

  return (
    <>
      <Head>
        <title>Hear Me London</title>
        <meta
          name="description"
          content="London Audiologists - Hear Me London"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 font-sans`}
      >
        {/* Header */}
        <header className="absolute top-0 right-0 z-10 p-6">
          <div className="text-sm font-medium text-gray-600 tracking-wide">
            
          </div>
        </header>

        {/* Hero Section */}
        
                <div className="flex min-h-screen">          {/* Left Side - Image */}      
                      <div className="w-1/2 relative">
           <div className="absolute inset-0 bg-gradient-to-r  from-transparent to-gray-50 opacity-20 z-10 border-2 "></div>
          <Image 
              src="/image.png"
              className="w-[500px] h-[500px] object-cover"
              alt="Senior woman smiling"
              fill
              // className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 flex items-center justify-center bg-gray-50 px-16">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold  text-gray-900 leading-tight mt-28">
              Hearing Technology  
                
                {/* <span className="font-normal">Audiologists</span> */}
              </h1>
              <br/><h2 className="text-4xl font-light mt--1">Modern Hearing Solutions for a Better Tomorrow.
                </h2>

              <p className="text-lg text-gray-600 mb-5 mt-9 leading-relaxed ">
              At Namankar Hearing Services, we combine professional expertise with the latest advancements in hearing technology to help you hear clearly and live confidently. Whether you’re looking for a discreet hearing aid, rechargeable convenience, smart connectivity, or health-tracking features, today’s innovations make hearing easier, more natural, and more personalized than ever — empowering you to stay connected, enjoy conversations, and embrace every moment of sound with confidence.
              </p>

              <p className="text-lg text-gray-800 font-medium mb-3">
              Experience the difference with Namankar Hearing Services — where technology meets care.
              </p>

              <div className="flex items-center space-x-6">
                <Link href="/" className="inline-flex items-center">
                  <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2">
                    <span>Find Your Local Hearlogic Specialist</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>

                {/* <Link href="/pricing" className="inline-flex items-center">
                  <button className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">i</span>
                    </div>
                    <span className="font-medium">Pricing</span>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

    <Sliderpartner />
     
<ProductSlider/>
        {/* Specialists Section */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              PUNE’s Leading Ear <br />
              <span className="font-bold">Specialists</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div className="bg-gray-50 rounded-2xl shadow-sm p-8">
                <p className="text-xs font-semibold text-gray-600 tracking-wide mb-3">
                  PUNE’S LEADING EAR SPECIALISTS
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  The only London audiologists you need
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hear Me London is dedicated to improving people’s lives by
                  improving their hearing. Our mission is to encourage everyone
                  to protect, care and nurture their audiology health so our ears
                  are as valued as much as any other part of the body.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  By spotting the signs of age-related hearing loss sooner,
                  people can delay decline and continue living life to the full,
                  without compromise.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2 text-amber-600 font-medium">
                    <span className="text-xl">👩‍⚕️</span>
                    <span>Expert Audiologists</span>
                  </div>
                  <div className="flex items-center space-x-2 text-amber-600 font-medium">
                    <span className="text-xl">🎧</span>
                    <span>Hearing Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-amber-600 font-medium">
                    <span className="text-xl">🏥</span>
                    <span>Convenient Care Options</span>
                  </div>
                  <div className="flex items-center space-x-2 text-amber-600 font-medium">
                    <span className="text-xl">⭐</span>
                    <span>Committed to Excellence</span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Hearing.jpg"
                  alt="Namankar hearing services"
                  width={600}
                  height={400}  
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-6 left-6 bg-transparent rounded-xl shadow-xl p-4 w-72">
                  <h4 className="font-semibold text-gray-900">Namankar hearing services</h4>
                  <p className="text-sm text-gray-500">
                    46 Chippenham Rd, London W9 2AF
                  </p>
                  <div className="flex items-center mt-2 mb-4">
                    <span className="text-yellow-500 text-lg">★★★★★</span>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      5.0
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>M:</strong> “Service and attention was very good
                      in a well equipped consulting room.”
                    </li>
                    <li>
                      <strong>K:</strong> “Modern and clean place; conveniently
                      located.”
                    </li>
                    <li>
                      <strong>B:</strong> “Competitive prices and a warm and
                      friendly environment.”
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <Testimonial />
        
      </main>
      <Blog />
  <Hero />
    </>
  );
}
