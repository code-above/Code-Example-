import Image from 'next/Image'
import clock from '../../src/assets/clock.svg'
import icon2 from '../../src/assets/icon2.png'
import icon from '../../src/assets/icon.png'



export default function InfoBox() {

    return (
        <div className="container mx-auto justify-center rounded-3xl block w-3/4 md:w-full md:w-2/3 md:flex my-24 bg-gradient-to-b from-light-blue-gradient to-dark-blue-gradient"> 
            
          <div className="md:grid grid-cols-3 text-white py-10">
            <div className="px-16 md:px-4">
                <Image
                    src={clock}
                    />
                <h3 className="font-bold pl-4">Lorem Ipsum</h3>
                    <p className="pl-4 pb-8 md:pb-0 max-w-xs font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="px-16 md:px-4 pt-3">
                <Image
                    src={icon2}
                    />
                     <h3 className="font-bold pt-4">Lorem Ipsum</h3>
                    <p className=" max-w-xs font-thin pb-8 md:pb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

             <div className="pt-3 px-16 md:px-4">
                <Image
                    src={icon}
                    />
                     <h3 className="font-bold pt-6">Lorem Ipsum</h3>
                    <p className=" max-w-xs font-thin pb-8 md:pb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
          </div>
        </div>
    )
}