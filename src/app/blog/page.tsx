import Image from "next/image";
import Navbarmenu from "@/components/navmenu";
import { FaSearch } from "react-icons/fa";
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from "react-icons/fa";
import Footer from "@/components/footer";

export default function BlogDetails() {
  return (
    <>
      <Navbarmenu />
      {/* Hero Section */}
      <section className="relative w-full h-[250px] md:h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Blog List</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; Blog
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-8 space-y-8">
          {/* Blog Post 1 */}
          <div className="border rounded-lg shadow overflow-hidden">
            <Image
              src="/unsplash_lP5MCM6nZ5A.png"
              alt="Tacos"
              width={400}
              height={800}
            />
            <div className="p-4">
              <div className="flex items-center flex-wrap space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Image
                    src="/calendar.png"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">Feb 14, 2022</span>
                </span>
                <span className="flex items-center mt-2 lg:mt-0">
                  <Image
                    src="/UserCirclePlus.png"
                    alt="Admin Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">By Admin</span>
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id arcu viverra, faucibus orci nec, euismod eros. Praesent nec
                diam venenatis...
              </p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="border rounded-lg shadow overflow-hidden">
            <Image
              src="/Mask Group (4).png"
              alt="Pizza"
              width={400}
              height={830}
            />
            <div className="p-4">
              <div className="flex items-center flex-wrap space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Image
                    src="/calendar.png"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">Feb 14, 2022</span>
                </span>
                <span className="flex items-center mt-2 lg:mt-0">
                  <Image
                    src="/UserCirclePlus.png"
                    alt="Admin Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">By Admin</span>
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                Traditional Soft Pretzels with Sweet Beer Cheese
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id arcu viverra, faucibus orci nec, euismod eros. Praesent nec
                diam venenatis...
              </p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="border rounded-lg shadow overflow-hidden">
            <Image
              src="/unsplash_XoByiBymX20.png"
              alt="Burger"
              width={400}
              height={830}
            />
            <div className="p-4">
              <div className="flex items-center flex-wrap space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Image
                    src="/calendar.png"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">Feb 14, 2022</span>
                </span>
                <span className="flex items-center mt-2 lg:mt-0">
                  <Image
                    src="/UserCirclePlus.png"
                    alt="Admin Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">By Admin</span>
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                The Ultimate Hangover Burger: Egg in a Hole Burger
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id arcu viverra, faucibus orci nec, euismod eros. Praesent nec
                diam venenatis...
              </p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="border rounded-lg shadow overflow-hidden">
            <Image
              src="/Mask Group (6).png"
              alt="Burger"
              width={400}
              height={830}
            />
            <div className="p-4">
              <div className="flex items-center flex-wrap space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Image
                    src="/calendar.png"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">Feb 14, 2022</span>
                </span>
                <span className="flex items-center mt-2 lg:mt-0">
                  <Image
                    src="/UserCirclePlus.png"
                    alt="Admin Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">By Admin</span>
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                My Favorite Easy Black Pizza Toast Recipe
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id arcu viverra, faucibus orci nec, euismod eros. Praesent nec
                diam venenatis...
              </p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Search Bar */}
          <div className="border rounded-lg shadow p-4 flex items-center">
            <input
              type="text"
              placeholder="Search Your Keyword"
              className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>

          {/* Author Section */}
          <div className="border rounded-lg shadow p-4 text-center">
            <Image
              src="/content.png"
              alt="Author"
              width={424}
              height={423}
              className="rounded-full mx-auto"
            />
          </div>

          {/* Recent Posts */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/unsplash_J9lD6FS6_cs.png"
                  alt="Post 1"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="text-sm text-gray-600 font-bold">
                    Post Title One
                  </p>
                  <p className="text-xs text-gray-400">June 20, 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/Mask Group (2).png"
                  alt="Post 2"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="text-sm text-gray-600 font-bold">
                    Post Title Two
                  </p>
                  <p className="text-xs text-gray-400">June 18, 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/unsplash_mmnKI8kMxpc.png"
                  alt="Post 3"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="text-sm text-gray-600 font-bold">
                    Post Title Three
                  </p>
                  <p className="text-xs text-gray-400">June 15, 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/unsplash_cLpdEA23Z44.png"
                  alt="Post 4"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="text-sm text-gray-600 font-bold">
                    Post Title Four
                  </p>
                  <p className="text-xs text-gray-400">June 10, 2022</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Filter by Menu */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Filter By Menu</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/unsplash_WHtVB-RiW2I.png"
                    alt="Chicken Fry"
                    width={50}
                    height={50}
                  />
                  <span className="ml-4 text-sm text-gray-600">
                    Chicken Fry
                  </span>
                </div>
                <span className="text-sm text-gray-600">26</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/unsplash_W10_NCsLVyc.png"
                    alt="Burger Food"
                    width={50}
                    height={50}
                  />
                  <span className="ml-4 text-sm text-gray-600">
                    Burger Food
                  </span>
                </div>
                <span className="text-sm text-gray-600">46</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/unsplash_On2VseHUDXw.png"
                    alt="Pizza"
                    width={50}
                    height={50}
                  />
                  <span className="ml-4 text-sm text-gray-600">Pizza</span>
                </div>
                <span className="text-sm text-gray-600">16</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/unsplash_sc5sTPMrVfk.png"
                    alt="Fresh Fruits"
                    width={50}
                    height={50}
                  />
                  <span className="ml-4 text-sm text-gray-600">
                    Fresh Fruits
                  </span>
                </div>
                <span className="text-sm text-gray-600">36</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/Mask Group (6).png"
                    alt="Vegetables"
                    width={50}
                    height={50}
                  />
                  <span className="ml-4 text-sm text-gray-600">Vegetables</span>
                </div>
                <span className="text-sm text-gray-600">16</span>
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Sandwich
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Tikka
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">Bbq</span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Restaurant
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Chicken Sharma
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Health
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Fastfood
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Food
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Pizza
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Burger
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Chicken
              </span>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <Image
                src="/unsplash_MqT0asuoIcU.png"
                alt="Gallery 1"
                width={300}
                height={300}
              />
              <Image
                src="/Mask Group (1).png"
                alt="Gallery 2"
                width={100}
                height={100}
              />
              <Image
                src="/product-20.png"
                alt="Gallery 3"
                width={100}
                height={100}
              />
              <Image
                src="/unsplash_WHtVB-RiW2I.png"
                alt="Gallery 4"
                width={100}
                height={100}
              />
              <Image
                src="/Mask Group (3).png"
                alt="Gallery 5"
                width={100}
                height={100}
              />
              <Image
                src="/Mask Group (6).png"
                alt="Gallery 6"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Follow Us */}
          <div className="border rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-red-600 text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-red-500 text-2xl">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Support Section */}
      <div className="flex flex-col bg-black lg:flex-row items-center px-12 py-8 justify-between gap-8">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-xl text-white font-bold">
            <span className="text-[#ff9f0d]">Still</span> You Need Our Support?
          </h4>
          <p className="text-white text-sm">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Right Input and Button */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-3 w-full max-w-[250px] lg:max-w-[300px] bg-white text-black border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
          />
          <button className="px-6 py-3 bg-[#ff9f0d] text-black font-bold rounded-r-md hover:bg-[#ffa500] transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
