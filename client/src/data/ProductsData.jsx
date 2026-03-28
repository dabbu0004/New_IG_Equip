import flaresystem from "../assets/dualFuelKit.webp";
import flareSystemVideo from "../assets/products/flare-system.mp4";
import biogasVideo from "../assets/products/biogas.mp4";
import digesterTechnologyVideo from "../assets/products/DigesterTechnology.mp4";
import { FaDroplet, FaCloudSun, FaLayerGroup, FaIndustry, FaWrench, FaIndianRupeeSign } from "react-icons/fa6";
import Enclose from "../assets/products/Enclose_flare.png";
import Open from "../assets/products/Open_flare.png";

const standardFeatures = [
  { id: 1, icon: <FaDroplet />, text: "Water Resistance" },
  { id: 2, icon: <FaCloudSun />, text: "Weather Resistant" },
  { id: 3, icon: <FaLayerGroup />, text: "Stainless Steel" },
  { id: 4, icon: <FaIndustry />, text: "Reduce Pollution" },
  { id: 5, icon: <FaWrench />, text: "Maintenance Free" },
  { id: 6, icon: <FaIndianRupeeSign />, text: "Low Cost" },
];

const standardKeyPoints = [
  "Complete in-house design and manufactured for compliant operation.",
  "Skid mounted for easy low cost installation.",
  "Proprietary pilot burner configuration ensures complete gas destruction.",
  "10:1 or greater turndown.",
  "Candlestick or Enclosed Flares up to 10,000 CFM.",
  "Combustion systems comply with NFPA 86.",
  "Windshield design improves operational stability and turndown.",
  "Adjustable thermocouples to improve operation and temperature control."
];

export const productsData = {
  "flare-system": {
    id: "flare-system",
    slug: "flare-system",
    title: "Flare System",
    highlightTitle: "Flare System ?", 
    restTitle: "What is ",
    description:
      "Engineered for reliable combustion and environmental compliance, our Flare System ensures safe disposal of excess biogas. With a team of qualified technicians, we design and manufacture emission control devices designed to reduce particulate matter significantly, improving performance and reducing operational cost.",
    metaTitle: "Flare System | Product Overview",
    metaDescription:
      "Simple product page for Flare System with basic feature and hero information.",
    bannerImage: flaresystem,
    bannerVideo: flareSystemVideo,
    features: standardFeatures, 
    keyPoints: standardKeyPoints, 
    subProducts: [
      {
        id: "open-type",
        title: "OPEN-TYPE FLARE",
        image: Open, 
        details: [
          "Open flare systems release and burn waste gases in an open-air environment, usually at the top of a tall flare stack. The gas is ignited by a pilot flame.",
          "Requires significant vertical clearance due to open flame and heat radiation.",
          "Visibility of flame and potential noise depending on gas flow and composition.",
          "Relatively low capital cost but requires careful design for efficiency."
        ]
      },
      {
        id: "enclosed-type",
        title: "ENCLOSED-TYPE FLARE",
        image: Enclose,
        details: [
          "Enclosed flare systems burn waste gases inside a combustion chamber or furnace, fully containing the flame. The gas is ignited inside the enclosure. They minimise visible flame, noise, and heat radiation.",
          "Compact footprint suitable for sites with space constraints.",
          "Often equipped with heat recovery systems that utilise combustion heat for energy generation.",
          "Higher capital and operating costs compared to open flare systems due to complexity."
        ]
      }
    ]

  },
  "biogas-membrane-holder": {
    id: "biogas-membrane-holder",
    slug: "biogas-membrane-holder",
    title: "Biogas Membrane Holder",
    highlightTitle: "Biogas Membrane Holder ?", 
    restTitle: "What is ",
    description:
      "Designed for maximum safety and performance, our Biogas Membrane Holder is the perfect fit for modern biogas systems.",
    metaTitle: "Biogas Membrane Holder | Product Overview",
    metaDescription:
      "Simple product page for Biogas Membrane Holder with basic feature and hero information.",
    bannerImage: flaresystem,
    bannerVideo: biogasVideo,
    features: standardFeatures,
    keyPoints: standardKeyPoints, 
  },
  "digester-technology": {
    id: "digester-technology",
    slug: "digester-technology",
    title: "Digester & Technology",
    highlightTitle: "Digester & Technology ?", 
    restTitle: "What is ",
    description:
      "Maximize biogas output with our high-efficiency digesters and cutting-edge technology. Designed for optimal waste-to-energy conversion and long-term reliability.",
    metaTitle: "Digester & Technology | Product Overview",
    metaDescription:
      "Simple product page for Digester & Technology with basic feature and hero information.",
    bannerImage: flaresystem,
    bannerVideo: digesterTechnologyVideo,
    features: standardFeatures,
    keyPoints: standardKeyPoints, 
  },
  "co2-removal": {
    id: "co2-removal",
    slug: "co2-removal",
    title: "CO2 Removal",
    highlightTitle: "Co2 Removal ?", 
    restTitle: "What is ",
    description:
      "Enhance the quality of your biogas with our advanced CO₂ Removal systems. Designed for precision and performance, ensuring maximum methane recovery and energy efficiency.",
    metaTitle: "CO2 Removal | Product Overview",
    metaDescription:
      "Simple product page for CO2 Removal with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
    keyPoints: standardKeyPoints,
  },
  "cbg-plant-support": {
    id: "cbg-plant-support",
    slug: "cbg-plant-support",
    title: "CBG Plant & Support",
    highlightTitle: "CBG Plant & Support ?", 
    restTitle: "What is ",
    description:
      "From design to installation, our CBG (Compressed Biogas) Plants are built for maximum efficiency, reliability, and compliance with government norms.",
    metaTitle: "CBG Plant & Support | Product Overview",
    metaDescription:
      "Simple product page for CBG Plant & Support with basic feature and hero information.",
    bannerImage: flaresystem,
    features: standardFeatures,
    keyPoints: standardKeyPoints, 
  },
};

export const getProductsDataBySlug = (slug) => {
  if (!slug) {
    return null;
  }
  const normalizedSlug = String(slug).trim().toLowerCase();
  return productsData[normalizedSlug] || null;
};