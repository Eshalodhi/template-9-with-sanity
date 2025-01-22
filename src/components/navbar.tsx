"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Logo Section */}
      <div className="flex justify-center py-4">
        <Link href="/" passHref>
          <Image
            src="/Foodtuck.png"
            alt="Foodtuck Logo"
            width={150}
            height={50}
            className="h-auto"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link href="/"><li>Home</li></Link>
          <Link href="/menu"><li>Menu</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/pages"><li>Pages</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/shop"><li>Shop</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 border border-orange-500 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-32 sm:w-64"
            />
            <button className="text-white hover:text-orange-500">
              <FaSearch />
            </button>
          </div>

          {/* Cart Icon */}
          <Link href="/cart" passHref>
            <HiOutlineShoppingBag className="text-white hover:text-orange-500 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4">
          <ul className="space-y-2 text-center">
            <Link href="/"><li>Home</li></Link>
            <Link href="/menu"><li>Menu</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/pages"><li>Pages</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shop"><li>Shop</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
