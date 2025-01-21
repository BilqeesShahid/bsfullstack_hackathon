"use client"
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { IoThumbsUpSharp } from "react-icons/io5";
import { IoThumbsDownSharp } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdEditLocation } from "react-icons/md";
import Footer from "@/components/Footer";
 

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center">
      {/* GET HELP Heading */}
      <h1 className="text-xl lg:text-[32px] font-medium mt-12 mb-8">GET HELP</h1>

      {/* Search Box with Icon Inside */}
      <div className="mb-8 relative w-[90%] max-w-[460px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-[#757575] text-[#757575] text-sm lg:text-[15px] rounded-[8px] p-2 w-full h-[48px] lg:h-[56px] pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="What can we help you with?"
        />
        <FaSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* Help Content - Two Columns */}
      <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl px-4">
        {/* Left Column */}
        <div className="w-full lg:w-[65%] p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
          <h2 className="text-lg lg:text-[28px] font-medium mb-6 text-center">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-sm lg:text-[15px] text-[#111111] mb-6 ml-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <p className="text-sm lg:text-[15px] text-[#111111] mb-6 ml-4">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
          </p>
          <p className="text-sm lg:text-[15px] text-[#111111] mb-8 ml-8">
            If you enter your PAN information at checkout, you&#39;ll be able to
            pay for your order with PayTM or a local credit or debit card.
            <br />
            <span className="text-[16px] mt-3 mb-6">Apple Pay</span>
          </p>
          <p className="text-sm lg:text-[15px] text-[#111111] mb-6">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If you're not already a Member, join
            us today.
          </p>
          <div className="flex space-x-4 justify-start mt-6">
            <Link href="/signin">
              <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
                Sign In
              </button>
            </Link>
            <Link href="/addtobag">
              <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
                Shop Nike
              </button>
            </Link>
          </div>
          <div className="mt-12">
            {/* FAQs */}
            <h1 className="text-[20px] font-bold text-black mb-4">FAQS</h1>
            <p className="text-[15px] font-bold text-black mb-4">
              Does my card need international purchases enabled?
            </p>
            <p className="text-[15px] font-normal mb-4">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified
              <br />
              at checkout if international purchases need to be enabled.
            </p>
            <p className="text-[15px] font-normal mb-4">
              Please note, some banks may charge a small transaction fee for
              international orders.
            </p>
            <h2 className="text-[15px] font-bold text-black mb-4">
              Can I pay for my order with multiple methods?
            </h2>
            <p className="text-[15px] font-normal mb-4">
              No, payment for Nike orders can&#39;t be split between multiple
              payment methods.
            </p>
            <h2 className="text-[15px] font-bold text-black mb-4">
              What payment method is accepted for SNKRS orders?
            </h2>
            <p className="text-[15px] font-normal mb-4">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
            <h2 className="text-[15px] font-bold text-black mb-4">
              Why don&#39;t I see Apple Pay as an option?
            </h2>
            <p className="text-[15px] font-normal mb-4">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you&#39;ll need to use a compatible Apple device running the latest
              OS. Additionally, you&#39;ll need to use Safari to use Apple Pay on
              Nike.com.
            </p>
            <p className="text-[15px] font-normal mb-6">
              Was this answer helpful?
            </p>
            <div className="flex gap-2 mb-4">
              <IoThumbsUpSharp />
              <IoThumbsDownSharp />
            </div>
            <p className="text-[#757575] mb-4">RELATED</p>
            <h1 className="text-[16px] text-black font-medium underline">
              WHAT ARE NIKE&#39;S DELIVERY OPTIONS?
            </h1>
            <h1 className="text-[16px] text-black font-medium underline">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[35%] p-6 flex justify-center">
          <div className="w-full max-w-[313px] p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-[28px] font-semibold mb-6 uppercase text-center text-black">
              Contact Us
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <FaMobileScreenButton size={40} className="text-gray-700 mb-2" />
                <p className="font-medium text-black">000 800 919 0566</p>
                <p className="text-sm text-gray-600">
                  Products &#38; Orders: 24 hours a day,
                  <br />
                  16:30, Monday &#45; Friday
                </p>
                <p className="text-sm text-gray-600">7 days a week</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <RiMessage2Fill size={40} className="text-gray-700 mb-2" />
                <p className="font-medium text-black">24 hours a day</p>
                <p className="text-sm text-gray-600">7 days a week</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BsEnvelopeFill size={40} className="text-gray-700 mb-2" />
                <p className="font-medium text-black">We&#39;ll reply within</p>
                <p className="text-sm text-gray-600">five business days</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MdEditLocation size={40} className="text-gray-700 mb-2" />
                <p className="font-medium text-black uppercase">Store Locator</p>
                <p className="text-sm text-gray-600">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HelpPage;
