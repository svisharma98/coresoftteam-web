import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutUsPage from "@/components/About/AboutUs";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
  // other metadata
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
      {/* <Hero /> */}
      <Features />
      <Video />
      {/* <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
