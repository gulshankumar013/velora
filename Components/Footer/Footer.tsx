"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* TOP GRID (4 COLUMNS) */}
      <div className={styles.topGrid}>

        {/* COLUMN 1 */}
        <div>
          <h2 className={styles.logo}>Veloura</h2>

          <p className={styles.text}>
            Discover premium-quality artificial jewellery crafted with elegance,
            passion, and modern design. Perfect for weddings, parties, and
            everyday glamour.
          </p>

          <p className={styles.text}>Phone : +91 90000 00000</p>
          <p className={styles.text}>Email : support@veloura.com</p>

          <div className={styles.socialRow}>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className={styles.heading}>INFORMATION</h3>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Our Collections</li>
            <li>Jewellery Care Guide</li>
            <li>Size Guide</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className={styles.heading}>SHOP BY CATEGORY</h3>
          <ul className={styles.list}>
            <li>Necklaces</li>
            <li>Earrings</li>
            <li>Bracelets</li>
            <li>Bangles</li>
            <li>Rings</li>
            <li>Bridal Sets</li>
            <li>Trending Jewellery</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className={styles.heading}>CUSTOMER SERVICE</h3>
          <ul className={styles.list}>
            <li>Shipping Policy</li>
            <li>Return & Exchange</li>
            <li>Order Tracking</li>
            <li>FAQs</li>
            <li>Secure Payments</li>
            <li>Customer Support</li>
          </ul>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className={styles.bottomGrid}>

        {/* NEWSLETTER */}
        <div>
          <h3 className={styles.heading}>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className={styles.text}>
            Get exclusive deals, new arrival updates, and jewellery styling tips.
          </p>

          <div className={styles.emailBox}>
            <input type="text" placeholder="Email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* DOWNLOAD APP */}
        <div>
          <h3 className={styles.heading}>DOWNLOAD APP</h3>
          <p className={styles.text}>
            Shop jewellery on the go with the Veloura App.
            Available on App Store & Google Play.
          </p>

          <div className={styles.appRow}>
            <Image src="/apple.avif" width={160} height={50} alt="appstore" />
            <Image src="/gpay.avif" width={160} height={50} alt="google play" />
          </div>
        </div>

        {/* PAYMENTS + COPYRIGHT */}
        <div className={styles.bottomRight}>
          <div className={styles.paymentRow}>
            {/* You are using footer.avif, so I keep it unchanged */}
            <Image src="/footer.avif" width={250} height={100} alt="payment methods" />
          </div>

          <p className={styles.copyright}>
            © 2025 Veloura Jewellery. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
