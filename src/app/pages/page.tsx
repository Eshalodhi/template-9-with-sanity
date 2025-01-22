import Navmenu from "@/components/navmenu";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Pages() {
  return (
    <div>
      <Navmenu />
      {/* Hero Section */}
      <section className="relative w-full h-[250px] md:h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Hero Image"
          fill
  style={{ objectFit: 'cover' }}
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">FAQ Page</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; faq
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto p-4 border-2 ">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Questions Look Here
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQs */}
            {[
              {
                question: "How we serve food?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
              {
                question: "How can we get in touch with you?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
              {
                question: "How is our food quality?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
              {
                question: "What will be delivered? And When?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
              {
                question: "How do we give home delivery?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
              {
                question: "Is this restaurant 24 hours open?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <button className="text-2xl text-gray-400">+</button>
                </div>
                <p className="mt-2 text-gray-600">{item.content}</p>
              </div>
            ))}
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
      </div>
  );
}
