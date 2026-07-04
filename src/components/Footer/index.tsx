"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X"; // Twitter/X
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://facebook.com",
      color: "#1877F2",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com",
      color: "#E4405F",
    },
    {
      icon: XIcon,
      href: "https://x.com",
      color: "#000000",
    },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
    {
      icon: GitHubIcon,
      href: "https://github.com",
      color: "#181717",
    },
    {
      icon: YouTubeIcon,
      href: "https://youtube.com",
      color: "#FF0000",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-950">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/logo.png"
              alt="Core Soft Team"
              width={220}
              height={60}
            />

            <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
              Building innovative, secure, and scalable software solutions that empower
              businesses with modern technology and digital transformation.

            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <div className="mt-8 flex gap-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
                    >
                      <Icon sx={{ fontSize: 28, color: item.color }} />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                { "Home": "/" },
                { "About": "/about" },
                { "Services": "/services" },
                { "Contact": "/contact" },
              ].map((item) => (
                <li key={Object.keys(item)[0]}>
                  <Link
                    href={Object.values(item)[0]}
                    className="group flex items-center text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <ArrowRight
                      size={16}
                      className="mr-2 transition-transform group-hover:translate-x-1"
                    />
                    {Object.keys(item)[0]}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Services */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Services
            </h3>

            <ul className="space-y-3">

              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Cloud Solutions",
                "AI Integration",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group flex items-center text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone className="mt-1 text-blue-600" size={18} />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-blue-600" size={18} />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    info@coresoftteam.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-blue-600" size={18} />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    New Delhi, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}

        {/* <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-slate-900">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Subscribe to our updates
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Get updates about new technologies, blogs and software solutions.
              </p>
            </div>
            <div className="flex w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl border border-gray-300 bg-white px-5 py-4 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-slate-950 dark:text-white"
              />
              <button className="rounded-r-xl bg-blue-600 px-8 font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}


        {/* CTA Section */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 p-7 shadow-xl dark:border-gray-800">

          <div className="flex flex-col items-center justify-between lg:flex-row">

            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                🚀 Let's Work Together
              </span>
              <h3 className="mt-4 text-3xl font-bold text-white">
                Let's Build Something Great Together
              </h3>
              <p className="mt-3 text-blue-100 leading-7">
                Whether you're launching a startup, modernizing your business,
                or scaling your digital products, our experienced team is ready
                to transform your ideas into secure, scalable, and high-quality
                software solutions.
              </p>
            </div>
            {/* Right Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-700"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Core Soft Team. All rights reserved.
          </p>

          <div className="flex gap-8">

            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-blue-600">
              Terms & Conditions
            </Link>

            {/* <Link href="/sitemap" className="hover:text-blue-600">
              Sitemap
            </Link> */}

          </div>

        </div>

      </div>
    </footer>
  );
}