


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
  <title>Ginjo</title>
  <meta name="description" content="Ginjo – commercial and project management experts." />
  <link rel="icon" href="/favicon.ico" />
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
