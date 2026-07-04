import AboutUsPage from "@/components/About/AboutUs";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HomePage from "@/components/Home/HomePage";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import ServicesPageComponent from "@/components/Services/ServicesPage";
import PageHeaderBread from "@/components/Common/PageHeaderBread";

export const metadata: Metadata = {
  title: "Core Soft Team",
  description: "This is Home for Core Soft Team",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomePage />
      <PageHeaderBread title="About Us" />
      <AboutUsPage />
      <PageHeaderBread title="Our Services" />
      <ServicesPageComponent />
      <Features />
      <Video />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
