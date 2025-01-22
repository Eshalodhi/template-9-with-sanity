import Navbarmenu from "@/components/navmenu";
import Image from "next/image";
import { FaUtensils } from "react-icons/fa";
import Footer from "@/components/footer";

const menuItems = [
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: "560 CAL",
    price: "32$",
  },
  {
    name: "Berries and creme tart",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: "700 CAL",
    price: "43$",
  },
  {
    name: "Tormentoso Bush Pizza Pintoage",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: "1000 CAL",
    price: "14$",
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: "560 CAL",
    price: "35$",
  },
];

const Menu = () => {
  return (
    <div className="w-full">
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
          <h1 className="text-2xl md:text-4xl font-bold">Our Menu</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; Menu
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Rectangle 8874.png" 
            alt="Dish Image"
            width={348}
            height={400}
            className="rounded-lg shadow-lg max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
          />
        </div>

        {/* Menu Items Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center text-orange-500 mr-3 text-2xl mb-6">
            <FaUtensils  />
            <h2 className="text-2xl md:text-3xl font-bold">Starter Menu</h2>
          </div>
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-4 group"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 transition-transform duration-300 group-hover:text-orange-500 group-hover:scale-105">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-700">
                    {item.calories}
                  </p>
                </div>
                <div className="text-orange-500 text-lg sm:text-xl font-bold mt-2 sm:mt-0">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main course */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <div className="flex items-center mb-6">
      <svg
        className="h-6 w-6 text-orange-500 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v2h18V9a2 2 0 00-2-2h-3V6a4 4 0 00-4-4zm0 18c-1.105 0-2 .895-2 2h4c0-1.105-.895-2-2-2zm-2-3a2 2 0 114 0v1a2 2 0 11-4 0v-1z"
        />
      </svg>
      <h2 className="text-2xl md:text-3xl font-bold">Main Course</h2>
    </div>
    <div className="space-y-8">
      {[
        {
          name: "Optic Big Breakfast Combo Menu",
          description: "Toasted French bread topped with romano, cheddar",
          calories: "560 CAL",
          price: "32$",
        },
        {
          name: "Cashew Chicken With Stir-Fry",
          description: "Gorgonzola, ricotta, mozzarella, taleggio",
          calories: "700 CAL",
          price: "43$",
        },
        {
          name: "Vegetables & Green Salad",
          description: "Ground cumin, avocados, peeled and cubed",
          calories: "1000 CAL",
          price: "14$",
        },
        {
          name: "Spicy Vegan Potato Curry",
          description: "Spreadable cream cheese, crumbled blue cheese",
          calories: "560 CAL",
          price: "35$",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-dashed border-gray-300 pb-6"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500">{item.calories}</p>
          </div>
          <div className="text-orange-500 text-lg sm:text-xl font-bold">
            {item.price}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src="/unsplash_-GFCYhoRe48.png"
      width={484}
      height={626}
      alt="Main Course Dish"
      className="rounded-lg shadow-lg object-cover max-w-full h-auto"
    />
  </div>
</section>

{/* Professional Chefs */}
<section className="py-12  text-white">
  <div className="max-w-[1320px] mx-auto">
    <div
      className="relative bg-cover bg-center rounded-lg h-[250px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/unsplash_bpPTlXWTOvg.png")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center gap-20 overflow-x-auto">
        {/* Professional Chefs */}
        <div>
          <div className="mb-2">
            <Image
              src="/chef.png" 
              alt="Professional Chefs"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Items of Food */}
        <div>
          <div className="mb-2">
            <Image
              src="/Iteam of food.png" 
              alt="Items Of Food"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Years of Experience */}
        <div>
          <div className="mb-2">
            <Image
              src="/Years of Experienced.png" 
              alt="Years Of Experience"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          </div>

        {/* Happy Customers */}
        <div>
          <div className="mb-2">
            <Image
              src="/Happy customers.png" 
              alt="Happy Customers"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* desert */}
<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
  {/* Image Section */}
  <div className=" md:w-1/2 flex justify-center">
    <Image
      src="/unsplash_90HdOlGbjck.png" 
      alt="Dessert Dish"
      width={348}
      height={226}
      className="rounded-lg shadow-lg object-cover max-w-full h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <div className="flex items-center mb-6">
      <svg
        className="h-6 w-6 text-orange-500 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v2h18V9a2 2 0 00-2-2h-3V6a4 4 0 00-4-4zm0 18c-1.105 0-2 .895-2 2h4c0-1.105-.895-2-2-2zm-2-3a2 2 0 114 0v1a2 2 0 11-4 0v-1z"
        />
      </svg>
      <h2 className="text-2xl md:text-3xl font-bold">Dessert</h2>
    </div>
    <div className="space-y-8">
      {[
        {
          name: "Fig and lemon cake",
          description: "Toasted French bread topped with romano, cheddar",
          calories: "560 CAL",
          price: "32$",
        },
        {
          name: "Creamy mascarpone cake",
          description: "Gorgonzola, ricotta, mozzarella, taleggio",
          calories: "700 CAL",
          price: "43$",
        },
        {
          name: "Pastry, blueberries, lemon juice",
          description: "Ground cumin, avocados, peeled and cubed",
          calories: "1000 CAL",
          price: "14$",
        },
        {
          name: "Pain au chocolat",
          description: "Spreadable cream cheese, crumbled blue cheese",
          calories: "560 CAL",
          price: "35$",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-dashed border-gray-300 pb-6"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500">{item.calories}</p>
          </div>
          <div className="text-orange-500 text-lg sm:text-xl font-bold">
            {item.price}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* drinks */}
<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <div className="flex items-center mb-6">
      <svg
        className="h-6 w-6 text-orange-500 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v2h18V9a2 2 0 00-2-2h-3V6a4 4 0 00-4-4zm0 18c-1.105 0-2 .895-2 2h4c0-1.105-.895-2-2-2zm-2-3a2 2 0 114 0v1a2 2 0 11-4 0v-1z"
        />
      </svg>
      <h2 className="text-2xl md:text-3xl font-bold">Drinks</h2>
    </div>
    <div className="space-y-8">
      {[
        {
          name: "Caffè macchiato",
          description: "Toasted French bread topped with romano, cheddar",
          calories: "560 CAL",
          price: "32$",
        },
        {
          name: "Aperol Spritz Capacianno",
          description: "Gorgonzola, ricotta, mozzarella, taleggio",
          calories: "700 CAL",
          price: "43$",
        },
        {
          name: "Caffe Latte Campuri",
          description: "Ground cumin, avocados, peeled and cubed",
          calories: "1000 CAL",
          price: "14$",
        },
        {
          name: "Tormentoso BushTea Pintoage",
          description: "Spreadable cream cheese, crumbled blue cheese",
          calories: "560 CAL",
          price: "35$",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-dashed border-gray-300 pb-6"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500">{item.calories}</p>
          </div>
          <div className="text-orange-500 text-lg sm:text-xl font-bold">
            {item.price}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src="/unsplash_akwA-GPF710.png"
      width={348}
      height={626}
      alt="Drinks"
      className="rounded-lg shadow-lg object-cover max-w-full h-auto"
    />
  </div>
</section>

{/* patners and clients */}

<section className="py-12 text-center">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <div className="mb-8">
      <p className="text-sm text-gray-500 uppercase">Partners & Clients</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        We work with the best people
      </h2>
    </div>

    {/* Logos */}
    <div className="flex flex-nowrap justify-center items-center gap-8 overflow-x-auto">
      <div className="w-24 sm:w-28">
        <Image
          src="/image 2.png" 
          width={166}
          height={268}
          alt="Restaurant Logo"
          className="mx-auto"
        />
      </div>
      <div className="w-24 sm:w-28">
        <Image
          src="/image 60.png" 
          width={166}
          height={268}
          alt="Bakery Logo"
          className="mx-auto"
        />
      </div>
      <div className="w-24 sm:w-28">
        <Image
          src="/image 56.png"
          alt="Fork & Spoon Logo"
          width={166}
          height={268}
          className="mx-auto"
        />
      </div>
      <div className="w-24 sm:w-28">
        <Image
          src="/image 58.png" 
          width={166}
          height={268}
          alt="Wolf Coffee Logo"
          className="mx-auto"
        />
      </div>
      <div className="w-24 sm:w-28">
        <Image
          src="/image 57.png"
          width={166}
          height={268}
          alt="Bistro Logo"
          className="mx-auto"
        />
      </div>
      <div className="w-24 sm:w-28">
        <Image
          src="/image 59.png" 
          width={166}
          height={268}
          alt="Cupcake Bakery Logo"
          className="mx-auto"
        />
      </div>
    </div>
  </div>
</section>

<section className="bg-black text-white py-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
    {/* Left Text */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h4 className="text-2xl font-bold">
        <span className="text-[#ff9f0d]">Still</span> You Need Our Support?
      </h4>
      <p className="text-gray-400 text-sm">
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
</section>

<Footer  />

    </div>
  );
};

export default Menu;