import Image from 'next/image'
import cardcarousel from '../../src/assets/cardcarousel.png'
import React from "react";
import Carousel, {slidesToShowPlugin, arrowsPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';




export default function SliderCarousel() {
 const Carousel = dynamic(
    () => import ('@brainhubeu/react-carousel'),
  {
  ssr: false
  }
)

return (
    <div className="p-4 relative -top-20">
      <Carousel
    plugins={[
      'infinite',
      'arrows',
      {
        resolve: slidesToShowPlugin,
        options: {
        numberOfSlides: 3
    
        }
      }
    ]}
    
      >
          <Image src={cardcarousel} />
          <Image src={cardcarousel} />
          <Image src={cardcarousel} />
        </Carousel>
  </div>

  );
};

 