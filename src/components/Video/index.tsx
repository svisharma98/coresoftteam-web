"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="At Core Soft Team, we focus on clear communication, practical solutions, and real results — no guesswork, no confusion."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40 items-center justify-center">
                  {!isOpen ?
                    <>
                      <Image
                        src="/images/video/image.png"
                        alt="video image"
                        className="object-cover"
                        fill
                      />
                      <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                        <button
                          aria-label="video play button"
                          onClick={() => setOpen(true)}
                          className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
                        >
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            className="fill-current"
                          >
                            <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                          </svg>
                        </button>
                      </div>
                    </>
                    : <>

                      <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1&loop=1&playlist=0x5mf8BUJZY&playsinline=1&rel=0"
                        title="Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                      />
                      {/* <video
                        width="100%"
                        height="500"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                        controlsList="nodownload noplaybackrate noremoteplayback"
                      >
                        <source src="/videos/cityconnect.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video> */}
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
