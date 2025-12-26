"use client";

import { useRouter } from "next/navigation";
import React from "react";

// Import Lucide icons (you can pick any icons you want)
import {
  Shirt,
  ShoppingBasket,
  Activity,
  Layers,
  
  Boxes,
  Plus,

  Footprints,
  Package,
  MoveUpRight,
  Waves,
} from "lucide-react";

interface CategoryItem {
  icon: React.ReactNode;
  title: string;
  link: string;
}

function TopCategories() {
  const router = useRouter();

  const categories: CategoryItem[] = [
    { icon: <Shirt size={40} />, title: "LONG DRESS", link: "/category/long-dress" },
    { icon: <Layers size={40} />, title: "SKIRTS & TOPS", link: "/category/skirts-tops" },
    { icon: <Activity size={40} />, title: "SPORTS WEAR", link: "/category/sports-wear" },
    { icon: <ShoppingBasket size={40} />, title: "MATCHING SET", link: "/category/matching-set" },
    { icon: <ShoppingBasket size={40} />, title: "COAT & JACKETS", link: "/category/coat-jackets" },
    { icon: <Boxes size={40} />, title: "CARGO TROUSERS", link: "/category/cargo-trousers" },
    { icon: <Plus size={40} />, title: "CURVE & PLUS SIZE", link: "/category/plus-size" },
    { icon: <ShoppingBasket size={40} />, title: "TOPS & TSHIRTS", link: "/category/tops" },
    { icon: <Footprints size={40} />, title: "FOOTWEAR", link: "/category/footwear" },
    { icon: <Package size={40} />, title: "SHORTS & JEANS", link: "/category/shorts-jeans" },
    { icon: <MoveUpRight size={40} />, title: "JUMPSUITS", link: "/category/jumpsuits" },
    { icon: <Waves size={40} />, title: "BIKINI SET", link: "/category/bikini" },
  ];

  return (
    <div className="w-full py-16 px-6 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">Top Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => router.push(cat.link)}
            className="cursor-pointer flex flex-col items-center bg-gray-100 hover:bg-white
            border border-gray-200 rounded-xl p-6 transition-all shadow-sm
            hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-3 text-black">{cat.icon}</div>

            <p className="text-sm sm:text-base font-semibold text-center">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategories;
