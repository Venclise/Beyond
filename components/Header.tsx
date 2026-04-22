"use client"
import { categories } from '@/lib/contants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'
import SideBar from './SideBar'
import { Button } from './ui/button'
import { Sofa } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {

  const path = usePathname()

  return (
    <div className={  `w-full p-5 flex items-center justify-between ${path === "/dashboard" ||path=== "/dashboard/add" && "hidden" }` }>
      <div className='flex  gap-4 items-center'>
        <Link href="/">
      <Image
      src="/logo.jpg"
      alt="logo"
      width={50}
      height={50}
      className='rounded-full'
      />
      </Link>
          {
            categories.map(({title,Catslug,subCategories}) => (
                <Link href={`/products/${Catslug}`} className='group uppercase font-light relative lg:flex hidden' key={title} >

{title}

<div className='hidden shadow-md flex-col gap-4 absolute top-5 w-[10rem] p-5 left-0 bg-white z-100 group-hover:flex'>
     {subCategories.map(({title,slug}) => (
        <Link href={`/products/${Catslug}/${slug}`} className='font-light hover:underline' key={title}>
        {title}
         </Link>
     ))}
</div>

                  </Link>
            ))
          }

          
      </div>

      <div className='flex items-center'>
          <SearchInput />

          <div className='lg:hidden flex'>
            <SideBar />
          </div>
               <Link href="/products" className="lg:flex hidden">
          <Button className="bg-black cursor-pointer text-white transition-all py-5 rounded-full  w-full">
            <Sofa />
            Explore Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
