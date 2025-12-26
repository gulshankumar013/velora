"use client";

import Image from "next/image";
import { X, Heart, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";

const Wishlist = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "High Heel Black Sandal",
      price: 11000,
      img: "/p1.webp",
    },
    {
      id: 2,
      name: "Runner Women Pink Shoes",
      price: 6000,
      img: "/p2.webp",
    },
    {
      id: 3,
      name: "Runner Profoam Running Shoes",
      price: 6000,
      img: "/p3.webp",
    },
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">

      {/* Breadcrumb */}
      <div className="px-10 py-4 text-sm text-gray-600">
        Home <span className="mx-2">›</span> <span className="font-semibold">Wishlist</span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-10">Wishlist</h2>

      {/* Wishlist Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">

        {items.map((item) => (
          <div key={item.id} className="relative group">

            {/* Product Card */}
            <div className="bg-[#f7f7f7] rounded-md flex justify-center py-6 h-80">
              <Image src={item.img} alt={item.name} width={200} height={200} className="object-contain" />
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(item.id)}
              className="absolute top-4 right-4 bg-black text-white p-1 rounded-full hover:bg-gray-800"
            >
              <X size={20} />
            </button>

            {/* Hover Icons */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
              <button className="bg-black text-white p-2 rounded-full">
                <ShoppingBag size={16} />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <Search size={16} />
              </button>
            </div>

            {/* Name & Price */}
            <p className="text-center mt-4 text-sm font-medium text-gray-800">{item.name}</p>
            <p className="text-center text-sm font-semibold text-gray-900">
              Rs. {item.price.toLocaleString()}
            </p>
          </div>
        ))}

      </div>

      {/* Bottom Features */}
      <div className="w-full bg-[#e88f8f] text-white mt-14 py-4">
        <div className="max-w-6xl mx-auto flex justify-between text-sm font-medium">

          <div className="flex items-center gap-2">
            <span className="text-xl">↩</span> EASY & FREE RETURNS
          </div>

          <div className="flex items-center gap-2">
            🎁 FREE GIFT WRAPPING
          </div>

          <div className="flex items-center gap-2">
            ✔ SATISFIED OR REFUNDED
          </div>

          <div className="flex items-center gap-2">
            🔒 100% SECURE PAYMENTS
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wishlist;
