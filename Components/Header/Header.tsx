"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import LoginModal from "../LoginModal";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const go = (path: string) => router.push(path);

  // Sync login state
  useEffect(() => {
    const syncLogin = () => setIsLoggedIn(!!sessionStorage.getItem("token"));
    syncLogin();
    window.addEventListener("login-success", syncLogin);
    window.addEventListener("logout-success", syncLogin);
    return () => {
      window.removeEventListener("login-success", syncLogin);
      window.removeEventListener("logout-success", syncLogin);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-[#062247] text-white">

        {/* Main Header */}
        <div className="flex items-center justify-between px-4 md:px-10 py-4 gap-4">

          {/* Logo */}
          <div
            className="flex items-center gap-2 text-3xl font-bold lowercase cursor-pointer"
            onClick={() => go("/")}
          >
            VELOURAZ
            <Image src="/login1.png" alt="logo" width={100} height={150} />
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products"
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
            <button className="w-12 bg-[#28a879] flex items-center justify-center">
              <IoIosSearch className="text-white text-lg" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-xs">

            {/* ACCOUNT / PROFILE */}
            <button
              className="flex flex-col items-center"
              onClick={() => {
                if (isLoggedIn) {
                  router.push("/profile");
                } else {
                  setOpenLogin(true);
                }
              }}
            >
              <UserRound />
              {isLoggedIn ? "PROFILE" : "ACCOUNT"}
            </button>

            {/* WISHLIST */}
            <button onClick={() => go("/wishlist")} className="flex flex-col items-center">
              <Heart />
              WISHLIST
            </button>

            {/* CART */}
            <button onClick={() => go("/cart")} className="relative flex flex-col items-center">
              <ShoppingCart />
              CART
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-3 md:hidden">
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products"
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
            <button className="w-12 bg-[#28a879] flex items-center justify-center">
              <IoIosSearch className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Nav Menu */}
        <nav className="bg-white text-[#062247] px-4 md:px-10 py-3 border-t">
          <ul className="flex gap-6 md:gap-10 text-sm font-semibold">
            {["HOME", "PAGES", "BLOG", "BUY NOW"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                {item}
                <ul className="absolute left-0 top-8 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <li className="px-4 py-2 hover:bg-blue-50" onClick={() => go("/")}>Example</li>
                  <li className="px-4 py-2 hover:bg-blue-50">Another</li>
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </>
  );
}
