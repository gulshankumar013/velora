"use client";

import React, { useState } from "react";

const product = {
  id: 1,
  name: "Royal Kundan Necklace Set",
  price: 6400,
  originalPrice: 8200,
  tag: "Best Selling",
  description:
    "An exquisite royal kundan necklace set crafted for weddings, festive occasions and luxury styling.",
  details: [
    "Handcrafted premium kundan work",
    "Gold plated finish",
    "Lightweight and skin friendly",
    "Comes with matching earrings",
  ],
  images: [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a3d0a",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
  ],
};

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="bg-[#fafafa] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT — IMAGE GALLERY */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-28 object-cover cursor-pointer border rounded-lg transition ${
                  activeImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={activeImage}
                className="w-full h-[550px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — PRODUCT INFO */}
        <div className="flex flex-col justify-center">
          {product.tag && (
            <span className="inline-block w-fit mb-3 px-3 py-1 text-xs text-white bg-emerald-500 rounded-full">
              {product.tag}
            </span>
          )}

          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            {product.originalPrice && (
              <span className="line-through text-gray-400 text-lg">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-3xl font-bold text-red-500">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <ul className="space-y-2 mb-8">
            {product.details.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-black py-3 rounded-xl hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>

          {/* TRUST INFO */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center text-xs text-gray-500">
            <div>
              <p className="font-medium text-black">Free Shipping</p>
              On orders above Rs. 999
            </div>
            <div>
              <p className="font-medium text-black">Easy Returns</p>
              7 days return policy
            </div>
            <div>
              <p className="font-medium text-black">Secure Payment</p>
              100% protected checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
