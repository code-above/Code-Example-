import Square from '../../src/components/Square'
import InfoBox from '../../src/components/InfoBox'

export default function MainSection() {

    
    return (
        <>
        <section className="ml-12 mt-9 relative max-w-screen">
            <div className="max-w-xs lg:max-w-sm text-gray-700">
                <h3 className=" leading-snug text-xl md:text-2xl lg:text-3xl font-bold mb-6 ">Lorem Ipsum</h3>
                <h4 className="pr-8 text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </div>
             <div className="ml-8 lg:mr-6 absolute right-10 lg:right-20 -inset-y-40 lg:bottom-5"> 
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
