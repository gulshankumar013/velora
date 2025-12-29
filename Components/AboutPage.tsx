"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const team = [
  {
    name: "Aarav Mehta",
    role: "Founder & Creative Director",
    about: "With over 15 years of experience in luxury jewellery design, Aarav brings timeless elegance and modern vision together.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Neha Kapoor",
    role: "Head of Design",
    about: "Neha leads the design team with a passion for blending traditional artistry with contemporary aesthetics.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Rohan Verma",
    role: "Marketing Lead",
    about: "Rohan crafts the brand’s voice, connecting beautiful stories with beautiful products across the world.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

function AboutPage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % team.length);
      setFade(true);
    }, 300);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + team.length) % team.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#fff6e5] to-[#f1fbff] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where craftsmanship meets elegance — discover jewellery made with love,
            tradition, and modern artistry.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a3d0a"
          className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with a passion for timeless beauty, our jewellery brand celebrates
            Indian heritage with a contemporary touch. Each piece is handcrafted by
            skilled artisans using premium materials and intricate techniques.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From weddings to everyday elegance, our designs are created to make you
            feel confident, graceful, and special.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Authenticity",
                desc: "Every design reflects originality and true craftsmanship.",
              },
              {
                title: "Quality",
                desc: "We use only premium materials for lasting beauty.",
              },
              {
                title: "Customer Love",
                desc: "Your happiness and trust mean everything to us.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl shadow-sm border bg-[#fafafa]">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-[#fafafa] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-2xl shadow-sm border bg-white">
            <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              To become a globally admired jewellery brand that represents elegance,
              heritage, and trust — inspiring confidence and beauty in every individual
              who wears our creations.
            </p>
          </div>
          <div className="p-10 rounded-2xl shadow-sm border bg-white">
            <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              To craft exceptional jewellery that blends traditional artistry with modern
              design, while delivering outstanding quality, ethical practices, and
              memorable experiences to our customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-2">Our Team</h2>
      <div className="w-10 h-1 bg-[#e8c77c] mb-4" />
      <p className="text-gray-500 max-w-md text-sm">
        Meet the creative minds and passionate people behind our brand.
      </p>
    </div>

    <div className="relative">

      {/* Background line */}
      <div className="absolute top-[140px] left-0 w-full h-20 bg-[#e8c77c]/40 rounded-lg" />

      {/* Cards */}
      <div
        className={`relative grid grid-cols-1 md:grid-cols-3 gap-10 text-center transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {[0, 1, 2].map((offset) => {
          const member = team[(index + offset) % team.length];
          return (
            <div key={offset}>
              <img
                src={member.image}
                className="w-48 h-48 mx-auto rounded-xl object-cover shadow-lg mb-4 bg-white"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
             <div className="flex justify-center gap-4 mt-2 text-[#e8c77c]">
  <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
  <FaTwitter className="cursor-pointer hover:scale-110 transition" />
  <FaInstagram className="cursor-pointer hover:scale-110 transition" />
</div>

            </div>
          );
        })}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute -left-10 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute -right-10 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#fff6e5] to-[#f1fbff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Celebrate Beauty With Us
          </h2>
          <p className="text-gray-600 mb-8">
            Explore our exclusive jewellery collections and find something truly special.
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Explore Collection
          </a>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
