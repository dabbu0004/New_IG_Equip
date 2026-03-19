import flaresystem from "../assets/dualFuelKit.webp";
import { FaDroplet, FaCloudSun, FaLayerGroup, FaIndustry, FaWrench, FaIndianRupeeSign } from "react-icons/fa6";
const standardFeatures = [
  { id: 1, icon: <FaDroplet />, text: "Water Resistance" },
  { id: 2, icon: <FaCloudSun />, text: "Weather Resistant" },
  { id: 3, icon: <FaLayerGroup />, text: "Stainless Steel" },
  { id: 4, icon: <FaIndustry />, text: "Reduce Pollution" },
  { id: 5, icon: <FaWrench />, text: "Maintenance Free" },
  { id: 6, icon: <FaIndianRupeeSign />, text: "Low Cost" },
];

export const productsData = {
  "flare-system": {
    id: "flare-system",
    slug: "flare-system",
    title: "Flare System",
    highlightTitle: "Flare", 
    restTitle: "System",
    description:
      "Engineered for reliable combustion and environmental compliance, our Flare System ensures safe disposal of excess biogas. With a team of qualified technicians, we design and manufacture emission control devices designed to reduce particulate matter significantly, improving performance and reducing operational cost.",
    metaTitle: "Flare System | Product Overview",
    metaDescription:
      "Simple product page for Flare System with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures, 
  },
  "biogas-membrane-holder": {
    id: "biogas-membrane-holder",
    slug: "biogas-membrane-holder",
    title: "Biogas Membrane Holder",
    highlightTitle: "Biogas",
    restTitle: "Membrane Holder",
    description:
      "Designed for maximum safety and performance, our Biogas Membrane Holder is the perfect fit for modern biogas systems.",
    metaTitle: "Biogas Membrane Holder | Product Overview",
    metaDescription:
      "Simple product page for Biogas Membrane Holder with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
  },
  "digester-technology": {
    id: "digester-technology",
    slug: "digester-technology",
    title: "Digester & Technology",
    highlightTitle: "Digester",
    restTitle: "& Technology",
    description:
      "Maximize biogas output with our high-efficiency digesters and cutting-edge technology. Designed for optimal waste-to-energy conversion and long-term reliability.",
    metaTitle: "Digester & Technology | Product Overview",
    metaDescription:
      "Simple product page for Digester & Technology with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
  },
  "co2-removal": {
    id: "co2-removal",
    slug: "co2-removal",
    title: "CO2 Removal",
    highlightTitle: "CO2",
    restTitle: "Removal",
    description:
      "Enhance the quality of your biogas with our advanced CO₂ Removal systems. Designed for precision and performance, ensuring maximum methane recovery and energy efficiency.",
    metaTitle: "CO2 Removal | Product Overview",
    metaDescription:
      "Simple product page for CO2 Removal with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
  },
  "cbg-plant-support": {
    id: "cbg-plant-support",
    slug: "cbg-plant-support",
    title: "CBG Plant & Support",
    highlightTitle: "CBG Plant",
    restTitle: "& Support",
    description:
      "From design to installation, our CBG (Compressed Biogas) Plants are built for maximum efficiency, reliability, and compliance with government norms.",
    metaTitle: "CBG Plant & Support | Product Overview",
    metaDescription:
      "Simple product page for CBG Plant & Support with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
  },
};

export const getProductsDataBySlug = (slug) => {
  if (!slug) {
    return null;
  }
  const normalizedSlug = String(slug).trim().toLowerCase();
  return productsData[normalizedSlug] || null;
};
