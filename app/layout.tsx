import type { Metadata } from "next";
import "./globals.css";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VELOURA Portal",
  description: "Visitor & Employee Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <body className={`${poppins.className} antialiased`}>
        {/* 🔥 GLOBAL TOASTER */}
        <Toaster position="top-right" />

        <Header />

        <main className="main-content">{children}</main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

        <Footer />
      </body>
    </html>
  );
}
