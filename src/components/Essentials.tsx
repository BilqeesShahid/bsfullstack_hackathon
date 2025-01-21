import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';



 

const Essentials = () => {
  return (
    <div className="mt-12">
      <h1 className="text-xl lg:text-2xl font-medium mb-6">The Essentials</h1>
      <div className="flex flex-wrap justify-center gap-4 mx-4 lg:mx-10">
        {/* First Image */}
        <div className="w-full sm:w-[45%] lg:w-[30%] h-auto relative">
          <Image
            src="/h4.png"
            alt="essential"
            layout="responsive"
            width={400}
            height={540}
            className="rounded-md"
          />
          <Link href="/categories/men"> 
          <Button className="absolute bottom-4 left-4 rounded-[30px] bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
            Men&#39;s
          </Button>
          </Link>
        </div>
        {/* Second Image */}
        <div className="w-full sm:w-[45%] lg:w-[30%] h-auto relative">
          <Image
            src="/h5.png"
            alt="essential"
            layout="responsive"
            width={400}
            height={540}
            className="rounded-md"
          />
          <Link href="/categories/women"> 
          <Button className="absolute bottom-4 left-4 rounded-[30px]
           bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
            Women&#39;s
          </Button>
          </Link>
        </div>
        {/* Third Image */}
        <div className="w-full sm:w-[45%] lg:w-[30%] h-auto relative">
          <Image
            src="/h6.png"
            alt="essential"
            layout="responsive"
            width={400}
            height={540}
            className="rounded-md"
          />
          <Link href="/categories/kids"> 
          <Button className="absolute bottom-4 left-4 rounded-[30px]
           bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
            Kid&#39;s
          </Button>
          </Link>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 mb-12 px-4">
        <div className="w-full sm:w-auto max-w-full rounded-md p-4">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <li className="flex flex-col items-start">
              <span className="font-bold text-black mb-4">Icons</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
              </ul>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold text-black mb-4">Shoes</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
              </ul>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold text-black mb-4">Clothing</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies &#38; Pullovers</li>
                <li>Shirts &#38; Tops</li>
              </ul>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold text-black mb-4">Kids</span>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Infant &#38; Toddlers Shoes</li>
                <li>Kid&#39;s Shoes</li>
                <li>Kid&#39;s Jordan Shoes</li>
                <li>Kid&#39;s Basketball Shoes</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
