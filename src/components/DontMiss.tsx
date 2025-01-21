import React from 'react'
import { Button} from './ui/button';
import Image from 'next/image';
const DontMiss = () => {
  return (
    <>
    <main className="w-full h-full">
      <h1 className='text-[23px] font-medium mt-12'>Don&#39;t Miss</h1>
  
      {/* Top Section */}
      

      {/* Hero Image */}
      <div className="w-full">
        <Image
          src="/h3.png"
          alt="hero"
          width={1300}
          height={700}
          className="w-full h-auto"
          priority // Ensures the image loads fast
        />
      </div>
      <div className="text-center mt-[60px]">
   
  <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">FLIGHT ESSENTIALS</h1>
  <p className="text-[15px] font-normal">
  Your built&#45;to&#45;last, all&#45;week wears&#45;but with style only Jordan Brand can deliver.
  </p>

  {/* Flex container for buttons */}
  
    {/* Button 1 */}
    <div className="w-auto mt-6">
      <Button className="px-8 py-3 text-white hover:text-black bg-black rounded-full">
      Shop
      </Button>
    </div>
    </div>



    </main>
 </>
  )
}

export default DontMiss;