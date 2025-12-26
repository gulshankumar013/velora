"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Minus, Plus, Tag, ArrowRight } from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  img: string;
  qty: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      img: "/cart1.webp",
      qty: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      img: "/cart2.webp",
      qty: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      img: "/cart3.webp",
      qty: 1,
    },
  ]);

  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="min-h-screen bg-[#faf7f2] p-6 md:p-12">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Home <span className="mx-2">›</span> <span className="font-medium">Cart</span>
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight mb-10">YOUR CART</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT CART ITEMS */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 py-4 border-b last:border-none"
            >
              {/* Product Image */}
              <Image
                src={item.img}
                width={75}
                height={75}
                alt={item.name}
                className="rounded-lg object-cover"
              />

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-[16px] font-semibold leading-tight">
                  {item.name}
                </h2>

                <p className="text-xs text-gray-500">
                  Size: {item.size}
                </p>
                <p className="text-xs text-gray-500">
                  Color: {item.color}
                </p>

                <p className="text-lg font-bold mt-1">${item.price}</p>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                <button onClick={() => updateQty(item.id, "dec")}>
                  <Minus size={14} />
                </button>

                <span className="text-sm">{item.qty}</span>

                <button onClick={() => updateQty(item.id, "inc")}>
                  <Plus size={14} />
                </button>
              </div>

              {/* Delete Item */}
              <button onClick={() => removeItem(item.id)}>
                <Trash2 className="text-red-500" size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>- ${discount.toFixed(0)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${delivery}</span>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-lg font-semibold mb-5">
            <span>Total</span>
            <span>${total.toFixed(0)}</span>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <Tag size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Add promo code"
              className="bg-transparent flex-1 outline-none text-sm"
            />
            <button className="bg-black text-white px-4 py-1.5 rounded-lg text-sm">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white mt-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 text-lg font-medium">
            Go to Checkout <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
