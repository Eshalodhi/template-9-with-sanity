import Link from "next/link";
import Image from "next/image";
import Navmenu from "@/components//navmenu";
import Footer from "@/components/footer";

export default function Checkout() {
  return (
    <div><Navmenu />

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
        <h1 className="text-2xl md:text-4xl font-bold">Checkout page</h1>
        <p className="text-yellow-500 mt-2 text-sm md:text-base">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt; checkout
        </p>
      </div>
    </section>

    <div className="container mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Shipping Address */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>

          {/* Shipping Address Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">First name</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">Last name</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email address</label>
              <input
                type="email"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold mb-1">Phone number</label>
              <input
                type="tel"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-1">Company</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold mb-1">Country</label>
              <select className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500">
                <option>Choose country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold mb-1">City</label>
              <select className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500">
                <option>Choose city</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-semibold mb-1">Zip code</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Address 1 */}
            <div>
              <label className="block text-sm font-semibold mb-1">Address 1</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Address 2 */}
            <div>
              <label className="block text-sm font-semibold mb-1">Address 2</label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange-500"
              />
            </div>
          </form>

          {/* Billing Address Checkbox */}
          <div className="mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border rounded-md focus:ring focus:ring-orange-500"
              />
              <span className="text-sm font-semibold">Same as shipping address</span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <Link href="/cart">
              <button className="flex items-center px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                &#8592; Back to cart
              </button>
            </Link>
            <Link href="/error404"> 
            <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Proceed to shipping &#8594;
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div>
          <div className="border p-4 rounded-lg shadow-sm">
            {/* Order Summary Items */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <Image
                  src="/product_img.png" // Replace with correct image path
                  alt="Product Image"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-sm">Chicken Tikka Kabab</h3>
                  <p className="text-xs text-gray-500">150 gm net</p>
                  <p className="text-xs text-gray-500">$50</p>
                </div>
              </div>
            ))}

            {/* Order Calculation */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Sub-total</span>
                <span>$130</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Discount</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Tax</span>
                <span>$54.76</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>432.65$</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 flex items-center justify-center">
              Place an order &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
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
      <Footer/>
    </div>
  );
}
