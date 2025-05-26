import React from "react";

const services = [
  { title: "Web Development", description: "Modern and responsive websites built with the latest technologies.", price: "$500" },
  { title: "Mobile App Development", description: "Create cross-platform mobile applications for iOS and Android.", price: "$800" },
  { title: "SEO Optimization", description: "Boost your website ranking with professional SEO services.", price: "$300" },
  { title: "Graphic Design", description: "High-quality design services for logos, banners, and more.", price: "$200" },
];

const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <span className="text-lg font-semibold text-blue-400">{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
