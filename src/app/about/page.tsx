import type { Metadata } from "next";
import AboutPageContent from "../components/pages/About/AboutPageContent";

export const metadata: Metadata = {
  title: "About FR Travel | A Message from Our CEO",
  description:
    "Read a welcome message from FR Travel CEO Ijaz Ahmad and learn about the care behind our Umrah travel services.",
};

export default function Page() {
  return <AboutPageContent />;
}
