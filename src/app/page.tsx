import type { Metadata } from "next";
import HomePage from "./components/pages/Home/HomePage";

export const metadata: Metadata = {
  title: "FR Travel | Umrah Journeys Made Meaningful",
  description:
    "Thoughtfully planned Umrah packages, trusted guidance, and complete travel support from FR Travel.",
};

export default function Page() {
  return <HomePage />;
}
