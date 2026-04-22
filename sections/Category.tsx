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
    <div className="w-full lg:p-10 p-1 py-10">
      <h1 className="text-4xl lg:text-4xl  p-5 uppercase font-light   ">
        Shop by Rooms
      </h1>

      <Swiper
        modules={[A11y]}
        spaceBetween={10}
        speed={250}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
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
        className=" h-[80vh] lg:h-screen  "
      >
        {categories.map((item) => (
          <SwiperSlide key={item.title} className="cursor-pointer h-full">
            <div
              onClick={() => router.push(`/products/${item.Catslug}`)}
              className="
                relative 
                h-full
              
                
              "
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover brightness-72 rounded-sm"
                  priority={false}
                />
              )}

              <div className="absolute  transition" />

              <div className="absolute bottom-5 left-5 z-10">
                <h1 className="text-white text-3xl lg:text-4xl capitalize">
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
