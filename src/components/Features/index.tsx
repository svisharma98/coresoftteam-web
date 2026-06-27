import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-1 md:py-10 lg:px-20">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Discover the technologies and expertise that enable CoresoftTeam to build secure, scalable, and future-ready digital solutions."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div key={feature.id} className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="bg-primary/10 text-primary mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-xl dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium"
                    style={{ textAlign: "justify" }}>
                    {feature.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
