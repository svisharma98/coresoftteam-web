
import {
    Users,
    Tag,
    Clock3,
    ShieldCheck,
    BadgeDollarSign,

    Headphones,
    BarChart3,
    Rocket,
    Target,
    TrendingUp,
    ArrowRight,
} from "lucide-react";

export default function HomePage() {
    return (
        // <section className="relative overflow-hidden bg-[#f8fbff]">
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50 pb-16 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

            {/* Background Water Effect */}
            <div className="absolute inset-0">
                <img
                    src="https://images.openai.com/static-rsc-4/7ADPRNn_QoCxBBdP-uhZpdRyw69A33c7iUGgo7AFB7sKQrHvLnNlpcWQXzwkYM3YkfKUa9M5az_RsO3iog0q4-3PANKW3GLGDBWTCwAduDJ21eabnJAdDSyU1pxzSf_hUn68Y2MVY0mRK1bnGniCmiILjTLevxwRaS6T_NtG5_zKfRnL7kpjb9bNBXPvY7bH?purpose=fullsize"
                    alt=""
                    className="w-full h-full object-cover opacity-30 dark:opacity-20"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-14 pb-10 top-10">

                {/* HERO */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT */}
                    <div>

                        <span className="inline-flex px-4 py-2 rounded-full bg-white shadow-sm border text-blue-600 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900 dark:text-sky-300">
                            YOUR GROWTH IS OUR MISSION
                        </span>

                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 leading-tight text-[#061B52] dark:text-white">
                            We Build{" "}
                            <span className="text-blue-600 dark:text-sky-300">
                                Digital Solutions
                            </span>
                            <br />
                            That Grow Your Business
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 max-w-xl leading-8 dark:text-slate-300">
                            We help businesses establish a strong online presence with
                            creative, reliable, and result-driven digital solutions that
                            accelerate growth and success.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg dark:bg-sky-500 dark:hover:bg-sky-400">
                                Get Started
                            </button>

                            <button className="border border-blue-200 bg-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                                Explore Services
                                <ArrowRight size={18} />
                            </button>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">
                        <div className="relative">

                            {/* Laptop */}
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                                alt="Digital Solution"
                                className="w-full max-w-xl rounded-3xl shadow-2xl"
                            />

                            {/* Mobile Card */}
                            <div className="absolute -left-8 bottom-8 bg-white rounded-2xl shadow-xl p-4 w-48 dark:bg-slate-900 dark:shadow-black/60">
                                <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Our Services</h4>

                                <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                                    <li>✓ Web Development</li>
                                    <li>✓ Mobile Apps</li>
                                    <li>✓ UI/UX Design</li>
                                    <li>✓ SEO Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FEATURES */}

                <div className="bg-white rounded-3xl shadow-sm mt-12 border border-slate-100 dark:bg-slate-900 dark:border-slate-700">

                    <div className="grid grid-cols-2 lg:grid-cols-6 ">

                        <Feature
                            icon={<Users size={28} />}
                            title="Experienced Team"
                        />

                        <Feature
                            icon={<BadgeDollarSign size={28} />}
                            title="Affordable Pricing"
                        />

                        <Feature
                            icon={<Clock3 size={28} />}
                            title="On-Time Delivery"
                        />

                        <Feature
                            icon={<ShieldCheck size={28} />}
                            title="Quality Assurance"
                        />

                        <Feature
                            icon={<Headphones size={28} />}
                            title="Dedicated Support"
                        />

                        <Feature
                            icon={<BarChart3 size={28} />}
                            title="Scalable Solutions"
                        />
                    </div>

                </div>

                {/* MISSION CARDS */}
                <div className="grid lg:grid-cols-3 gap-6 mt-8">

                    <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:border-slate-700 dark:bg-slate-900">

                        <Rocket
                            size={60}
                            className="text-blue-600 mb-4 dark:text-sky-300"
                        />

                        <h3 className="text-3xl font-bold text-[#061B52] dark:text-white">
                            TURNING IDEAS
                            <br />
                            INTO REALITY
                        </h3>

                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            Let's build something amazing together.
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 border dark:bg-slate-900 dark:border-slate-700">

                        <Target
                            size={60}
                            className="text-blue-600 mb-4 dark:text-sky-300"
                        />

                        <span className="text-blue-600 font-semibold dark:text-sky-300">
                            OUR MISSION
                        </span>

                        <p className="mt-4 text-slate-600 leading-8 dark:text-slate-300">
                            To empower businesses with innovative
                            digital solutions that drive growth,
                            efficiency and success.
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 border dark:bg-slate-900 dark:border-slate-700">

                        <TrendingUp
                            size={60}
                            className="text-cyan-500 mb-4 dark:text-sky-300"
                        />

                        <h3 className="text-3xl font-bold text-[#061B52] dark:text-white">
                            YOUR GROWTH
                            <br />
                            IS OUR MISSION
                        </h3>

                    </div>

                </div>

                {/* TRUSTED */}
                <div className="mt-10">

                    <h4 className="text-center text-slate-500 font-medium dark:text-slate-400">
                        Trusted by 100+ Businesses Worldwide
                    </h4>

                    <div className="bg-white rounded-3xl border mt-5 p-8 dark:bg-slate-900 dark:border-slate-700">

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center">

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                alt="Google"
                                className="h-10 mx-auto"
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                                alt="Microsoft"
                                className="h-10 mx-auto"
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                alt="AWS"
                                className="h-10 mx-auto"
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg"
                                alt="Upwork"
                                className="h-10 mx-auto"
                            />

                            <div className="text-center font-bold text-2xl text-gray-700">
                                Clutch
                            </div>

                            <div className="text-center font-bold text-xl text-blue-600">
                                GoodFirms
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

function Feature({ icon, title }) {
    return (
        <div className="p-8 text-center border-r last:border-r-0 border-slate-100">
            <div className="flex justify-center text-blue-600 mb-4">
                {icon}
            </div>

            <h4 className="font-medium text-slate-700">
                {title}
            </h4>
        </div>
    );
}