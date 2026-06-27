import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden lg:p-20 md:py-28 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 
              shadow-three dark:bg-gray-dark 
              sm:p-[55px] 
              lg:mb-5
              lg:px-8 
              xl:p-[55px]"
              data-wow-delay=".15s 
              "
            >
              <h2 className="mb-1 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact Us
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                Our support team will get back to you ASAP.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your subject"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary px-9 py-3 cursor-pointer text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="floating-ball3 absolute bottom-78 left-35 h-12 w-12 rounded-full bg-blue-400/20 blur-sm"></div>
              <div className="floating-ball3 absolute bottom-80 left-60 h-12 w-12 rounded-full bg-cyan-300/20 blur-sm"></div>
              <div className="floating-ball3 absolute bottom-84 left-80 hidden h-12 w-12 rounded-full bg-violet-300/20 blur-sm"></div>
              <div className="floating-ball3 absolute bottom-74 left-100 hidden h-12 w-12 rounded-full bg-sky-300/20 blur-sm"></div>

              <div className="floating-icon3 absolute bottom-74 left-125 hidden lg:flex h-16 w-16 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg items-center justify-center">
                <span className="text-3xl">
                  📞
                </span>
              </div>
              <div className="floating-ball3 absolute bottom-10 left-[18%] h-5 w-5 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full bg-cyan-300/10 blur-sm"></div>
              <div className="floating-ball3 absolute bottom-36 left-[32%] h-5 w-5 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full bg-violet-300/20 blur-sm"></div>
              <div className="floating-ball3 absolute bottom-8 left-[45%] h-5 w-5 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full bg-sky-200/20 blur-sm"></div>
            </div> */}

          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
