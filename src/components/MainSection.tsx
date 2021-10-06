import Square from '../../src/components/Square'
import InfoBox from '../../src/components/InfoBox'

export default function MainSection() {

    
    return (
        <>
        <section className="relative pl-14 mt-24 md:mt-48 container mx-auto ">
            <div className="max-w-xs lg:max-w-sm text-gray-rgba pr-24 md:pr-0 pt-24 md:pt-12">
                <h3 className=" leading-snug text-lg md:text-2xl lg:text-3xl font-bold mb-6 ">Lorem Ipsum</h3>
                <h4 className="pr-8 text-lg md:text-xl font-light leading-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </div>
             <div className="-inset-y-0 md:ml-8 lg:mr-6 absolute right-5 lg:right-20 md:-inset-y-44 lg:bottom-5"> 
                <Square />
             </div>
        </section>

        <section>
            <div>
                <InfoBox />
            </div>
        </section>
</>
    )
}
