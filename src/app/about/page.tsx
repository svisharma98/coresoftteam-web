import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutUsPage from "@/components/About/AboutUs";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Core Soft Team",
  description: "This is About Page for Core Soft Team",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="CoresoftTeam delivers modern, secure, and scalable software solutions that help businesses innovate, grow, and succeed in the digital world."
      />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <AboutUsPage />
    </>
  );
};

export default AboutPage;
