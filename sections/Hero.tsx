import { Button } from "@/components/ui/button";
import { Sofa } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[80vh]  relative  ">
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
      <h1 className="text-white text-6xl md:text-7xl lg:text-8xl  ">
          <span className="">
           Beyond
          </span>{" "}
          <br />
          Interior
        </h1>

        <Link href="/products" className="">
          <Button className="bg-white hover:bg-gray-100 lg:text-md text-xs cursor-pointer  transition-all py-5 rounded-full text-neutral-900 w-max">
            <Sofa />
            Explore Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
