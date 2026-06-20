import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Cabins from "@/components/sections/Cabins";
import Experiences from "@/components/sections/Experiences";
import Services from "@/components/sections/Services";

// 1. CÁMBIALO AQUÍ (Le damos un alias "LocationSection")
import LocationSection from "@/components/sections/Location";

import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Cabins />
        <Experiences />
        <Services />
        
        {/* 2. CÁMBIALO AQUÍ TAMBIÉN */}
        <LocationSection /> 
        
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}