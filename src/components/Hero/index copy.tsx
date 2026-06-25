import {
  Users,
  BadgeDollarSign,
  Clock3,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Rocket,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-white shadow-sm border text-blue-600 text-sm font-semibold">
              YOUR GROWTH IS OUR MISSION
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              We Build{" "}
              <span className="text-blue-600">Digital Solutions</span>
              <br />
              That Grow Your Business
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              We help businesses establish a strong online presence with
              creative, reliable, and result-driven digital solutions that
              accelerate growth and success.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg">
                Get Started
              </button>

              <button className="border border-blue-200 hover:bg-blue-50 px-7 py-3 rounded-xl font-semibold flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="relative">

              {/* Laptop */}
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Digital Solution"
                className="w-full max-w-xl rounded-3xl shadow-2xl"
              />

              {/* Mobile Card */}
              <div className="absolute -left-8 bottom-8 bg-white rounded-2xl shadow-xl p-4 w-48">
                <h4 className="font-semibold mb-3">Our Services</h4>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Web Development</li>
                  <li>✓ Mobile Apps</li>
                  <li>✓ UI/UX Design</li>
                  <li>✓ SEO Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 bg-white rounded-3xl shadow-lg p-8 mt-16">

          <Feature icon={<Users />} title="Experienced Team" />
          <Feature icon={<BadgeDollarSign />} title="Affordable Pricing" />
          <Feature icon={<Clock3 />} title="On-Time Delivery" />
          <Feature icon={<ShieldCheck />} title="Quality Assurance" />
          <Feature icon={<Headphones />} title="Dedicated Support" />
          <Feature icon={<TrendingUp />} title="Scalable Solutions" />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <Rocket className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">
              Turning Ideas Into Reality
            </h3>
            <p className="text-gray-600">
              Let's build something amazing together and transform your vision
              into a successful digital product.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <Target className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and success.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <BarChart3 className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">
              Your Growth Is Our Mission
            </h3>
            <p className="text-gray-600">
              Every project we build is focused on increasing your business
              value and delivering measurable results.
            </p>
          </div>
        </div>

        {/* Trusted By */}
        <div className="bg-white rounded-3xl shadow-md mt-12 p-8">

          <h3 className="text-center text-gray-500 font-medium mb-8">
            Trusted by Businesses Worldwide
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">

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
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-blue-600 mb-3">
        {icon}
      </div>
      <p className="font-medium text-gray-700">
        {title}
      </p>
    </div>
  );
}