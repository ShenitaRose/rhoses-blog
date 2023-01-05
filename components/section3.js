import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"


export default function Section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
        slidesPerView={2}
        >
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
    </section>
  )
}


function Post(){
    return(
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src={"/images/Baby.png"} width={600} height={400} alt="Image of my sim"/></Link> 
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">Stories</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">-July 2, 2023</Link>
            </div>
            <div className="title">
            <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">The baby is here!</Link>
            </div>
            <p className="text-gray-500 py-3">
            At 12AM, Rhia gave birth to a bouncing baby girl who she named Ainsley.
            Her husband Nick has been so inlove with the little one that sometimes Rhia has to beg him to let her hold the baby.
            </p>
            <Author />
            </div>
        </div>
    )
}
