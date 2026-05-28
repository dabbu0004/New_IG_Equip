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
  introTitleNormal: "To Best",
  introTitleBottom: "Digital Agency!", 
  description1: "Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minim nostrud officiis dolorem fugit itaque, fugiat excepturi modi, porta.",
  description2: "Odio velit, odit, est, euismod aliquid luctus pharetra vero, condimentum, nostrum mi venenatis, mollit odio mi, unde semper adipiscing aut.",
  
  // Feature Cards
  features: [
    {
      id: 1,
      icon: <FaHandHoldingUsd className="text-2xl" />,
      title: "Best Price Guaranteed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isDarkIcon: false, // Uses your #f48131 orange
    },
    {
      id: 2,
      icon: <FiTool className="text-2xl" />,
      title: "Finance Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isDarkIcon: true, // Uses black background like the image
    },
    {
      id: 3,
      icon: <FaUsers className="text-2xl" />,
      title: "Professional Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isDarkIcon: false, // Uses your #f48131 orange
    }
  ],
  
  // Bottom Image Composition
  images: {
    main: "/images/gallery/team-working.jpg", // The large group image
    videoThumb: "/images/gallery/office-video.jpg", // The smaller overlapping video image
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