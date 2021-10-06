import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import HeroContent from '../src/components/HeroContent'
import MainSection from '../src/components/MainSection'
import AboutSection from '../src/components/AboutSection'
import ContactSection from '../src/components/ContactSection'
import Footer from '../src/components/Footer'
import SliderCarousel from '../src/components/SliderCarousel'
import hero from '../src/assets/hero.jpg'
import Image from 'next/image'




export default function Home() {

  return (
  <div className="relative overflow-x-hidden"> 
      <div className="absolute opacity-25 transform scale-150 z-0 min-w-full">
          <Image src={hero}
          className=""
            width={1200}
            height={600}
            layout="fixed"
            objectFit="cover"
            /> 
      </div>
      <Header/>
        <HeroSection /> 
        <MainSection />
        <AboutSection />
        <ContactSection />
        <SliderCarousel  />
      <Footer />
   </div>
  )
}
 