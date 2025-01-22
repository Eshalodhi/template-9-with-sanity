import Image from "next/image";
import Navbarmenu from "@/components/navmenu";
import { FaPlay } from "react-icons/fa";
import Footer from "@/components/footer";
import Link from "next/link";

export default function About() {
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
          <h1 className="text-2xl md:text-4xl font-bold">About</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; About
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20">
        {/* Image Grid */}
        <div className="grid grid-rows-2 grid-cols-2 gap-4 md:w-1/2">
          <div className="row-span-2 h-[500px] w-[230px] relative">
            <Image
              src="/unsplash_lP5MCM6nZ5A.png" 
              alt="Tacos"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="h-100 bottom-10w-full relative">
            <Image
              src="/unsplash_CLMpC9UhyTo.png" 
              alt="Fried food"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className=" h-60 w-40  relative">
            <Image
              src="/Mask Group (1).png" 
              alt="Salad"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8  md:mt-0 md:pl-12">
          <h3 className="text-orange-500 font-[GreatVibes] text-[30px] font-medium text-sm mb-2">
            About us
          </h3>
          <h2 className="text-3xl md:text-[48px] font-bold leading-tight">
            Food is an important part <br /> Of a balanced Diet
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-medium">
              Show more
            </button>
            <button className="flex items-center gap-2 text-orange-500 font-medium">
              <FaPlay /> Watch video
            </button>
          </div>
        </div>
      </section>

      {/* why  we chose us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          <div className="mb-8">
            <Image
              src="/unsplash_3iexvMShGfQ.png"
              alt="Featured Dish"
              width={1320}
              height={386}
              className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/Student.png"
                  width={309}
                  height={271}
                  alt="Best Chef"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Chef</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/Coffee.png"
                  width={309}
                  height={382}
                  alt="120 Item Food"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">120 Item Food</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/Person.png"
                  alt="Clean Environment"
                  width={312}
                  height={398}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Environment</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-center py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/Bg (2).png')" }}
        ></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white">Team Member</h2>
          <p className="text-white mt-4 mb-12 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sodales tristique sapien.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-[100px]">
            {[
              {
                name: "Mark Henry",
                role: "Owner",
                img: "/unsplash_v3OlBE6-fhU.png",
                
              },
              {
                name: "Lucky Helen",
                role: "Chef",
                img: "/unsplash_v3OlBE6-fhU.png",
                
              },
              {
                name: "Moon Henry",
                role: "Founder",
                img: "/unsplash_v3OlBE6-fhU.png",
                
              },
              {
                name: "Tom Morrow",
                role: "Specialist",
                img: "/unsplash_v3OlBE6-fhU.png",
                
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
          height={200}
          objectFit="cover"
                  className="w-full h-100 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <div className="flex justify-center gap-2 p-4">
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    {/* Team icons */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12  text-black">
        <div className="max-w-[1320px] mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="font-[GreatVibes] text-[32px] text-[#ff9f0d]">
              Testimonials
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold">
              What our client are saying
            </h3>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white text-black rounded-lg shadow-lg max-w-[800px] mx-auto p-6 md:p-8">
            {/* User Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src="/Ellipse 6.png"
                width={132}
                height={133}
                alt="Client"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            {/* Quote Icon */}
            <div className="text-center mt-12 mb-6">
              <span className="text-[#ff9f0d] text-4xl md:text-5xl">❝</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-center text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            {/* Rating */}
            <div className="text-center mb-6">
              <span className="text-[#ff9f0d] text-xl md:text-2xl">★★★★☆</span>
            </div>

            {/* User Name and Title */}
            <div className="text-center">
              <h4 className="text-lg md:text-xl font-bold">Alamin Hasan</h4>
              <p className="text-gray-500 text-sm">Food Specialist</p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#ff9f0d] rounded-full"></span>
            <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-500 rounded-full"></span>
            <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-500 rounded-full"></span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Our Food Menu</h2>
          <p className="text-gray-600 mt-4 mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`text-lg font-semibold ${
                    index === 0
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-4"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-orange-500">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-gray-600">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-gray-400 text-sm">560 CAL</p>
                </div>
                <div className="text-right">
                  <p className="text-orange-500 font-bold text-xl">32$</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="../../menu">
            <button className="px-8 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full text-lg font-semibold">
              View Menu
            </button>
            </Link>
          </div>
        </div>
      </section>
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
