'use client';

import Footer from "@/components/footer";
import Navmenu from "@/components/navmenu";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // Get the 'type' query parameter as a string

  // Define dynamic titles based on `type`
  const titleMap: { [key: string]: string } = {
    support: "Contact Support",
    sales: "Contact Sales",
    feedback: "Send Feedback",
  };

  // Safely use `type` and provide a default fallback
  const pageTitle = type && titleMap[type] ? titleMap[type] : "Contact Us";

  // Format breadcrumb display
  const breadcrumbType =
    type && typeof type === "string"
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : "Contact";

  return (
    <div>
      <Navmenu />
      {/* Hero Section */}
      <section className="relative w-full h-[250px] md:h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">{pageTitle}</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; {breadcrumbType}
          </p>
        </div>
      </section>
      {/* Contact Form Section */}
      <section>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold text-center mb-6">{pageTitle}</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
