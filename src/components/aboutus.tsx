import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";

export default function FoodPage() {
  return (
    <div className="bg-black px-4 text-white">
      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-[GreatVibes] text-[32px] leading-[40px] text-[#ff9f0d] mb-2">
              About us
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              We Create the Best Foody Product
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <p className="text-gray-400 mb-6">
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
            <p className="text-gray-400 mb-6">
              Quisque diam pellentesque bibendum non dui volutpat fringilla
              bibendum.
            </p>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
              Read More
            </button>
          </div>
          {/* Image Content */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image
                src="/unsplash_fdlZBWIP0aM.png"
                alt="Main Food"
                width={400}
                height={330}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/unsplash_jpkfc5_d-DI.png"
                alt="Food Item"
                width={322}
                height={194}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/unsplash_mAQZ3X_8_l0.png"
                alt="Food Item"
                width={322}
                height={194}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Food Item Section */}

      <section className="py-12 bg-black text-white">
        {/* Section Header */}
        <div className="max-w-[1320px] mx-auto text-center mb-8">
          <h2 className="font-[GreatVibes] text-[32px] leading-[40px] text-[#ff9f0d] mb-2">
            Food Category
          </h2>
          <h3 className="text-4xl font-bold">Choose Food Item</h3>
        </div>

        {/* Responsive Food Items Grid */}
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[
            {
              src: "/unsplash_-lHZUkiWM74.png",
              alt: "Food 1",
              label: "Save 30%",
              description: "Fast Food Dish",
            },
            {
              src: "/unsplash_dphM2U1xq0U.png",
              alt: "Food 2",
              description: "Fast Food Dish",
            },
            {
              src: "/unsplash_MRHyv-hHxgk.png",
              alt: "Food 3",
              description: "Fast Food Dish",
            },
            {
              src: "/unsplash_q54Oxq44MZs.png",
              alt: "Food 4",
              description: "Fast Food Dish",
            },
          ].map((food, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center justify-center"
            >
              <Image
                src={food.src}
                alt={food.alt}
                width={300}
                height={200}
                className="w-full rounded-lg shadow-lg object-cover"
              />
              {/* Overlay */}
              <span className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                {food.label && (
                  <span className="bg-[#ff9f0d] text-white text-xs px-2 py-1 rounded-lg mb-2">
                    {food.label}
                  </span>
                )}
                <p className="text-white font-bold">{food.description}</p>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Extraordinary Taste Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-4 gap-2">
            {/* Large Image */}
            <div className="col-span-2 row-span-2">
              <Image
                src="/unsplash_lP5MCM6nZ5A.png"
                alt="Tacos"
                width={346}
                height={356}
                className="w-full h-[356px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Second Image */}
            <div className="col-span-2">
              <Image
                src="/unsplash_dphM2U1xq0U.png"
                alt="Burger"
                width={346}
                height={176}
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Third Image */}
            <div className="col-span-1">
              <Image
                src="/unsplash_CLMpC9UhyTo.png"
                alt="Chicken"
                width={224}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Fourth Image */}
            <div className="col-span-1">
              <Image
                src="/unsplash_-GFCYhoRe48.png"
                alt="Cheese Burger"
                width={224}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Fifth Image */}
            <div className="col-span-1">
              <Image
                src="/unsplash_tzl1UCXg5Es.png"
                alt="Salad"
                width={224}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Sixth Image */}
            <div className="col-span-1">
              <Image
                src="/unsplash_mmnKI8kMxpc.png"
                alt="Salad"
                width={224}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-[GreatVibes] text-[32px] leading-[40px] text-[#ff9f0d] mb-4">
              Why Choose us
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              <span className="text-[#ff9f0d]">Ex</span>tra ordinary Taste{" "}
              <br />
              And Experienced
            </h3>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 text-center mb-8">
              <div>
                <div className="bg-[#ff9f0d] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Image
                    src="/Hamburger.png"
                    alt="Fast Food"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <p className="font-medium">Fast Food</p>
              </div>
              <div>
                <div className="bg-[#ff9f0d] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Image
                    src="/Cookie.png"
                    alt="Lunch"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <p className="font-medium">Lunch</p>
              </div>
              <div>
                <div className="bg-[#ff9f0d] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Image
                    src="/Wine.png"
                    alt="Dinner"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover"
                  />
                </div>
                <p className="font-medium">Dinner</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white text-black flex items-center justify-between rounded-lg shadow-lg py-4 px-6">
              <span className="text-[#ff9f0d] text-5xl font-bold">30+</span>
              <div className="text-lg">
                <p>Years of</p>
                <p className="font-bold">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* professional cheif */}
      <section className="py-12 bg-black text-white">
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
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-20 text-center">
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
                    src="/Years of Experienced.png" // Replace with your actual image path
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
                    src="/Happy customers.png" // Replace with your actual image path
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
      {/* Choose and pick section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-[1320px] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-[GreatVibes] text-[32px] text-[#ff9f0d]">
              Choose & pick
            </h2>
            <h3 className="text-3xl font-bold">
              <span className="font-[GreatVibes] text-[32px] leading-[40px] text-[#ff9f0d]">
                Fr
              </span>
              om Our Menu
            </h3>
          </div>

          {/* Menu Tabs */}
          <div className="flex justify-center gap-8 text-lg mb-12">
            <button className="text-[#ff9f0d] font-medium">Breakfast</button>
            <button className="text-gray-400 hover:text-white">Lunch</button>
            <button className="text-gray-400 hover:text-white">Dinner</button>
            <button className="text-gray-400 hover:text-white">Dessert</button>
            <button className="text-gray-400 hover:text-white">Drink</button>
            <button className="text-gray-400 hover:text-white">Snack</button>
            <button className="text-gray-400 hover:text-white">Soups</button>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Featured Image */}
            <div className="flex justify-center ">
              <Image
                src="/unsplash_Lv174o7fn7Y.png"
                alt="Featured Salad"
                layout="intrinsic"
                width={365}
                height={362}
                className="rounded-full shadow-lg "
              />
            </div>

            {/* Right: Menu Items */}
            <div className="grid grid-cols-2 gap-6">
              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf.png"
                  alt="Lettuce Leaf"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg "
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (1).png"
                  alt="Glow Cheese"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (2).png"
                  alt="Fresh Breakfast"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (3).png"
                  alt="Italian Pizza"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (4).png"
                  alt="Mild Butter"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (5).png"
                  alt="Slice Beef"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (6).png"
                  alt="Fresh Bread"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>

              {/* Menu Item */}
              <div className="flex items-center gap-4">
                <Image
                  src="/Lettuce Leaf (7).png"
                  alt="Mushroom Pizza"
                  layout="intrinsic"
                  width={365}
                  height={79}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Chef */}
      <section
        className=" py-12 bg-cover bg-right-bottom text-white "
        style={{
          backgroundImage: "url('/unsplash_INjdgkCwHp0 (1).png')",
        }}
      >
        <div className="max-w-[1320px] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-[GreatVibes] text-[32px] text-[#ff9f0d]">
              Chefs
            </h2>
            <h3 className="text-4xl font-bold">
              <span className="text-[#ff9f0d]">Me</span>et Our Chef
            </h3>
          </div>

          {/* Chef Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chef 1 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Rectangle 8863.png"
                alt="D. Eastwood"
                width={312}
                height={391}
                className="w-full h-[391px] object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">D. Eastwood</h4>
                <p className="text-gray-500 text-sm">Chief Chef</p>
              </div>
            </div>

            {/* Chef 2 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/393201b3dc9e27fc4fb0c36fcf325121.jpg"
                alt="D. Scoreish"
                width={312}
                height={391}
                className="w-full h-[391px] object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">D. Scoreish</h4>
                <p className="text-gray-500 text-sm">Assistant Chef</p>
              </div>
            </div>

            {/* Chef 3 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Rectangle 8863 (1).png"
                alt="M. William"
                width={312}
                height={391}
                className="w-full h-[391px] object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">M. William</h4>
                <p className="text-gray-500 text-sm">Advertising Chef</p>
              </div>
            </div>

            {/* Chef 4 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Rectangle 8863 (2).png"
                alt="W. Readfroad"
                width={312}
                height={391}
                className="w-full h-[391px] object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">W. Readfroad</h4>
                <p className="text-gray-500 text-sm">Chef</p>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="text-center mt-8">
            <Link href="../../our-cheif">
              <button className="px-6 py-3 bg-transparent border border-[#ff9f0d] text-[#ff9f0d] rounded-lg hover:bg-[#ff9f0d] hover:text-black transition duration-300">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-black text-white">
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

      <section
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('/unsplash_E6DsqnZbZ4o.png')", 
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row items-end justify-end gap-8">

          {/* Right Section: Text Content */}
          <div className="w-full md:w-1/2 text-end md:text-right">
            <h3 className="font-[GreatVibes] text-[28px] md:text-[32px] text-[#ff9f0d] mb-2">
              Restaurant Active Process
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-[#ff9f0d]">We</span> Document Every Food
              Bean Process until it is saved
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Read More Button */}
              <button className="px-6 py-3 bg-transparent border border-[#ff9f0d] text-[#ff9f0d] rounded-lg hover:bg-[#ff9f0d] hover:text-black transition duration-300">
                Read More
              </button>

              {/* Play Video Button */}
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 border-2 border-[#ff9f0d] rounded-full flex items-center justify-center bg-[#ff9f0d] hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                  <svg
                    className="h-5 w-5 text-white hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white hover:text-[#ff9f0d] transition duration-300 cursor-pointer">
                  Play Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog post */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-[1320px] mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="font-[GreatVibes] text-[32px] text-[#ff9f0d]">
              Blog Post
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#ff9f0d]">Latest</span> News & Blog
            </h3>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/unsplash_dphM2U1xq0U.png"
                width={423}
                height={349}
                alt="Blog Post 1"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">10 February 2022</p>
                <h4 className="text-lg font-bold mb-4">
                  Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                </h4>
                <Link href="/blog" className="text-[#ff9f0d] hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Image Placeholder.png"
                width={423}
                height={349}
                alt="Blog Post 2"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">10 February 2022</p>
                <h4 className="text-lg font-bold mb-4">
                  Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                </h4>
                <Link href="/blog" className="text-[#ff9f0d] hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/unsplash_lP5MCM6nZ5A.png"
                alt="Blog Post 3"
                width={423}
                height={349}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">10 February 2022</p>
                <h4 className="text-lg font-bold mb-4">
                  Curabitur rutrum velit ac congue malesuada
                </h4>
                <Link href="/blog" className="text-[#ff9f0d] hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h4 className="text-xl font-bold">
                <span className="text-[#ff9f0d]">Still</span> You Need Our
                Support?
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
        </div>
      </section>
      <Footer />
    </div>
  );
}
