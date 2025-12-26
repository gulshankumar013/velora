"use client";

import { SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";



const products = [
  {
    id: 1,
    name: "Royal Kundan Necklace Set",
    price: 6400,
    originalPrice: 8200,
    tag: "Best Selling",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a3d0a",
  },
  {
    id: 2,
    name: "Pearl Bridal Necklace Set",
    price: 5100,
    originalPrice: 8200,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 3,
    name: "Antique Gold Necklace Set",
    price: 6000,
    originalPrice: 8200,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
  },
  {
    id: 4,
    name: "Designer Choker Necklace Set",
    price: 7400,
    originalPrice: null,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1618354691419-1b56d66d5f1f",
  },
];

const NecklaceSet = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="pb-16 relative">

      {/* ================= FULL WIDTH HEADER ================= */}
      <div className="w-full bg-gradient-to-r from-[#fff6e5] to-[#f1fbff]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-1">
          <h2 className="text-4xl font-semibold mb-4">
            Necklace Sets
          </h2>
          <p className="max-w-3xl text-gray-600 leading-relaxed">
            Explore our exclusive collection of artificial jewellery necklace
            sets, blending traditional craftsmanship with modern elegance —
            perfect for weddings, festivals, and special occasions.
          </p>
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-10">
        
        {/* FILTER BAR */}
        <div className="flex justify-between items-center mb-8 text-sm">
          <div
            className="font-medium flex items-center gap-1 cursor-pointer"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal />
            <span>Filter</span>
          </div>


          <div className="italic text-gray-500">
            {products.length} items
          </div>

          <select className="border px-3 py-2 outline-none text-sm">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {/* FILTER SIDEBAR */}
<div
  className={`fixed top-0 left-0 h-full w-full sm:w-80 lg:w-[350px] bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-300 ${
    isFilterOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex justify-between items-center px-3 py-2 border-b">
    <h3 className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
      Filters
    </h3>
    <X className="cursor-pointer w-4 h-4" onClick={() => setIsFilterOpen(false)} />
  </div>

  {/* Scrollable Filter Content */}
  <div className="flex-1 overflow-y-auto px-3 py-2 text-xs space-y-4">
    {/* Categories */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
        Categories
      </h4>
      <ul className="space-y-1">
        {["Women", "Men", "Accessories"].map((cat) => (
          <li key={cat} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Color */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Color</h4>
      <ul className="space-y-1">
        {["Beige", "Black", "Blue", "Green", "Pink", "Red"].map((color) => (
          <li key={color} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{color}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Size */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Size</h4>
      <ul className="grid grid-cols-2 gap-1">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <li key={size} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{size}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Brand */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Brand</h4>
      <ul className="grid grid-cols-2 gap-1">
        {[
          "Attires Hill",
          "Aureliaa",
          "Burberry",
          "Dior",
          "Libaz",
          "Louis Vuitton",
          "Nikke",
          "Omega",
          "Provogue",
          "Zink London",
          "Zodiac",
        ].map((brand) => (
          <li key={brand} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{brand}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Product Type */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
        Product Type
      </h4>
      <ul className="grid grid-cols-2 gap-1">
        {[
          "Accessories",
          "Bag",
          "Dress",
          "Jeans",
          "Shoes",
          "Skirt",
          "Sunglasses",
          "T-Shirts",
          "Top",
          "Watch",
        ].map((type) => (
          <li key={type} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Availability */}
    <div>
      <h4 className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
        Availability
      </h4>
      <ul className="space-y-1">
        {["In Stock", "Out Of Stock"].map((status) => (
          <li key={status} className="flex items-center gap-2">
            <input type="checkbox" />
            <span>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Sticky Footer */}
  <div className="border-t px-3 py-2 bg-white">
    <button className="w-full bg-black text-white py-2 text-xs mb-2">
      Apply Filters
    </button>
    <button className="w-full border py-2 text-xs">
      Clear All
    </button>
  </div>
</div>



        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="relative group">
              {/* Badge */}
              {item.tag && (
                <span
                  className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs text-white ${item.tag === "Sale"
                    ? "bg-red-400"
                    : "bg-emerald-400"
                    }`}
                >
                  {item.tag}
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[250px] h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="text-center mt-4">
                <h3 className="text-sm font-medium mb-1">
                  {item.name}
                </h3>

                <div className="text-sm">
                  {item.originalPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      Rs. {item.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-red-500 font-semibold">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NecklaceSet;
