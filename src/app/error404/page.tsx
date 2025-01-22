import Link from 'next/link';
import Navmenu from "@/components/navmenu"
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Error404() {
  return (
    <>
    <Navmenu/>

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
              <h1 className="text-2xl md:text-4xl font-bold">Error 404</h1>
              <p className="text-yellow-500 mt-2 text-sm md:text-base">
                <a href="/" className="hover:underline">
                  Home
                </a>{" "}
                &gt; 404
              </p>
            </div>
          </section>

    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center ">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Looks like something went wrong</h2>
      <p className="text-gray-600 mb-4">
        Page cannot be found! We&apos;ll have it figured out in no time. Meanwhile, check out these fresh ideas:
      </p>
      <Link href="/" passHref>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600">
          Go to home
        </button>
      </Link>
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
          <Footer />
    </>
  );
}
