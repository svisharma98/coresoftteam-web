const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-25">
        <section className="relative overflow-hidden
        pt-10 pb-10 sm:py-0
        bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          {/* Grid Background */}
          {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:55px_55px]" /> */}

          <div className="absolute inset-0 opacity-30">
            <svg
              className="absolute bottom-0 w-full h-full text-blue-200 dark:text-slate-800"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
              />
            </svg>
          </div>

          {/* Large Glow */}
          <div className="absolute left-1/2 top-12 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          {/* Floating Balls */}

          <div className="floating-ball absolute top-20 left-24 h-24 w-24 rounded-full bg-blue-400/20 blur-md"></div>
          <div className="floating-ball2 absolute right-28 top-28 h-16 w-16 rounded-full bg-cyan-400/20 blur-md"></div>
          <div className="floating-ball3 absolute bottom-24 left-40 h-12 w-12 rounded-full bg-violet-400/30 blur-sm"></div>
          <div className="floating-ball4 absolute right-40 bottom-20 h-20 w-20 rounded-full bg-sky-300/20 blur-md"></div>

          {/* Floating Icons */}

          <div className="floating-icon absolute left-16 top-1/2 hidden lg:flex h-18 w-18 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl items-center justify-center rotate-12">
            <span className="text-4xl font-bold text-blue-600">
              {"</>"}
            </span>
          </div>

          <div className="floating-icon2 absolute right-24 top-20 hidden lg:flex h-18 w-18 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl items-center justify-center -rotate-12">
            <span className="text-4xl font-bold text-violet-600">
              {"{}"}
            </span>
          </div>

          <div className="floating-icon3 absolute right-60 bottom-20 hidden lg:flex h-16 w-16 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg items-center justify-center">

            <span className="text-3xl">
              💻
            </span>
          </div>

          {/* Fixed height of this below div */}

          <div className="relative max-w-7xl mx-auto px-6 text-center h-[210px] flex flex-col items-center justify-center">
            <h1 className="mt-8 text-5xl md:text-6xl font-black tracking-tight">
              {/* <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Our
              </span>{" "} */}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                {pageName}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg pb-8 leading-8 text-slate-600 dark:text-slate-300">
              {description}
            </p>

            {/* <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Home size={16} />
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="font-semibold text-blue-600">
                {pageName}
              </span>
            </div> */}
          </div>
        </section>

        {/* <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div> */}
      </section>
    </>
  );
};

export default Breadcrumb;
