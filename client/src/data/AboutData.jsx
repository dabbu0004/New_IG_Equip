// src/data/AboutData.jsx
import React from "react";
import { FiSettings, FiHeadphones, FiCheckCircle, FiSearch, FiPenTool, FiShield } from "react-icons/fi";
import { BsLightningCharge, BsShieldCheck } from "react-icons/bs";

export const aboutData = {
  hero: {
    badge: "Trusted Partner for Industrial Solutions",
    title1: "Powering Industries,",
    title2: "Building Relationships.",
    description: "We deliver reliable, efficient, and future-ready energy solutions with a commitment to quality, innovation, and long-term value.",
    image: "/images/gallery/img1.webp", // Replace with actual meeting image
  },
  endToEnd: {
    badge: "WHAT WE DO",
    title: "End-to-End Solutions for Industrial",
    titleHighlight: "Excellence",
    description: "From consultation to execution, we provide comprehensive solutions tailored to your business needs.",
    cards: [
      {
        icon: <FiSettings className="text-3xl text-[#f48131]" />,
        title: "Custom Solutions",
        description: "Tailored systems designed to meet your unique operational needs."
      },
      {
        icon: <FiHeadphones className="text-3xl text-[#f48131]" />,
        title: "Reliable Support",
        description: "24/7 expert support ensuring seamless performance."
      }
    ]
  },
  engineered: {
    badge: "BUILT FOR PERFORMANCE",
    title: "Engineered for Your Success",
    image: "/images/gallery/img2.webp", // Replace with actual industrial structure image
    yearsExperience: "15+",
    features: [
      {
        icon: <BsLightningCharge className="text-xl text-[#f48131]" />,
        title: "High Efficiency",
        description: "Optimized systems for maximum output."
      },
      {
        icon: <BsShieldCheck className="text-xl text-[#f48131]" />,
        title: "Sustainable",
        description: "Eco-friendly solutions for a better tomorrow."
      },
      {
        icon: <FiSettings className="text-xl text-[#f48131]" />,
        title: "Innovative Technology",
        description: "Advanced engineering for superior performance."
      },
      {
        icon: <FiCheckCircle className="text-xl text-[#f48131]" />,
        title: "Cost Effective",
        description: "Reliable solutions that reduce operational costs."
      }
    ]
  },
  team: {
    badge: "OUR TEAM",
    title: "Meet Our",
    titleHighlight: "Experts",
    description: "Dedicated professionals driving innovation and delivering results.",
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
      { value: "110,000", label: "CO2 Offset" },
      { value: "4", label: "Active Sites" }
    ],
    title: "Tracing Our Journey Through Time",
    description: "Unveil the remarkable story of our legacy through a meticulously crafted timeline, celebrating the transformative moments that have led us to become a leading force in the renewable energy revolution.",
    events: [
      { year: "2016", text: "Inception of the company", position: "bottom" },
      { year: "2019", text: "Commissioning of Haryana state 1st captive solar power plant 12MWp. LR Energy plans to enter advance Biofuel market", position: "top" },
      { year: "2020", text: "Lr energy Bags 20Lois from Oil Marketing PSUs for setting up CBG plants in North india.", position: "bottom" },
      { year: "2021", text: "Successfully commissioned its 2nd Solar Power plant of capacity 24MWp", position: "top" },
      { year: "2022", text: "Became the 1st company in the state of HARYANA to receive long term approval to supply power under group captive mode to its captive user.", position: "bottom" }
    ]
  },
  results: {
    badge: "OUR RESULTS",
    title: "Delivering Impact That",
    titleHighlight: "Drives Growth",
    description: "Our solutions are built to deliver measurable results and long-term value.",
    stats: [
      { value: "120+", label: "Projects Completed" },
      { value: "94.7%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" },
      { value: "15+", label: "Years of Experience" }
    ],
    process: [
      { icon: <FiSearch />, title: "Understand", desc: "We analyze your requirements." },
      { icon: <FiPenTool />, title: "Design", desc: "Custom solutions engineered for you." },
      { icon: <FiSettings />, title: "Implement", desc: "Precision execution with advanced technology." },
      { icon: <FiHeadphones />, title: "Support", desc: "Continuous support for lasting performance." }
    ]
  },
  faq: {
    badge: "QUESTIONS?",
    title: "We're Here to",
    titleHighlight: "Help",
    description: "Get answers to common questions about our products, services, and support.",
    questions: [
      { q: "What industries do you serve?", a: "We serve manufacturing, commercial, captive power, agriculture, and more." },
      { q: "How do your solutions improve efficiency?", a: "By optimizing fuel usage, reducing emissions, and utilizing advanced control systems." },
      { q: "Do you provide installation and support?", a: "Yes, we offer turnkey solutions including end-to-end installation and 24/7 AMC support." },
      { q: "Can solutions be customized for my needs?", a: "Absolutely. Every project is engineered to match your specific site requirements." }
    ]
  }
};