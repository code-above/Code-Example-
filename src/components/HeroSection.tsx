import Image from 'next/image'
import hero from '../../src/assets/hero.jpg'
import HeroContent from '../../src/components/HeroContent'
import Square from '../../src/components/Square'


export default function HeroSection() {


    return (
    <section className="flex max-w-screen">
        <div>
            <Image className="opacity-25 transform scale-150" 
                src={hero}
                alt="main-hero" 
                // layout="fixed"
                // height={580}
                // width={1800}

            /> 
        </div>
        <div className="absolute top-20 md:top-28 ">
            <HeroContent />
        </div>    
    </section>  
   
    )
}