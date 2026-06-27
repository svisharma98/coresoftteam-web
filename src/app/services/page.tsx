import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesPageComponent from "@/components/Services/ServicesPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | Core Soft Team",
  description: "This is Services Page for Core Soft Team",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="We provide end-to-end software development services, helping businesses create secure, scalable, and high-performance digital products."
      />
      <ServicesPageComponent />
    </>
  );
};

export default ServicesPage;
