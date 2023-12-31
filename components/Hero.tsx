"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

export default function Hero() {
  function handleScroll() {
    console.log("handleScroll called")
  }

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] leading-[64px] lg:leading-[84px] font-extrabold">
          Find, Book, or Rent a car - quickly and easily
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with out effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/hero.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  )
}
