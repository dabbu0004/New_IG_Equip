const sharedDetails = {
	heroBadge: "PRODUCT",
	heroChecklist: [
		"Engineered for reliable performance",
		"Designed for industrial duty cycles",
		"Supported by expert installation"
	],
	heroImages: [],
	features: [
		{ icon: "capacity", title: "Custom Sizing", subtitle: "Tailored to your site" },
		{ icon: "efficiency", title: "High Efficiency", subtitle: "Lower operating costs" },
		{ icon: "reliability", title: "Reliable Performance", subtitle: "Built for uptime" },
		{ icon: "maintenance", title: "Easy Maintenance", subtitle: "Service-friendly design" }
	],
	overviewText:
		"Designed and delivered by Inventive Gas Equipment with a focus on safety, performance, and long-term reliability.",
	fuelOptions: "Natural Gas / Biogas",
	applications: "Industrial, Commercial, Utilities",
	technicalSpecs: [
		{ parameter: "Model Range", details: "Configured per project" },
		{ parameter: "Compliance", details: "As per applicable norms" }
	],
	installationRegions: [
		"Maharashtra",
		"Gujarat",
		"Tamil Nadu",
		"Karnataka",
		"Uttar Pradesh",
		"West Bengal"
	],
	keyBenefits: [
		"Reliable performance across operating conditions",
		"Designed for low maintenance overhead",
		"Supported by expert site integration"
	]
};

const homeProductsRangeData = [
	{
		id: 1,
		category: "Power Generation",
		title: "Gas Gensets",
		description:
			"15 KVA to 500 KVA natural gas and biogas-powered generators for industrial and commercial use.",
		image: "/images/HomeProductRange/GasGenset.webp",
		link: "/products/gas-gensets",
		...sharedDetails,
		heroBadge: "POWER GENERATION",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroChecklist: [
			"Available in natural gas and biogas variants",
			"High fuel efficiency and low emissions",
			"Robust design for continuous operation"
		],
		heroImages: [
			"/images/HomeProductRange/GasGenset.webp",
			"/images/gallery/img1.webp",
			"/images/gallery/img2.webp",
			"/images/gallery/img3.webp",
			"/images/gallery/img4.webp"
		],
		features: [
			{ icon: "capacity", title: "15 - 500 KVA", subtitle: "Capacity Range" },
			{ icon: "emissions", title: "Low Emissions", subtitle: "Environment Friendly" },
			{ icon: "efficiency", title: "High Efficiency", subtitle: "Lower Fuel Consumption" },
			{ icon: "reliability", title: "Reliable Performance", subtitle: "Built for Continuous Operation" },
			{ icon: "maintenance", title: "Easy Maintenance", subtitle: "User-friendly Design" }
		],
		overviewText:
			"Our gas gensets are built using advanced technology and stringent quality standards to deliver reliable power with reduced operational costs. Suitable for industries, commercial establishments, and captive power plants.",
		fuelOptions: "Natural Gas / Biogas",
		applications: "Industrial, Commercial, Captive Power, Agriculture",
		technicalSpecs: [
			{ parameter: "Capacity Range", details: "15 KVA - 500 KVA" },
			{ parameter: "Voltage", details: "415V / 3 Phase / 50Hz" },
			{ parameter: "Fuel Type", details: "Natural Gas / Biogas" },
			{ parameter: "Emission Compliance", details: "CPCB Compliant" },
			{ parameter: "Control System", details: "Smart Digital Controller" },
			{ parameter: "Cooling System", details: "Water Cooled" },
			{ parameter: "Starting System", details: "Auto / Manual" },
			{ parameter: "Power Factor", details: "0.8 / 1.0 (Optional)" },
			{ parameter: "Frequency", details: "50 Hz" },
			{ parameter: "Alternator", details: "Brushless, Self Excited" }
		],
		keyBenefits: [
			"Lower fuel cost per kWh",
			"Cleaner emissions with gas operation",
			"Stable output for continuous loads"
		]
	},
	{
		id: 2,
		category: "Fuel Conversion",
		title: "Dual-Fuel Kits",
		description:
			"Convert existing diesel generators to run on gas + diesel simultaneously. Save up to 40% on fuel costs.",
		image: "/images/image/NewHomeHero.png",
		link: "/products/dual-fuel-kits",
		...sharedDetails,
		heroBadge: "FUEL CONVERSION",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/image/NewHomeHero.png",
			"/images/image/NewHomeHero.png",
			"/images/image/NewHomeHero.png"
		],
		fuelOptions: "Diesel + Gas",
		applications: "Generator Retrofits, Industrial Backup Power",
		keyBenefits: [
			"Fuel savings without full replacement",
			"Quick retrofit with minimal downtime",
			"Flexible dual-fuel operation"
		]
	},
	{
		id: 3,
		category: "Emission Control",
		title: "RECD Device",
		description:
			"CPCB-approved Retrofit Emission Control Devices to reduce particulate matter by up to 99%.",
		image: "/images/HomeProductRange/RECD.jpeg",
		link: "/products/recd-device",
		...sharedDetails,
		heroBadge: "EMISSION CONTROL",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/RECD.jpeg",
			"/images/HomeProductRange/RECD.jpeg",
			"/images/HomeProductRange/RECD.jpeg"
		],
		fuelOptions: "Diesel",
		applications: "Compliance, Retrofit, Industrial Fleets",
		keyBenefits: [
			"CPCB compliance support",
			"High particulate reduction",
			"Retrofit for existing fleets"
		]
	},
	{
		id: 4,
		category: "Biogas Solutions",
		title: "Biogas Equipment",
		description:
			"Membrane gas holders, digesters, biogas conditioning and storage systems for sustainable energy.",
		image: "/images/HomeProductRange/BioGas.jpeg",
		link: "/products/biogas-equipment",
		...sharedDetails,
		heroBadge: "BIOGAS SOLUTIONS",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/BioGas.jpeg",
			"/images/HomeProductRange/BioGas.jpeg",
			"/images/HomeProductRange/BioGas.jpeg"
		],
		keyBenefits: [
			"End-to-end biogas handling",
			"Improved gas quality and stability",
			"Scalable for plant expansion"
		]
	},
	{
		id: 5,
		category: "Gas Holder",
		title: "Double Membrane Gas Holder",
		description:
			"Engineering, installation, and commissioning of double-membrane gas holders for stable biogas storage and pressure control.",
		image: "/images/HomeProductRange/doubleMembrane.jpg",
		link: "/products/double-membrane-gas-holder",
		...sharedDetails,
		heroBadge: "GAS STORAGE",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/doubleMembrane.jpg",
			"/images/HomeProductRange/doubleMembrane.jpg",
			"/images/HomeProductRange/doubleMembrane.jpg"
		],
		keyBenefits: [
			"Stable storage pressure",
			"High safety with robust membranes",
			"Optimized footprint and layout"
		]
	},
	{
		id: 6,
		category: "Gas Removal",
		title: "CO2 Removal System",
		description:
			"Design and setup of CO2 removal skids to upgrade biogas quality for gensets and pipeline-ready applications.",
		image: "/images/HomeProductRange/CO2Remover.jpg",
		link: "/products/co2-removal-system",
		...sharedDetails,
		heroBadge: "GAS UPGRADING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/CO2Remover.jpg",
			"/images/HomeProductRange/CO2Remover.jpg",
			"/images/HomeProductRange/CO2Remover.jpg"
		],
		keyBenefits: [
			"Higher methane concentration",
			"Pipeline-ready gas quality",
			"Efficient skid-based installation"
		]
	},
	{
		id: 7,
		category: "Flaring System",
		title: "Flaring System",
		description:
			"Supply and commissioning of open/closed flares for safe excess gas handling with compliant flame safety controls.",
		image: "/images/HomeProductRange/flareOpenClose.png",
		link: "/products/flaring-system",
		...sharedDetails,
		heroBadge: "SAFETY SYSTEMS",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/flareOpenClose.png",
			"/images/HomeProductRange/flareOpenClose.png",
			"/images/HomeProductRange/flareOpenClose.png"
		],
		keyBenefits: [
			"Safe excess gas handling",
			"Compliant flame arrestor controls",
			"Reliable ignition and monitoring"
		]
	},
	{
		id: 8,
		category: "H2S Scrubber",
		title: "H2S Scrubber",
		description:
			"H2S scrubbing solutions with media selection, vessel sizing, and on-site integration for low-sulfur gas output.",
		image: "/images/HomeProductRange/H2SRemover.jpg",
		link: "/products/h2s-scrubber",
		...sharedDetails,
		heroBadge: "GAS CLEANING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/H2SRemover.jpg",
			"/images/HomeProductRange/H2SRemover.jpg",
			"/images/HomeProductRange/H2SRemover.jpg"
		],
		keyBenefits: [
			"Lower H2S for equipment protection",
			"Media optimized for long life",
			"Simple maintenance access"
		]
	},
	{
		id: 9,
		category: "Dehumidifier",
		title: "Dehumidifier",
		description:
			"Biogas dehumidification units to reduce moisture, protect downstream equipment, and improve system efficiency.",
		image: "/images/HomeProductRange/dehumidifier.webp",
		link: "/products/dehumidifier",
		...sharedDetails,
		heroBadge: "GAS DRYING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/dehumidifier.webp",
			"/images/HomeProductRange/dehumidifier.webp",
			"/images/HomeProductRange/dehumidifier.webp"
		],
		keyBenefits: [
			"Moisture control for stable output",
			"Protects downstream equipment",
			"Energy-efficient operation"
		]
	},
	{
		id: 10,
		category: "Water Treatment",
		title: "RO+UF Plant",
		description:
			"Turnkey RO+UF water treatment plants with sizing, installation, and operator training for reliable process water.",
		image: "/images/HomeProductRange/wtp.jpg",
		link: "/products/ro-uf-plant",
		...sharedDetails,
		heroBadge: "WATER TREATMENT",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroImages: [
			"/images/HomeProductRange/wtp.jpg",
			"/images/HomeProductRange/wtp.jpg",
			"/images/HomeProductRange/wtp.jpg"
		],
		fuelOptions: "Not Applicable",
		applications: "Industrial Water, Process Water",
		keyBenefits: [
			"Consistent output quality",
			"Turnkey installation and training",
			"Optimized for low OPEX"
		]
	}
];

export default homeProductsRangeData;
