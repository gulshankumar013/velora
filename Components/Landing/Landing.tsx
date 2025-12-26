"use client";

import styles from "./Landing.module.css";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BadgeDollarSign, Calendar, Calendar1, ChevronLeft, ChevronRight, Gift, Recycle, RefreshCcwDot, RotateCcw, Share2, ShieldCheck, User } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export default function Landing() {
  const router = useRouter();

  /* ----------------------------------------- */
  /*                MAIN SLIDER                */
  /* ----------------------------------------- */
  const slides = [
    { img: "/slide1.webp", button: "SHOP NOW" },
    { img: "/slide2.jpg", button: "EXPLORE" },
    { img: "/slide3.webp", button: "BUY NOW" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => slideNext(), 4000);
    return () => clearInterval(auto);
  }, [index]);

  const slideNext = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const slidePrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  /* ----------------------------------------- */
  /*            SMALL IMAGE CAROUSEL           */
  /* ----------------------------------------- */
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextCarousel = () => {
    if (carouselIndex < 4) setCarouselIndex(carouselIndex + 1);
  };

  const prevCarousel = () => {
    if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
  };

  /* ----------------------------------------- */
  /*               TOP CATEGORIES              */
  /* ----------------------------------------- */
  const categories = [
    { title: "NECKLACE SETS", link: "/categories/necklace-sets" },
    { title: "EARRINGS", link: "/category/earrings" },
    { title: "BANGLES", link: "/category/bangles" },
    { title: "BRACELETS", link: "/category/bracelets" },
    { title: "RINGS", link: "/category/rings" },
    { title: "ANKLETS", link: "/category/anklets" },
    { title: "CHOKER SETS", link: "/category/choker-sets" },
    { title: "PENDANT SETS", link: "/category/pendant-sets" },
    { title: "JHUMKA EARRINGS", link: "/category/jhumka-earrings" },
    { title: "HOOP EARRINGS", link: "/category/hoop-earrings" },
    { title: "BRIDAL JEWELLERY", link: "/category/bridal-jewellery" },
    { title: "KUNDAN JEWELLERY", link: "/category/kundan-jewellery" },
  ];

  /* ----------------------------------------- */
  /*        PRODUCT SLIDER TAB STATE           */
  /* ----------------------------------------- */
  const [activeTab, setActiveTab] = useState("new");
  const [productIndex, setProductIndex] = useState(0);

  /* ----- STATIC PRODUCTS (Future API Ready) ----- */
  const newIn = [
    { img: "/n1.webp", title: "Long Sleeve Top Black", originalPrice: 3700 },
    {
      img: "/n2.webp",
      title: "Zip-through hoodie set",
      originalPrice: 7700,
      discountedPrice: 7200,
    },
    {
      img: "/n3.webp",
      title: "Solid Cargo Pant",
      originalPrice: 8300,
      discountedPrice: 5200,
    },
    { img: "/n4.webp", title: "High Heel Black Sandal", originalPrice: 11100 },
    {
      img: "/n5.webp",
      title: "Zip-Up Sweatshirt with Hood",
      originalPrice: 7400,
    },
  ];

  const topRated = [
    { img: "/p6.jpg", title: "Relaxed Fit Hoodie Grey", originalPrice: 6900 },
    {
      img: "/p7.jpg",
      title: "Vintage Denim Jacket",
      originalPrice: 8800,
      discountedPrice: 7500,
    },
    { img: "/p8.jpg", title: "Casual Fit Tee Pink", originalPrice: 2700 },
    {
      img: "/p9.jpg",
      title: "Classic Leather Sandals",
      originalPrice: 5900,
    },
    { img: "/p10.jpg", title: "Slim Fit Trousers", originalPrice: 5100 },
  ];

  const bestSeller = [
    {
      img: "/p12.jpg",
      title: "Printed Summer Dress",
      originalPrice: 6800,
      discountedPrice: 5200,
    },
    { img: "/p13.jpg", title: "Beige Casual Hoodie", originalPrice: 5400 },
    {
      img: "/p14.jpg",
      title: "Women's Sneakers",
      originalPrice: 7200,
      discountedPrice: 6500,
    },
    { img: "/p15.jpg", title: "Leather Watch Black", originalPrice: 8900 },
    { img: "/p16.jpg", title: "Slim Fit Jeans", originalPrice: 4100 },
  ];

  const products =
    activeTab === "new"
      ? newIn
      : activeTab === "top"
      ? topRated
      : bestSeller;

  /* ----------------------------------------- */
  /*                 RETURN UI                */
  /* ----------------------------------------- */


const topsBgRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!topsBgRef.current) return;

    const rect = topsBgRef.current.parentElement?.getBoundingClientRect();
    if (!rect) return;

    // Only animate when section is visible
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (window.innerHeight - rect.top) * 0.15;
      topsBgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
      {/* ------------------------------ */}
      {/*            MAIN SLIDER         */}
      {/* ------------------------------ */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className={styles.slideContent}>
                <button className={styles.shopBtn}>{slide.button}</button>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.navBtn} ${styles.left}`} onClick={slidePrev}>
          ‹
        </button>

        <button
          className={`${styles.navBtn} ${styles.right}`}
          onClick={slideNext}
        >
          ›
        </button>
      </div>

      {/* ------------------------------ */}
      {/*         TOP CATEGORIES         */}
      {/* ------------------------------ */}
      <div className="w-full py-20 bg-white">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Top Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-3">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => router.push(cat.link)}
              className="flex items-center justify-center bg-[#F4F4F4] 
              border border-gray-200 px-6 py-2 rounded-lg 
              cursor-pointer text-sm text-gray-700 
              hover:bg-white hover:shadow-md transition-all text-center"
            >
              {cat.title}
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------ */}
      {/*    SMALL 4-CARD CAROUSEL       */}
      {/* ------------------------------ */}
      <div className="relative w-full bg-[#F8FFF8] py-14 overflow-hidden">
        <button
          onClick={prevCarousel}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-md 
              w-10 h-10 rounded-full flex items-center justify-center z-10"
        >
          ‹
        </button>

        <button
          onClick={nextCarousel}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-md 
              w-10 h-10 rounded-full flex items-center justify-center z-10"
        >
          ›
        </button>

        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${carouselIndex * 25}%)` }}
        >
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="w-1/4 px-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={`/j${n}.webp`}
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Sample {n}</h3>
                  <p className="text-gray-600 text-sm">{n * 10} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------ */}
      {/*      PRODUCT SLIDER + TABS     */}
      {/* ------------------------------ */}
      <div className="w-full py-16 bg-white">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 text-lg font-medium">
          <button
            onClick={() => {
              setActiveTab("new");
              setProductIndex(0);
            }}
            className={`px-6 py-2 rounded-full ${
              activeTab === "new" ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            New In
          </button>

          <button
            onClick={() => {
              setActiveTab("top");
              setProductIndex(0);
            }}
            className={`px-6 py-2 rounded-3xl ${
              activeTab === "top" ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            Top Rated
          </button>

          <button
            onClick={() => {
              setActiveTab("best");
              setProductIndex(0);
            }}
            className={`px-6 py-2 rounded-full ${
              activeTab === "best" ? "bg-black text-white" : "text-gray-700"
            }`}
          >
            Best Seller
          </button>
        </div>

        {/* PRODUCT SLIDER */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* LEFT ARROW */}
          <button
            onClick={() =>
              setProductIndex(productIndex > 0 ? productIndex - 1 : 0)
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md 
            w-10 h-10 rounded-full flex items-center justify-center z-10"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() =>
              setProductIndex(
                productIndex < products.length - 5
                  ? productIndex + 1
                  : productIndex
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md 
            w-10 h-10 rounded-full flex items-center justify-center z-10"
          >
            ›
          </button>

          {/* PRODUCT TRACK */}
          <div
            className="flex transition-all duration-500"
            style={{ transform: `translateX(-${productIndex * 20}%)` }}
          >
            {products.map((p, i) => (
              <div key={i} className="w-1/5 px-4">
                <div className="bg-[#fafafa] rounded-lg overflow-hidden relative">
                  {/* SALE BADGE */}
                  {p.discountedPrice && (
                    <span className="absolute bg-red-400 text-white text-xs px-2 py-1 m-2 rounded">
                      Sale
                    </span>
                  )}

                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-80 object-cover"
                  />

                  {/* DETAILS */}
                  <div className="text-center py-4">
                    <h3 className="font-medium text-gray-800 text-base">
                      {p.title}
                    </h3>

                    {p.discountedPrice ? (
                      <div className="mt-1">
                        <span className="text-gray-500 line-through mr-2">
                          Rs. {p.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-red-500 font-semibold">
                          Rs. {p.discountedPrice.toLocaleString()}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-1 text-gray-900 font-semibold">
                        Rs. {p.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  {/* ------------------------------ */}
{/*        TRUST BADGE STRIP       */}
{/* ------------------------------ */}
<div className="w-full bg-[#faf7fb] py-6">
  <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-gray-800">

    {/* Item 1 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e7e5ff]">
       <Recycle />
      </div>
      <span>100% Certified</span>
    </div>

    {/* Item 2 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffe8e1]">
         <Calendar1 />
      </div>
      <span>15 Day Exchange</span>
    </div>

    {/* Item 3 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e9f9e7]">
         <Share2 />
      </div>
      <span>Bonus on Share App</span>
    </div>

    {/* Item 4 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fff6d8]">
        <RefreshCcwDot />
      </div>
      <span>1 Month Warranty</span>
    </div>

  </div>
</div>

{/* ------------------------------ */}
{/* ------------------------------ */}
{/*   PROMO BANNER GRID (FULL)    */}
{/* ------------------------------ */}
<div className="w-full bg-white py-16 px-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* LEFT BIG CARD */}
    <div className="lg:col-span-2">
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
        <Image
          src="/s1.jpg"
          alt="End of Season Sale"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* RIGHT STACKED CARDS */}
    <div className="flex flex-col gap-6 h-[520px]">

      {/* TOP RIGHT */}
      <div className="relative w-full h-1/2 rounded-3xl overflow-hidden">
        <Image
          src="/s2.jpg"
          alt="Shop Bestsellers"
          fill
          className="object-cover"
        />
      </div>

      {/* BOTTOM RIGHT */}
      <div className="relative w-full h-1/2 rounded-3xl overflow-hidden">
        <Image
          src="/s3.jpg"
          alt="Same Day Delivery"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </div>
</div>
{/* ------------------------------ */}
{/*        THE TOPS EDIT           */}
{/* ------------------------------ */}
<div className="relative w-full h-[520px] overflow-hidden">

  {/* PARALLAX IMAGE */}
  <div
  ref={topsBgRef}
  className="absolute inset-[-20%] bg-center bg-cover will-change-transform"
  style={{ backgroundImage: "url('/bottom.webp')" }}
/>


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* CONTENT */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
    <h2 className="text-white text-4xl font-semibold mb-10 tracking-wide">
      THE TOPS EDIT
    </h2>

    {/* SAME BUTTONS AS TOP CATEGORIES */}
    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
      {[
        "CROP TOPS",
        "BOXY TOP",
        "BUSTIER TOP",
        "BRALETTE TOP",
        "PEPLUM TOP",
        "PARTY TOPS",
        "COLD-SHOULDER TOP",
        "BOAT NECK TOPS",
        "SLEEVELESS TOPS",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center justify-center bg-white 
          border border-gray-200 px-6 py-2 rounded-lg 
          cursor-pointer text-sm text-gray-700 
          hover:bg-white hover:shadow-md transition-all text-center"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</div>


<div className="w-full bg-white py-20">
  <h2 className="text-center text-3xl font-semibold mb-14">
    Happy Customers
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {[
      {
        img: "/c1.avif",
        title: "Feature Availability",
        desc: "Like Avone, Optimal is just as feature rich and highly customisable. I love using these guys themes.",
        name: "Jackie Sanders",
        product: "Everyday Tube Top Ribbed",
      },
      {
        img: "/c2.avif",
        title: "Customer Support",
        desc: "We have tried a few other themes but this Theme is Superior! From customer support, to UX/UI to zero need to buy extra apps – highly recommend!",
        name: "Cory Zamora",
        product: "Crossbody Bag with Chain Strap",
      },
      {
        img: "/c3.avif",
        title: "Code Quality",
        desc: "Great service and customer support. The themes are beautiful and definitely will buy more in the future.",
        name: "Alexander Harvard",
        product: "High Heel Black Sandal",
      },
      {
        img: "/c4.jpg",
        title: "Design Quality",
        desc: "Have been running this theme for about 6 months (previously an older theme from them) now and am happy with the experience. It rates well in speed tests and has heaps of design options.",
        name: "Coriss Ambady",
        product: "Long Maxi Dress",
      },
      {
        img: "/c5.avif",
        title: "Customizability",
        desc: "Great template – and very nice and above all fast support. Great work.",
        name: "Stefen Jursy",
        product: "Canvas Low-Top Lace-Up Sneakers",
      },
      {
        img: "/c6.avif",
        title: "Feature Availability",
        desc: "Not only is this one of the most comprehensive and customisable themes I have seen, but the support is also first-class.",
        name: "Herman Miller",
        product: "Knee Length Denim Skirts",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`
          border border-gray-200 rounded-lg p-6 bg-white
          ${index % 3 === 1 ? "lg:translate-y-12" : ""}
        `}
      >
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {item.desc}
        </p>

        <div className="text-yellow-400 mb-2">★★★★★</div>

        <p className="font-medium text-sm mb-4">
          {item.name}
        </p>

        <hr className="mb-4" />

        <div className="flex items-center gap-3 text-sm text-gray-700">
          <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
            🛍️
          </div>
          <span>{item.product}</span>
        </div>
      </div>
    ))}
  </div>
</div>


{/* ------------------------------ */}
{/*           STYLE FEED           */}
{/* ------------------------------ */}
<div className="w-full bg-[#2f2f2f] py-20 relative">
  <h2 className="text-center text-white text-3xl font-semibold mb-3">
    Style Feed
  </h2>
  <p className="text-center text-gray-300 mb-12">
    Outfit ideas, editor picks, styling inspiration and tips
  </p>

  {/* LEFT ARROW */}
  <button
    className="absolute left-6 top-1/2 -translate-y-1/2 
    bg-gray-300/80 hover:bg-white 
    w-10 h-10 rounded-full 
    flex items-center justify-center z-10"
  >
    <ChevronLeft className="w-5 h-5 text-black" />
  </button>

  {/* RIGHT ARROW */}
  <button
    className="absolute right-6 top-1/2 -translate-y-1/2 
    bg-gray-300/80 hover:bg-white 
    w-10 h-10 rounded-full 
    flex items-center justify-center z-10"
  >
    <ChevronRight className="w-5 h-5 text-black" />
  </button>

  {/* CARDS */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

    {[
      {
        img: "/f1.webp",
        title: "Ways to look stylish with zara.",
        date: "February 17, 2023",
        author: "Adorn Themes",
        desc: "The popular florals are back! The latest spring pastel colour palette with a muted and soft...",
      },
      {
        img: "/f2.webp",
        title: "Match outfits with other significant",
        date: "June 26, 2023",
        author: "Adorn Themes",
        desc: "Even though winter is coming to an end, it's never too late to jump on the winter...",
      },
      {
        img: "/f3.webp",
        title: "Fresh work outfits for new year",
        date: "February 17, 2023",
        author: "Adorn Themes",
        desc: "Even though winter is coming to an end, it's never too late to jump on the winter...",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h3 className="font-semibold text-lg mb-3">
            {item.title}
          </h3>

          {/* META */}
          <div className="flex items-center text-sm text-gray-500 gap-6 mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>by {item.author}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {item.desc}
          </p>

          <span className="font-medium underline cursor-pointer">
            Read more
          </span>
        </div>
      </div>
    ))}

  </div>
</div>
{/* ------------------------------ */}
{/*        TRUST INFO STRIP        */}
{/* ------------------------------ */}
<div className="w-full bg-[#f39a9a] py-4">
  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 px-5 text-white">

    {/* Item 1 */}
    <div className="flex items-center gap-3">
      <RotateCcw  className="w-6 h-6" />
      <span className="font-semibold tracking-wide">
        EASY & FREE RETURNS
      </span>
    </div>

    {/* Item 2 */}
    <div className="flex items-center gap-3">
      <Gift className="w-6 h-6" />
      <span className="font-semibold tracking-wide">
        FREE GIFT WRAPPING
      </span>
    </div>

    {/* Item 3 */}
    <div className="flex items-center gap-3">
      <BadgeDollarSign className="w-6 h-6" />
      <span className="font-semibold tracking-wide">
        SATISFIED OR REFUNDED
      </span>
    </div>

    {/* Item 4 */}
    <div className="flex items-center gap-3">
      <ShieldCheck className="w-6 h-6" />
      <span className="font-semibold tracking-wide">
        100% SECURE PAYMENTS
      </span>
    </div>

  </div>
</div>


  
    </div>
  );
}
