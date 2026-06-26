import Image from "next/image";
import {
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  {
    number: "20+",
    title: "Projects Completed",
  },
  {
    number: "15+",
    title: "Happy Clients",
  },
  {
    number: "7+",
    title: "Years of Experience",
  },
  {
    number: "24/7",
    title: "Support Available",
  },
];

const values = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to deliver better solutions.",
  },
  {
    icon: (
      <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
    ),
    title: "Quality",
    description:
      "We are committed to delivering excellence in every project.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Integrity",
    description:
      "We believe in transparency, honesty and building trust with our clients.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Customer Success",
    description:
      "We grow when our clients grow. Your success is at the heart of everything we do.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section */}
       

      {/* About Section */}

      <section className="max-w-7xl mx-auto px-6 py-15">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
              Who We Are
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-4 leading-tight">
              Your Trusted Partner for Digital Growth
            </h2>

            <p className="mt-8 text-gray-600 dark:text-slate-300 leading-8">
              Coresoftteam is a passionate team of developers, designers,
              strategists and technology experts dedicated to helping
              businesses build scalable digital solutions.
              We combine innovation, creativity and technology to transform
              ideas into successful digital products.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Client-focused approach",
                "Innovative solutions",
                "On-time delivery",
                "Long-term support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />

                  <span className="text-gray-700 dark:text-slate-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src="https://images.openai.com/static-rsc-4/1TKGVPRmMI__dvkMbbmJA-6x5f4M3wpx1GifAVu4ycs8jhMXNfqNGdoDq5pYEEsKrWvtk6XzOwbiAN-M6z-JuJy5b7p_b_Q_G5WDD-2-w--UER3uCr8VROBo7CJpareU_p1XWBOS2i_nU_mnPXK6bi92vCJwefF5s0lpj5EPVFc?purpose=inline"
              alt="About Team"
              width={700}
              height={500}
              className="rounded-3xl shadow-2xl object-cover border border-slate-200 dark:border-slate-800"
            />

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">

          {stats.map((item, index) => (

            <div
              key={item.title}
              className={`py-10 text-center ${index !== stats.length - 1
                ? "border-r border-slate-200 dark:border-slate-800"
                : ""
                }`}
            >

              <h3 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-slate-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Values */}

      <section className="py-10 mt-15 bg-slate-50 dark:bg-slate-900 transition-colors">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-center tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
            Our Values
          </p>

          <h2 className="text-4xl font-bold text-center mt-3 text-slate-900 dark:text-white">
            What Drives Us
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

            {values.map((item) => (

              <div
                key={item.title}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600 dark:text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}