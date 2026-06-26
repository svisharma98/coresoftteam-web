import {
    Monitor,
    ShoppingCart,
    Smartphone,
    Code2,
    PenTool,
    Users,
    BarChart3,
    Headphones,
} from "lucide-react";
import PageHeaderBread from "../Common/PageHeaderBread";

const services = [
    {
        title: "Website Design & Development",
        description:
            "We build modern, responsive and user-friendly websites that represent your brand perfectly.",
        icon: Monitor,
    },
    {
        title: "E-commerce Development",
        description:
            "We create secure, scalable and high-performing e-commerce solutions that drive sales.",
        icon: ShoppingCart,
    },
    {
        title: "Mobile App Development",
        description:
            "We build innovative Android & iOS applications that engage users and grow your business.",
        icon: Smartphone,
    },
    {
        title: "Custom Software Development",
        description:
            "Custom software tailored to improve business processes and efficiency.",
        icon: Code2,
    },
    {
        title: "UI/UX Design",
        description:
            "Beautiful and intuitive user experiences that delight your customers.",
        icon: PenTool,
    },
    {
        title: "CRM & ERP Solutions",
        description:
            "Powerful CRM & ERP systems to streamline your operations.",
        icon: Users,
    },
    {
        title: "Digital Transformation",
        description:
            "Helping businesses embrace new technologies for sustainable growth.",
        icon: BarChart3,
    },
    {
        title: "Maintenance & Support",
        description:
            "Reliable maintenance and technical support to keep your systems running smoothly.",
        icon: Headphones,
    },
];

export default function ServicesPageComponent() {
    return (
        <>
            {/* Hero */}
            {/* <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white dark:from-slate-900 dark:to-slate-950 py-18">

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

                <div className="relative max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                        Our Services
                    </h1>
                </div>
            </section> */}

            {/* <PageHeaderBread title="Our Services" /> */}

            {/* Services */}
            <section className="bg-white py-20 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            WHAT WE DO
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                            Comprehensive Digital Solutions
                            <br />
                            to Grow Your Business
                        </h2>

                        <p className="mt-6 text-slate-600 dark:text-slate-400">
                            From powerful websites to custom software, we provide end-to-end
                            digital solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600 dark:bg-slate-800">
                                        <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}