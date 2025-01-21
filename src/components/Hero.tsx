"use client";
import React from "react";
import Image from "next/image";

const Hero = ({ heros }: { heros: any[] }) => {
  return (
    <div className="w-full">
      {heros?.map((hero, index) => (
        <div
          key={index}
          className="w-full bg-[#F5F5F5] py-8" // Added padding to prevent overlap
        >
          {/* Title */}
          <h1 className="text-[16px] font-medium text-center">
            {hero.title || "Default Title"}
          </h1>

          {/* Description */}
          <p className="font-normal text-[12px] text-center mt-2">
            {hero.description || "Default Description"}
          </p>

          {/* Hero Image */}
          {hero.image?.asset?.url && (
            <div className="w-full mt-5">
              <Image
                src={hero.image.asset.url}
                alt={hero.title || "Hero Image"}
                width={1300}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Heading */}
          {hero.topSection?.heading && (
            <h2 className="text-[15px] font-medium text-center mt-8">
              {hero.topSection.heading}
            </h2>
          )}

          {/* Subheading */}
          {hero.topSection?.subheading && (
            <h3 className="uppercase text-[30px] lg:text-[56px] font-medium text-black text-center mt-4">
              {hero.topSection.subheading}
            </h3>
          )}

          {/* Detailed Description */}
          {hero.descriptionLong && (
            <p className="text-justify text-[15px] mt-4 px-4">
              {hero.descriptionLong}
            </p>
          )}

          {/* Buttons */}
          <div className="flex justify-center gap-8 mt-8">
            {hero.buttons?.map(
              (
                button: { link: string; text: string },
                buttonIndex: number
              ) => (
                <button
                  key={buttonIndex}
                  className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800"
                  onClick={() => (window.location.href = button.link)} // Navigate to the button's link
                >
                  {button.text}
                </button>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
