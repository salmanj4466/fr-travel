"use client";

import Header from "../Home/sections/Header";
import Footer from "../Home/sections/Footer";
import ShopHero from "./sections/ShopHero";
import ShopProducts from "./sections/ShopProducts";
import "../Home/home.css";
import "./shop.css";

export default function ShopPage() {
  return (
    <main className="home-page shop-page bg-[#fbfaf7] text-[#152a24]">
      <Header />
      <ShopHero />
      <ShopProducts />
      <Footer />
    </main>
  );
}
