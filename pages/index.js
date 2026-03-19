


      'use client';

import Head from 'next/head'

import Hero from '../components/Hero'
import InsightsGrid from '../components/InsightsGrid'
import CareersSection from '../components/CareersSection'
import ProjectsCarousel from '../components/ProjectsCarousel'
import PeopleStoriesCarousel from '../components/PeopleStoriesCarousel'
import HowWeHelp from '../components/HowWeHelp'
import Testimonials from '@/components/Testimonials';
import Client from '@/components/Client';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Head>
  <title>Ginjo Construction | Commercial Management & Project Delivery Experts</title>
  <meta name="description" content="Ginjo Construction - Expert commercial services partner for construction projects. Specializing in quantity surveying, commercial management, procurement, and project delivery across UK and Europe." />
  <meta name="keywords" content="ginjo construction, commercial management, quantity surveying, project management, procurement, construction consultancy, uk construction, project delivery" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ginjo.co.uk/" />
  <link rel="icon" href="/favicon.ico" />
  
  {/* Open Graph */}
  <meta property="og:title" content="Ginjo Construction | Commercial Management & Project Delivery Experts" />
  <meta property="og:description" content="Expert commercial services partner for construction projects. Specializing in quantity surveying, commercial management, and project delivery." />
  <meta property="og:url" content="https://ginjo.co.uk/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://ginjo.co.uk/LOGO.jpg" />
  
  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Ginjo Construction | Commercial Management & Project Delivery Experts" />
  <meta property="twitter:description" content="Expert commercial services partner for construction projects. Specializing in quantity surveying, commercial management, and project delivery." />
  <meta property="twitter:image" content="https://ginjo.co.uk/LOGO.jpg" />
</Head>


      

      <main>
        <Hero
          title="We transform together."
          subtitle="Delivering complex projects and programmes across sectors with measurable outcomes."
          ctaText="Find out more"
          
        />

  

   

    
 



<Testimonials />

<Services />



    
<InsightsGrid />
      
        <ProjectsCarousel />

       <HowWeHelp />
       <CareersSection />

       <PeopleStoriesCarousel />
<Client />

      </main>

      
    </>
  )
}
