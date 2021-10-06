import Image from 'next/Image'
import IconListItem from '../../src/components/IconListItem'
import HexagonIcon from '../../src/components/HexagonIcon'


export default function AboutSection() {

    return (
        <section className="mb-12 md:mb-0 grid grid-cols-2 container mx-auto">
          <div className="ml-12">
    <div className="">
            <h2 className="font-bold text-4xl text-blue-button pb-2 whitespace-nowrap">Lorem Ipsum</h2>
            <p className="text-gray-rgba text-xl mb-12">Lorem ipsum dolor</p>
  


            <div className="flex pb-9">
                <div className="p-4 bg-white rounded-2xl shadow-2xl  w-1/3 h-1/3 md:w-20 md:h-20"> 
                    <IconListItem />
                </div>
                    <p className="text-gray-rgba flex max-w-xs px-6 items-center font-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex pb-9">
                <div className="p-4 bg-white rounded-2xl shadow-2xl w-1/3 h-1/3 md:w-20 md:h-20"> 
                    <IconListItem />
                </div>
                    <p className="text-gray-rgba flex max-w-xs px-6 items-center font-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex pb-9">
                <div className="p-4 bg-white rounded-2xl shadow-2xl w-1/3 h-1/3 md:w-20 md:h-20"> 
                    <IconListItem />
                </div>
                    <p className="text-gray-rgba flex max-w-xs px-6 items-center font-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
 </div>

            <div className="grid-flow-col min-w-full ">
                <HexagonIcon />
            </div>

        </section>
    )
} 