import React from 'react'
import { Button} from './ui/button';
import Image from 'next/image';
const Featured = () => {
  return (
    <>
    <main className="w-full h-full">
      <h1 className='text-[23px] font-medium mt-12'>Featured</h1>
  
      {/* Top Section */}
      

      {/* Hero Image */}
      <div className="w-full">
        <Image
          src="/h2.jpg"
          alt="hero"
          width={1300}
          height={700}
          className="w-full h-auto"
          priority // Ensures the image loads fast
        />
      </div>
      <div className="text-center mt-[60px]">
   
  <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">STEP INTO WHAT FEELS GOOD</h1>
  <p className="text-[15px] font-normal">
  Cause everyone should know the feeling of running in that perfect pair.
  </p>

  {/* Flex container for buttons */}
  
    {/* Button 1 */}
    <div className="w-auto mt-6">
      <Button className="px-8 py-3 text-white hover:text-black bg-black rounded-full">
      Find Your Shoe
      </Button>
    </div>
    </div>



    </main>
 </>
  )
}

export default Featured;