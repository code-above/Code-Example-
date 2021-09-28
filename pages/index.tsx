import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import HeroContent from '../src/components/HeroContent'
import MainSection from '../src/components/MainSection'
import AboutSection from '../src/components/AboutSection'
import ContactSection from '../src/components/ContactSection'
import Footer from '../src/components/Footer'
import SplideCarousel from '../src/components/SplideCarousel'



export default function Home() {

  return (
    <>
      <Header />
        <HeroSection /> 
        <MainSection />
        <AboutSection />
        <ContactSection />
        <SplideCarousel  />
      <Footer />
   </>
  )
}
 