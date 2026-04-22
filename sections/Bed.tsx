"use client"
import ProductCard from '@/components/ui/products/ProductCard'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { A11y, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link'


type item = {
  _id: string
  title: string
  description: string
  category: string
  image: string[]
}

export default function Bed() {
   const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
const [data,setData] = useState([])
  useEffect(() => {
    async function getProducts() {
        const res = await fetch("/api/products?subcategory=double%20bed&limit=6&sort=newest",{cache:"no-store"})
        if(!res.ok) {
          throw new Error("failed to fetch products")
        }
const data =  await res.json()
        setData(data)
      }
      getProducts()
  },[])

  return (
    <div className='w-full h-max'>
      <div  className='w-full h-screen lg:h-[90vh] relative '>
      <Image src="/Bed.jpg" alt="Bedroom" fill priority className='w-full h-full object-cover brightness-75'/>
      <div className='absolute bottom-0 w-full flex-col flex items-center justify-center p-5'> 
      <h1 className='text-white  text-6xl lg:text-8xl font-light' >Bed </h1>
        <Link href="/products/bedroom/double-bed" className='underline text-white p-2'>
  View all
  </Link>
      </div>
      </div>
<div className='lg:p-10 p-2 py-10 h-max flex items-center justify-center flex-col'>


        
        <Swiper
          modules={[A11y ]}
        spaceBetween={10}
        speed={200}
              breakpoints={{
        0: {
          slidesPerView: 2.1,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
        >

    {data.map((item:item) => (
      
          <SwiperSlide key={item._id} className="relative w-full h-full">
             <ProductCard data={item} />
          </SwiperSlide>
          
        ))}
</Swiper>
  </div>
    </div>
  )
}
