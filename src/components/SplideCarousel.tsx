import Image from 'next/image'
import cardcarousel from '../../src/assets/cardcarousel.png'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';


export default function SplideCarousel() {

return (
<div className="py-16">
    <Splide 
      options={{
        rewind: true,
        perPage: 3,
        perMove: 2,
        pagination: false,
        autoplay: true,
        interval: 2000,
        gap: 0,
        arrows: false,
        lazyLoad: "nearby",
      }}
      onMoved={(splide, newIndex) => {
        console.log("moved", newIndex);
      }}
    >
      <SplideSlide className="">
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
        <SplideSlide>
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
        <SplideSlide>
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
        <SplideSlide>
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
        <SplideSlide>
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
        <SplideSlide>
            <Image src={cardcarousel} alt="carousel image" />
        </SplideSlide>
    </Splide>
 </div>
  );
};

