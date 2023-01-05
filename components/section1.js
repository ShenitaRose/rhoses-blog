import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function Section1() {
    SwiperCore.use([Autoplay])

   
  return (
    <section className="py-16">
        <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:3000
          }}
        >
       <SwiperSlide>{Slide()}</SwiperSlide>
       <SwiperSlide>{Slide()}</SwiperSlide>
       <SwiperSlide>{Slide()}</SwiperSlide>
       <SwiperSlide>{Slide()}</SwiperSlide>
       <SwiperSlide>{Slide()}</SwiperSlide>
    </Swiper>
        
        
            </div>
        </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
            <Link href={"/"}>
                    <Image src={"/images/Telephone.png"} 
                    width={600} 
                    height={600}
                    alt="Image of my sim" />
                    </Link> 
            </div>
            <div className="info flex justify-center flex-col">
            <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">Stories</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">-July 2, 2023</Link>
            </div>
            <div className="title">
            <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Rhia finds love in one of the most Hopeless places ever!</Link>
            </div>
            <p className="text-gray-500 py-3">
            Today Rhia decided that she was going to go out and enjoy herself.
            Rhia has been at home since Lock down and has found it quite difficult to make friends. She had just moved to Moonwood Mill and was Hoping for a fresh Start.
            </p>
            <Author />
            </div>

        </div>
    )
}