"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Assuming 'client' is correctly configured
import Image from "next/image";

type Product = {
  image: any;
  _id: string;
  id: string; // Product ID
  name: string;
  description: string;
  price: number;
  discountPercentage: number; // Discount field
  imagePath: string; // Ensure this is a valid string URL
  isFeaturedProduct: boolean; // Featured product flag
  stockLevel: number; // Stock level
  category: string; // Product category
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetching products directly from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == 'product'] []{
        _id,
        id,
        name,
        description,
        price,
        discountPercentage,
        "imagePath": image.asset->url,
        isFeaturedProduct,
        stockLevel,
        category
      }`;

      const productsData = await client.fetch(query);
      setProducts(productsData); // Set the products in state

      // Log the imagePath to check if the URLs are valid
      console.log("Fetched Products: ", productsData); // Check image URLs in the console
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-[42px] my-[1rem] text-center font-bold underline">
        Our Shop
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          // Ensure product.price is a number and handle the discount price calculation correctly
          const price = parseFloat(product.price.toString()); // Convert price to number
          const discountedPrice = (
            price - (price * product.discountPercentage) / 100
          ).toFixed(2); // toFixed() works fine here because we are working with a string result

          return (
            <div
              className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
              key={product._id}
            >
              {/* Check if the imagePath is valid */}
              {product.image ? (
                <Image
                  src={product.image} // Correct image URL from Sanity
                  alt={product.name}
                  className="w-60"
                  height={500}
                  width={500}
                />
              ) : (
                <div className="w-60 h-60 bg-gray-200 flex justify-center items-center">
                  <span>No Image</span>
                </div>
              )}

              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className="text-center">{product.description}</p>
              <p className="text-center">
                ${discountedPrice}{" "}
                {product.discountPercentage > 0 && (
                  <span className="line-through text-red-500">
                    ${price.toFixed(2)} {/* This ensures price is displayed correctly */}
                  </span>
                )}
              </p>
              <p className="text-center text-sm text-gray-500">{product.category}</p>
              <p className="text-center text-sm text-gray-500">
                Stock: {product.stockLevel}
              </p>
              <button className="bg-blue-800 text-white w-[8rem] h-[3rem]">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}