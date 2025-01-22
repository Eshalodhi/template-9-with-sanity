"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/shop?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="bg-black text-white top-0 left-0 right-0 w-full z-50">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between h-[80px]">
        {/* Logo Section */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <span className="text-white text-2xl font-bold">
              Food
              <span className="text-orange-500">tuck</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <Link href="/">
              <span className="text-white hover:text-orange-500 font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <span className="text-white hover:text-orange-500 font-medium">Menu</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="text-white hover:text-orange-500 font-medium">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/pages">
              <span className="text-white hover:text-orange-500 font-medium">Pages</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:text-orange-500 font-medium">About</span>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <span className="text-white hover:text-orange-500 font-medium">Shop</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-orange-500 font-medium">Contact</span>
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-8 text-lg">
          {isSearchOpen ? (
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 px-4 py-2 rounded-r text-white hover:bg-orange-600"
              >
                <FaSearch />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-orange-500 cursor-pointer"
            >
              <FaSearch />
            </button>
          )}
          <Link href="/signin">
            <li className="text-white hover:text-orange-500 cursor-pointer list-none">
              <FaUser />
            </li>
          </Link>
          <Link href="/cart">
            <li className="text-white hover:text-orange-500 cursor-pointer list-none">
              <HiOutlineShoppingBag />
            </li>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Menu
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pages">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Pages
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
