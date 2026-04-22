import Bedroom from '@/sections/Sofa'
import Features from '@/sections/Features'
import Hero from '@/sections/Hero'
import React from 'react'
import Sofa from '@/sections/Sofa'
import Bed from '@/sections/Bed'
import Chair from '@/sections/Chair'
import Category from '@/sections/Category'

export default function page() {
  return (
    <div>
   <Hero />
   <Features />

   <Sofa />
   <Bed />
   <Chair />
   <Category />
    </div>
  )
}
