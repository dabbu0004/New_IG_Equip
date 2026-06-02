// src/data/AboutData.jsx
import { FiSettings, FiHeadphones, FiCheckCircle, FiSearch, FiPenTool } from "react-icons/fi";
import { BsLightningCharge, BsShieldCheck } from "react-icons/bs";
import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export const aboutData = {
  bannerImage: "/images/About/AboutHero.png", // Top background image
  pageTitle: "About us",
  
  // Intro Section
  badge: "Overview",
  introTitleHighlight: "Process engineering ",
  introTitleNormal: "solutions for Biogas,",
  introTitleBottom: "STP,CBG & Emission Control",
  description1: "We deliver end to end solutions for industrial energy systems, equipment supply, and on site commissioning. From design and procurement to installation and optimization, our team ensures safe, efficient, and reliable operations for every project.",
  description2: "Our service model blends engineering expertise with responsive support. We provide preventive maintenance, performance audits, and compliance driven upgrades so your plants run cleaner, longer, and with lower operating costs.",

  companyIntroTitle: "Inventive Gas Equipment Pvt. Ltd.",
  companyIntroText:
    "Inventive Gas Equipment Pvt. Ltd. is an engineering-focused company specializing in biogas systems, emission control solutions, and CBG plant equipment.Also serving STP and industrial gas applications, we design, supply, and commission high-performance equipment that meets stringent environmental standards.",
  companyIntroText2:
    "We work closely with EPC contractors and plant operators to deliver reliable, efficient, and performance-driven solutions across a wide range of industrial applications.The company is committed to innovation, quality, and customer satisfaction, ensuring that every project is executed with precision and care.",
  capabilitiesTitle: "Our Expertise Covers",
  capabilities: [
    "RECD systems for diesel generator emission control",
    "Double membrane biogas gas holders",
    "H2S removal systems (scrubbers)",
    "Gas dehumidification systems",
    "Flare systems for safe gas handling",
    "Balance of plant equipment for CBG facilities"
  ],
  
  // Feature Cards
  features: [
    {
      id: 1,
      icon: <FaHandHoldingUsd className="text-2xl" />,
      title: "Transparent Pricing",
      description: "Clear scopes, competitive rates, and no surprise charges.",
      isDarkIcon: false, // Uses your #f48131 orange
    },
    {
      id: 2,
      icon: <FiTool className="text-2xl" />,
      title: "Lifecycle Value",
      description: "Optimized solutions that cut energy waste over time.",
      isDarkIcon: true, // Uses black background like the image
    },
    {
      id: 3,
      icon: <FaUsers className="text-2xl" />,
      title: "Certified Experts",
      description: "Experienced engineers and technicians for critical systems.",
      isDarkIcon: false, // Uses your #f48131 orange
    }
  ],
  
  // Bottom Image Composition
  images: {
    main: "/images/WhyUsPic.jpeg", // The large group image
    videoThumb: "/images/About/AboutVid1.mp4", // The smaller overlapping video image
  },
  videoShowcase: {
    title: "Company Videos",
    subtitle: "Add MP4s later to highlight projects, commissioning, and systems in operation.",
    items: [
      {
        title: "Project Walkthroughs",
        description: "Site layouts, equipment placement, and commissioning highlights.",
        thumb: "/images/About/office-video.jpg"
      },
      {
        title: "Factory & Fabrication",
        description: "Manufacturing quality, testing, and in-house build capabilities.",
        thumb: "/images/About/office-video.jpg"
      },
      {
        title: "Operations & Support",
        description: "Service response, preventive maintenance, and uptime performance.",
        thumb: "/images/About/office-video.jpg"
      }
    ]
  },
  engineered: {
    badge: "BUILT FOR PERFORMANCE",
    title: "Engineered for Reliable Performance",
    image: "/images/About/Excellence.webp", // Replace with actual industrial structure image
    yearsExperience: "15+",
    features: [
      {
        icon: <BsLightningCharge className="text-xl text-[#f48131]" />,
        title: "High Efficiency",
        description: "Smart designs that improve throughput and reduce downtime."
      },
      {
        icon: <BsShieldCheck className="text-xl text-[#f48131]" />,
        title: "Sustainable",
        description: "Cleaner operations with efficient fuel and resource usage."
      },
      {
        icon: <FiSettings className="text-xl text-[#f48131]" />,
        title: "Innovative Technology",
        description: "Modern controls and monitoring for predictable output."
      },
      {
        icon: <FiCheckCircle className="text-xl text-[#f48131]" />,
        title: "Cost Effective",
        description: "Lower lifetime cost with dependable components."
      }
    ]
  },
  team: {
    badge: "OUR TEAM",
    title: "Meet Our",
    titleHighlight: "Experts",
    description: "Dedicated professionals delivering safe installations and responsive support.",
    members: [
      { name: "Deepak Singh ", role: "Managing Director & CO-Founder", image: "/images/About/DeepakSingh.jpg", linkedin: "https://www.linkedin.com/in/deepak-singh-a15a922b6/", icon: <FaLinkedinIn /> },
      { name: "Vipin Kumar", role: "Co-Founder & CFO", image: "/images/About/VipinKumar.jpg", linkedin: "https://www.linkedin.com/in/vipin-kumar-776762192/", icon: <FaLinkedinIn /> },
      { name: "Ravi Kumar", role: "Co-Founder & Director ", image: "/images/About/RaviKumar.jpg", linkedin: "http://linkedin.com/in/ravi-kumar-897b4810b/", icon: <FaLinkedinIn /> }
    ]
  },
 timeline: {
    stats: [
      { value: "100+", label: "Team Members" },
      { value: "2000+", label: "Dual Fuel Installs" },
      { value: "4", label: "Regional Service Hubs" }
    ],
    title: "Tracing Our Journey Through Time",
    description: "A growth story shaped by continuous innovation, from foundational biogas solutions to market-leading emission control technology.",
    events: [
      { year: "2017", text: "Founded with a vision to deliver high-quality, reliable biogas solutions.", position: "bottom" },
      { year: "2018", text: "Engineered and developed single & double membrane biogas holders.", position: "top" },
      { year: "2020", text: "Pioneered dual fuel systems and initiated early-stage deployments.", position: "bottom" },
      { year: "2022", text: "Pan-India expansion (2000+ installs), OEM CPCB approval, & launched PSI Gensets.", position: "top" },
      { year: "2023", text: "Diversified into gas treatment (H₂S & Dehumidification) and STP EPC projects.", position: "bottom" },
      { year: "2024", text: "Launched CPCB-approved Vayu-Pure RECD achieving >95% PM reduction.", position: "top" },
      { year: "2025", text: "Commissioned in-house manufacturing; expanded footprint in STP and CBG sectors.", position: "bottom" },
      { year: "2026", text: "Achieving market leadership with major EPC orders and next-gen equipment R&D.", position: "top" }
    ]
  },
  results: {
    badge: "OUR RESULTS",
    title: "Delivering Impact That",
    titleHighlight: "Drives Efficiency",
    description: "We focus on measurable uptime, safer operations, and long term energy savings.",
    stats: [
      { value: "180+", label: "Projects Delivered" },
      { value: "98%", label: "On Time Completion" },
      { value: "24/7", label: "Service Support" },
      { value: "15+", label: "Years of Field Experience" }
    ],
    process: [
      { icon: <FiSearch />, title: "Assess", desc: "We audit your site and operational needs." },
      { icon: <FiPenTool />, title: "Engineer", desc: "We design reliable, compliant solutions." },
      { icon: <FiSettings />, title: "Execute", desc: "We install, test, and commission on time." },
      { icon: <FiHeadphones />, title: "Support", desc: "We monitor and maintain for long term uptime." }
    ]
  },
  faq: {
    badge: "QUESTIONS?",
    title: "We're Here to",
    titleHighlight: "Help",
    description: "Get answers about commissioning, maintenance, audits, and service coverage.",
    questions: [
      { q: "What industries do you support?", a: "We serve manufacturing, commercial facilities, captive power, and process industries." },
      { q: "Do you provide turnkey commissioning?", a: "Yes, we handle design, supply, installation, testing, and handover." },
      { q: "How do you improve energy performance?", a: "We audit usage, optimize systems, and install efficient controls and upgrades." },
      { q: "Is preventive maintenance available?", a: "Yes, we offer AMC plans with scheduled inspections and rapid response support." },
      { q: "Can solutions be customized?", a: "Every project is tailored to site conditions, compliance, and production goals." }
    ]
  }
};