import flaresystem from "../assets/dualFuelKit.webp";

export const productsData = {
  "flare-system": {
    id: "flare-system",
    slug: "flare-system",
    title: "Flare System",
    description:
      "Engineered for reliable combustion and environmental compliance, our Flare System ensures safe disposal of excess biogas.",
    metaTitle: "Flare System | Product Overview",
    metaDescription:
      "Simple product page for Flare System with basic feature and hero information.",
    bannerImage: flaresystem,
    features: [],
  },
  "biogas-membrane-holder": {
    id: "biogas-membrane-holder",
    slug: "biogas-membrane-holder",
    title: "Biogas Membrane Holder",
    description:
      "Designed for maximum safety and performance, our Biogas Membrane Holder is the perfect fit for modern biogas systems.",
    metaTitle: "Biogas Membrane Holder | Product Overview",
    metaDescription:
      "Simple product page for Biogas Membrane Holder with basic feature and hero information.",
    bannerImage: flaresystem,
    features: [],
  },
  "digester-technology": {
    id: "digester-technology",
    slug: "digester-technology",
    title: "Digester & Technology",
    description:
      "Maximize biogas output with our high-efficiency digesters and cutting-edge technology. Designed for optimal waste-to-energy conversion and long-term reliability.",

    metaTitle: "Digester & Technology | Product Overview",
    metaDescription:
      "Simple product page for Digester & Technology with basic feature and hero information.",
    bannerImage: flaresystem,
    features: [],
  },
  "co2-removal": {
    id: "co2-removal",
    slug: "co2-removal",
    title: "CO2 Removal",
    description:
      "Enhance the quality of your biogas with our advanced CO₂ Removal systems. Designed for precision and performance, ensuring maximum methane recovery and energy efficiency.",
    metaTitle: "CO2 Removal | Product Overview",
    metaDescription:
      "Simple product page for CO2 Removal with basic feature and hero information.",
    bannerImage: flaresystem,
    features: [],
  },
  "cbg-plant-support": {
    id: "cbg-plant-support",
    slug: "cbg-plant-support",
    title: "CBG Plant & Support",
    description:
      "From design to installation, our CBG (Compressed Biogas) Plants are built for maximum efficiency, reliability, and compliance with government norms.",
    metaTitle: "CBG Plant & Support | Product Overview",
    metaDescription:
      "Simple product page for CBG Plant & Support with basic feature and hero information.",
    bannerImage: flaresystem,
    features: [],
  },
};

export const getProductsDataBySlug = (slug) => {
  if (!slug) {
    return null;
  }

  const normalizedSlug = String(slug).trim().toLowerCase();
  return productsData[normalizedSlug] || null;
};
