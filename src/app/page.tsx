import Navbar from "../components/navbar";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import Aboutus from "../components/aboutus";
// import Footer from "./component/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="relative w-full h-screen">
        {/* Background image with opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(/unsplash_qom5MPOER-I.png)' }}
        ></div>

        {/* Overlay for darker effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-start text-white p-8 h-full">
          {/* Vertical Line with Icons */}
          <div className="relative flex flex-col items-center mr-8">
            {/* Top Line */}
            <div className="h-[100px] w-[2px] bg-gray-400"></div>

            {/* Icons */}
            <div className="relative flex flex-col items-center space-y-6 py-4">
              <div className="text-white hover:text-[#ff9f0d] transition text-2xl">
                <FaFacebookF  />
              </div>
              <div className="text-[#ff9f0d] hover:text-[#ff9f0d] transition text-xl">
                <FaTwitter  />
              </div>
              <div className="text-white hover:text-[#ff9f0d] transition text-xl">
                <FaPinterestP  />
              </div>
            </div>

            {/* Bottom Line */}
            <div className="h-[100px] w-[2px] bg-gray-400"></div>
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            {/* Subheading */}
            <p className="font-[GreatVibes] text-[32px] leading-[40px] text-[#ff9f0d] mb-2">
              It&apos;s Quick & Amusing!
            </p>
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Art of Speed <br />
              Food Quality
            </h1>
            {/* Supporting Paragraph */}
            <p className="text-lg text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>
            {/* Call-to-Action Button */}
            <Link href="/menu">
            <button className="bg-[#ff9f0d] text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-[#e58b00] transition duration-300">
              See Menu
            </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute bottom-0 right-0 md:top-[150px] md:right-[100px] w-[300px] md:w-[500px]">
          <Image
            src="/image.png"
            alt="Dish Image"
            width={500}
            height={500}
            className="rounded-full object-cover"
          />
        
        </div>
        <Aboutus />
       
      </div>
    </div>
  );
}
