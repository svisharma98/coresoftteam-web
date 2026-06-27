import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Core Soft Team",
  description: "This is Contact Page for Core Soft Team",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Let's Build Something Great Together. Have a project in mind or need expert development support? We'd love to hear from you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
