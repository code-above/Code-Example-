import Image from 'next/image'
import hero from '../../src/assets/hero.jpg'
import HeroContent from '../../src/components/HeroContent'


export default function HeroSection() {


    return (
    <section className="z-10 container mx-auto  ">
        <div className="">
            <HeroContent />
        </div>    
    </section>  
   
    )
}