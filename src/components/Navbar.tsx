"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-center">
        <Link href="/">
          <div>
            <Image src="/logo1.jpg" alt="logo1" width={60} height={20} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-6">
          <li><Link href="/categories/men">Men</Link></li>
          <li><Link href="/categories/women">Women</Link></li>
          <li><Link href="/categories/kids">Kids</Link></li>
          <li><Link href="/categories/sale">Sale</Link></li>
          <li><Link href="/categories/sale">Featured</Link></li>
          <li><Link href="/categories/sale">Gifts</Link></li>
          <li><Link href="/help">Help</Link></li>

        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`lg:hidden flex flex-col items-center gap-4 p-4 text-black transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <li><Link href="/categories/men">Men</Link></li>
        <li><Link href="/categories/women">Women</Link></li>
        <li><Link href="/categories/kids">Kids</Link></li>
        <li><Link href="/categories/sale">Sale</Link></li>
        <li><Link href="/categories/sale">Featured</Link></li>
          <li><Link href="/categories/sale">Gifts</Link></li>
           <li><Link href="/help">Help</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
