import Navmenu from "@/components/navmenu";
import Image from "next/image";
import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";

interface Params {
  params: { name: string };
}

interface Chef {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  description: string;
  available: string;
  image: string;
}

export default async function Ourchef({ params }: Params) {
  const { name } = params;
  const response = await client
    .fetch(
      `*[_type == 'chef']{
        'name': name, 'position': position, 'specialty': speciality, 'image': image.asset->url
      }`
    )
    .catch((err) => {
      console.error("Error fetching chefs:", err);
      return [];
    });

  const data: Chef[] = response;

  return (
    <div>
      <Navmenu />
      <section className="relative w-full h-[250px] md:h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Hero Image"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Our Chef</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; Chef
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 sm:px-6 lg:px-8">
          {data.map((product: Chef, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={312}
                height={391}
                className="w-full h-[391px] object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-500 text-sm">{product.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <div className="flex flex-col bg-black lg:flex-row items-center px-12 py-8 justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-xl text-white font-bold">
            <span className="text-[#ff9f0d]">Still</span> You Need Our Support?
          </h4>
          <p className="text-white text-sm">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

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
