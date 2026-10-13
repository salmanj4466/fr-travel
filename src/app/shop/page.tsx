import type { Metadata } from "next";
import ShopPage from "../components/pages/Shop/ShopPage";

export const metadata: Metadata = {
  title: "Umrah Essentials Shop | FR Travel",
  description:
    "Shop carefully selected Ihram, prayer, travel, and pilgrimage essentials for your Umrah journey.",
};

export default function Page() {
  return <ShopPage />;
}
