import React from "react";

const products = [
  {
    title: "Biogas Membrane Holder",
    description:
      "Designed for maximum safety and performance, our Biogas Membrane Holder is the perfect fit for modern biogas systems.",
    features: [
      "High Durability",
      "Easy Installation",
      "Corrosion Resistant",
      "Made for Precision Fit",
    ],
    image: "/images/bioone.png",
  },
  {
    title: "Flare System",
    description:
      "Engineered for reliable combustion and environmental compliance, our Flare System ensures safe disposal of excess biogas.",
    features: [
      "High-Temperature Resistant",
      "Low Maintenance",
      "Pollution Control Compliant",
      "Ideal for Biogas & Industrial Applications",
    ],
    image: "/images/biotwo.png",
  },
  {
    title: "Digester & Technology",
    description:
      "Maximize biogas output with our high-efficiency digesters and cutting-edge technology. Designed for optimal waste-to-energy conversion and long-term reliability.",
    features: [
      "High Gas Yield Efficiency",
      "Robust & Scalable Design",
      "Automated Process Control",
      "Ideal for Industrial & Agricultural Use",
    ],
    image: "/images/biothree.png",
  },
  {
    title: "Co2 Removal",
    description:
      "Enhance the quality of your biogas with our advanced CO₂ Removal systems. Designed for precision and performance, ensuring maximum methane recovery and energy efficiency.",
    features: [
      "High Methane Purity",
      "Low Operating Cost",
      "Compact & Scalable Design",
      "Ideal for Biogas Upgradation",
    ],
    image: "/images/biofour.png",
  },
  {
    title: "CBG Plant & Support",
    description:
      "From design to installation, our CBG (Compressed Biogas) Plants are built for maximum efficiency, reliability, and compliance with government norms.",
    features: [
      "High Methane Purity",
      "Low Operating Cost",
      "Compact & Scalable Design",
      "Ideal for Biogas Upgradation",
    ],
    image: "/images/biofive.png",
  },
];

const ProductPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-orange-400">
        <div className=" max-w-7xl mx-auto container   py-12 px-4 md:px-16">
          <h2 className="text-center text-white  text-2xl md:text-3xl font-extrabold  mb-2">
            <i>Inventive Gas Equipment</i>
          </h2>
          <h1 className="text-center text-white text-2xl md:text-3xl font-extrabold mb-10">
            <i>Biogas Products, Built for Performance</i>
          </h1>

          <div className="grid gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-6 p-4 rounded-xl`}
              >
                {index % 2 === 0 ? (
                  <>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto max-h-[280px] md:max-h-[320px] object-contain rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <h2 className="text-white text-4xl font-bold mb-2">
                        {product.title}
                      </h2>
                      <p className="text-white text-xl mb-4 font-bold ">
                        {product.description}
                      </p>
                      <ul className="list-none space-y-1 mb-4">
                        {product.features.map((feat, i) => (
                          <li key={i} className="text-white  text-xl">
                            ✅ {feat}
                          </li>
                        ))}
                      </ul>
                      <a href="/Contact">
                        <button className="bg-[#ff5c33] text-black font-extrabold text-xl px-2 w-48 py-2 rounded-md hover:bg-[#e6451a] transition">
                          Get Quote Now
                        </button>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-center order-2 md:order-1">
                      <h2 className="text-white text-4xl font-bold mb-2">
                        {product.title}
                      </h2>
                      <p className="text-white mb-4  text-xl   font-bold">
                        {product.description}
                      </p>
                      <ul className="list-none space-y-1 mb-4">
                        {product.features.map((feat, i) => (
                          <li key={i} className=" text-white  text-xl">
                            ✅ {feat}
                          </li>
                        ))}
                      </ul>
                      <a href="/Contact">
                        <button className="bg-[#ff5c33] text-black   px-4 font-extrabold text-xl py-2 w-48 rounded-md hover:bg-[#e6451a] transition">
                          Get Quote Now
                        </button>
                      </a>
                    </div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto max-h-[280px] md:max-h-[320px] object-contain rounded-lg order-1 md:order-2"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
