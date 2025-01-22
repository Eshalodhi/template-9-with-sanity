"use client";

import Footer from "@/components/footer";
import { useState } from "react";
import Image from "next/image";
import Navmenu from "@/components//navmenu";
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  rating: number;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Burger",
      price: 35,
      quantity: 1,
      total: 221.0,
      image: "/product_img (1).png",
      rating: 4,
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25,
      quantity: 1,
      total: 521.0,
      image: "/product_img (2).png",
      rating: 3,
    },
    {
      id: 3,
      name: "Pizza",
      price: 15,
      quantity: 1,
      total: 421.0,
      image: "/product_img (3).png",
      rating: 5,
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 45,
      quantity: 1,
      total: 521.0,
      image: "/product_img (4).png",
      rating: 4,
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 15,
      quantity: 1,
      total: 325.0,
      image: "/product_img.png",
      rating: 3,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [subtotal, setSubtotal] = useState(120);
  const [total, setTotal] = useState(205);

  const handleQuantityChange = (id: number, delta: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(item.quantity + delta, 1);
        return {
          ...item,
          quantity: newQuantity,
          total: newQuantity * item.price,
        };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotals(updatedItems);
  };

  const handleRemove = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotals(updatedItems);
  };

  const updateTotals = (items: CartItem[]) => {
    const newSubtotal = items.reduce((sum, item) => sum + item.total, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return <div>{stars}</div>;
  };

  return (
    <div>
      <Navmenu />

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
          <h1 className="text-2xl md:text-4xl font-bold">Shopping cart</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; Shopping cart
          </p>
        </div>
      </section>

      <section className="container mx-auto p-4">
        {/* Cart Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="mr-4"
                      width={64}
                      height={64}
                    />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm">{renderStars(item.rating)}</div>
                    </div>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4 flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-4 font-semibold">
                    ${item.total.toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon & Total Bill Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Coupon Section */}
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-2">Coupon Code</h3>
            <p className="text-gray-600 text-sm mb-4">
              Enter your coupon code to apply the discount.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Here code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border p-2 flex-1 rounded-l"
              />
              <button className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill */}
          <div className="p-4 border rounded">
            <h3 className="font-bold mb-4">Total Bill</h3>
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
  <button
    type="button"
    className="w-full mt-6 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
  >
    Proceed to Checkout
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
    </div>
  );
}
