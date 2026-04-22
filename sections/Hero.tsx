// "use client";
// import { HeroSlides } from "@/lib/contants";
// import Image from "next/image";
// import React, { useRef, useState } from "react";

// import { A11y, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";

// export default function Hero() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="w-full h-[50vh] md:h-[80vh] relative">

//       <Swiper
//         modules={[A11y, Pagination, Autoplay]}
//         spaceBetween={0}
//         speed={1000}
//         autoplay={{
//           delay: 2000,
//         }}
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         className="h-full w-full"
//       >
//         {HeroSlides.map((item) => (
//           <SwiperSlide key={item.title} className="relative w-full h-full">
//             <Image
//               alt={item.title}
//               src={item.img}
//               fill
//               priority
//               className="object-cover z-[40] brightness-70"
//             />
//             <div className="z-100 h-full w-full absolute  flex items-center justify-center  lg:p-10 p-5 ">
//               <div className="flex flex-col gap-5 items-center">
//                 <h1 className="  text-white font-light text-6xl uppercase">{item.title}</h1>
//                 <Button className="bg-[#724234] px-5 font-light hover:bg-[#a47364]  hover:gap-5 cursor-pointer py-5  w-max rounded-full">
//                   Explore Now
//                 </Button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Sofa } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[80vh] relative  ">
      <div className="w-full h-full relative">
        <Image
          alt="Bedroom"
          src="/bedroom.jpg"
          fill
          priority
          className="object-cover z-[40] brightness-70"
        />
      </div>

      <div className="absolute bottom-0 flex flex-col gap-4  left-0 p-5 lg:p-10 z-50 ">
      <h1 className="text-white text-5xl lg:text-8xl  ">
          <span className="">
            <i>Beyond</i>
          </span>{" "}
          <br />
          Interior
        </h1>

        <Link href="/products" className="">
          <Button className="bg-[#724234] lg:text-md text-xs cursor-pointer hover:bg-[#9a6e61] transition-all py-5 rounded-full text-neutral-50 w-max">
            <Sofa />
            Explore Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
