"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import LoginModal from "../LoginModal";



const Header = () => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);

  const go = (path: string) => router.push(path);

  return (
    <>
      <header className={styles.headerWrapper}>
        {/* TOP BAR */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span>FREE SHIPPING ON ORDERS OVER ₹150</span>
            <span className={styles.sep}>|</span>
            <span>📞 +91 98765 43210</span>
          </div>

          <div className={styles.topBarRight}>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
            <span className={styles.pipe}>|</span>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className={styles.mainHeader}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => go("/")}>
            Velouraz
          </div>

          {/* Support Box */}
          <div className={styles.supportBox}>
            <div className={styles.supportIcon}>💬</div>
            <div>
              <p className={styles.supportTitle}>EXPERT SUPPORT</p>
              <p className={styles.supportSub}>Available 24/7 via chat</p>
            </div>
          </div>

          {/* Search Box */}
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search products" />
            <button>
              <IoIosSearch className={styles.searchIcon} />
            </button>
          </div>

          {/* ICON BUTTONS */}
          <div className={styles.menuIcons}>
            {/* ACCOUNT */}
            <button className={styles.iconItem} onClick={() => setOpenLogin(true)}>
              <UserRound />
              <span>ACCOUNT</span>
            </button>

            {/* WISHLIST */}
            <button className={styles.iconItem} onClick={() => go("/wishlist")}>
              <Heart />
              <span>WISHLIST</span>
            </button>

            {/* CART */}
            <button className={styles.cartItem} onClick={() => go("/cart")}>
              <ShoppingCart />
              <span>CART</span>
              <span className={styles.cartBadge}>0</span>
            </button>
          </div>
        </div>

        {/* NAV MENU */}
        <nav className={styles.navMenu}>
          <ul>
            <li className={styles.dropdown}>
              <span>HOME</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => go("/home-style-1")}>Home Style 1</li>
                <li onClick={() => go("/home-style-2")}>Home Style 2</li>
                <li onClick={() => go("/home-style-3")}>Home Style 3</li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <span>PAGES</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => go("/about")}>About Us</li>
                <li onClick={() => go("/contact")}>Contact Us</li>
                <li onClick={() => go("/portfolio")}>Portfolio</li>
                <li onClick={() => go("/faq")}>FAQs</li>
                <li onClick={() => go("/brands")}>Our Brands</li>
                <li onClick={() => go("/account")}>My Account</li>
                <li onClick={() => go("/store-locations")}>Store Locations</li>
                <li onClick={() => go("/404")}>404</li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <span>BLOG</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => go("/blog/latest")}>Latest Posts</li>
                <li onClick={() => go("/blog/trends")}>Trends</li>
                <li onClick={() => go("/blog/tips")}>Tips</li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <span>BUY NOW</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => go("/amazon")}>Amazon</li>
                <li onClick={() => go("/flipkart")}>Flipkart</li>
                <li onClick={() => go("/shopify")}>Shopify</li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* SHOW LOGIN MODAL */}
      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </>
  );
};

export default Header;
