import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';
import { getMyOrders } from "@/sanity/helpers";
import CartIcon from './CartIcon ';
import { ShoppingBasket, User } from 'lucide-react';
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import { auth, currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await currentUser()
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }
 
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-end gap-1 lg:gap-6 items-center">
        

        {/* Search Bar */}
        <form
  action="/search"
  method="GET"
  className="md:flex bg-[#F5F5F5] rounded-full relative"
  style={{ padding: "7px 12px 7px 20px" }}
>
  <input
    type="text"
    name="query"
    placeholder="Search for Products..."
    className="lg:w-[180px] lg:h-[40px] w-[80px] h-[25px] text-[12px] mr-4 bg-transparent outline-none"
  />
  <button
    type="submit"
    className="lg:ml-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
  >
    <IoSearchOutline size={20} />
  </button>
</form>


        {/* Icons */}
        <div className='flex items-center gap-2 lg:gap-5'>
          <CartIcon/>
          <ClerkLoaded>
            <SignedIn> 
          <Link href={"/orders"} className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 
    rounded-md shadow-md hover:shadow-none hoverEffect'>
      <ShoppingBasket className="cursor-pointer text-gray-400 w-6 h-6" />
      <div className='flex flex-col'>
        <p className='text-xs'>
        <span className="font-semibold">
                        {orders && orders?.length > 0 ? orders?.length : 0}
                      </span>{" "} items
        </p>
        <p className='font-semibold'>Orders</p>
      </div>
    </Link>
    </SignedIn>
           {user? <div className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 
    rounded-md shadow-md hover:shadow-none hoverEffect'>
            <UserButton/>
            <div className='flex flex-col'>
              <p className='text-xs'>Welcome!</p>
              <p className='font-semibold'>{user?.fullName}</p>
            </div>
           </div>: 
           <SignInButton>
            <div className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 
    rounded-md shadow-md hover:shadow-none hoverEffect'>
              <User/>
              <div className='flex flex-col'>
                <p className='text-sm'>Account</p>
                <p className='font-semibold'>Login</p>
              </div>
            </div></SignInButton>}
          </ClerkLoaded>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
