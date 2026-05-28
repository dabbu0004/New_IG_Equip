// src/data/AboutData.jsx
import { FiSettings, FiHeadphones, FiCheckCircle, FiSearch, FiPenTool } from "react-icons/fi";
import { BsLightningCharge, BsShieldCheck } from "react-icons/bs";
import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { FiTool } from "react-icons/fi";

export const aboutData = {
  bannerImage: "/images/gallery/img1.webp", // Top background image
  pageTitle: "About us",
  
  // Intro Section
  badge: "ABOUT US",
  introTitleHighlight: "Introduction",
  introTitleNormal: "To Industrial",
  introTitleBottom: "Energy & Equipment Services",
  description1: "We deliver end to end solutions for industrial energy systems, equipment supply, and on site commissioning. From design and procurement to installation and optimization, our team ensures safe, efficient, and reliable operations for every project.",
  description2: "Our service model blends engineering expertise with responsive support. We provide preventive maintenance, performance audits, and compliance driven upgrades so your plants run cleaner, longer, and with lower operating costs.",
  
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
    main: "/images/About/AboutPic.jpeg", // The large group image
    videoThumb: "/images/gallery/office-video.jpg", // The smaller overlapping video image
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
      { name: "Rajesh Kumar", role: "Managing Director", image: "/images/team/1.jpg" },
      { name: "Anita Sharma", role: "Chief Operations Officer", image: "/images/team/2.jpg" },
      { name: "Vikram Mehta", role: "Head of Engineering", image: "/images/team/3.jpg" },
      { name: "Sneha Reddy", role: "Project Head", image: "/images/team/4.jpg" },
      { name: "Arun Verma", role: "Technical Director", image: "/images/team/5.jpg" }
    ]
  },
  timeline: {
    stats: [
      { value: "100+", label: "Team Members" },
      { value: "110,000", label: "Hours Supported" },
      { value: "4", label: "Regional Service Hubs" }
    ],
    title: "Tracing Our Journey Through Time",
    description: "A growth story shaped by on site delivery, stronger partnerships, and continuous improvement in industrial energy and equipment services.",
    events: [
      { year: "2016", text: "Company founded with a focus on industrial energy systems.", position: "bottom" },
      { year: "2018", text: "Expanded commissioning and maintenance services across multiple sites.", position: "top" },
      { year: "2020", text: "Added performance auditing and efficiency retrofit programs.", position: "bottom" },
      { year: "2022", text: "Built regional service hubs for faster response times.", position: "top" },
      { year: "2024", text: "Delivered large scale turnkey installations and upgrades.", position: "bottom" }
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