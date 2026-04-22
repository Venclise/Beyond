"use client";

import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { categories } from "@/lib/contants";

export default function Category() {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full px-2 py-10">

<h1 className="text-4xl lg:text-4xl text-center py-5   ">
    Shop by Rooms
</h1>

      <Swiper
        modules={[A11y]}
        spaceBetween={10}
        speed={600}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 3.1,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.title} className="cursor-pointer">
            <div
              onClick={() => router.push(`/products/${item.Catslug}`)}
              className="
                relative 
                h-screen
              
                
              "
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover brightness-75 "
                  priority={false}
                
                />
              )}

              
              <div className="absolute  transition" />

              {/* Text */}
              <div className="absolute bottom-5 left-5 z-10">
                <h1 className="text-white text-3xl md:text-3xl lg:text-4xl  capitalize">
                  {item.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
