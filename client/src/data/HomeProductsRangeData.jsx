const sharedDetails = {
	heroBadge: "PRODUCT",
	heroChecklist: [
		"Engineered for reliable performance",
		"Designed for industrial duty cycles"	
		
	],
	heroImages: [],
	features: [
		{ icon: "capacity", title: "Custom Sizing", subtitle: "Tailored to your site" },
		{ icon: "emissions", title: "Low Emissions", subtitle: "Environment Friendly" },
		{ icon: "efficiency", title: "High Efficiency", subtitle: "Lower operating costs" },
		{ icon: "reliability", title: "Reliable Performance", subtitle: "Built for uptime" },
		{ icon: "maintenance", title: "Easy Maintenance", subtitle: "Service-friendly design" }
	],
	overviewTitle:"",
	overviewExtraText:
		"We align layout, utilities, and safety norms to match your operating environment and long-term expansion plans.",
	bannerDescription:
		"Project-specific engineering and on-site integration help maintain stable performance, lower operating costs, and smooth service support.",
	bannerHeading: "Why It Matters",
	bannerLongDescription:
		"Every installation is aligned with your process demands, available utilities, and safety requirements. We evaluate site conditions, fuel quality, and operating cycles before finalizing the configuration. This ensures stable performance, lower operating costs, and a smoother service lifecycle after commissioning.",
	bannerImage: "/images/HomeHero/GasEnergy.png",
	fuelOptions: "Natural Gas / Biogas",
	applications: "Industrial, Commercial, Utilities",
	overviewOptions: [],
	lowerBannerMobile: "/images/ProductsBanner/LowerBanner.png",

	technicalSpecs: [
		{ parameter: "Model Range", details: "Configured per project" },
		{ parameter: "Compliance", details: "As per applicable norms" },
		{ parameter: "Design Basis", details: "Site-specific inputs" },
		{ parameter: "Materials", details: "Project dependent" },
		{ parameter: "Controls", details: "Standard safety interlocks" },
		{ parameter: "Installation", details: "On-site commissioning" }
	],
	installationRegions: [
		"Maharashtra",
		"Gujarat",
		"Tamil Nadu",
		"Karnataka",
		"Uttar Pradesh",
		"West Bengal"
	],
	mapLocations: [
		{ name: "Maharashtra", top: "62%", left: "38%" },
		{ name: "Gujarat", top: "48%", left: "32%" },
		{ name: "Tamil Nadu", top: "82%", left: "45%" },
		{ name: "Karnataka", top: "70%", left: "40%" },
		{ name: "Uttar Pradesh", top: "38%", left: "55%" }
	],
	whySection: {
		heading: "Why Choose Inventive Gas Equipment",
		points: [
			"Strong in-house manufacturing capabilities",
			"Proven execution in large-scale infrastructure projects",
			"Focus on customized engineering solutions",
			"Expertise in complete biogas system integration",
			"Reliable after-sales service and support"
		]
	},
	applicationsList: [],

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
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

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
			{ icon: "capacity", title: "15 - 500 KVA", subtitle: "Capacity Range, Low Emissions" },
			{ icon: "emissions", title: "Low Emissions", subtitle: "Environment Friendly" },
			{ icon: "efficiency", title: "High Efficiency", subtitle: "Lower Fuel Consumption" },
			{ icon: "reliability", title: "Reliable Performance", subtitle: "Built for Continuous Operation" },
			{ icon: "maintenance", title: "Easy Maintenance", subtitle: "User-friendly Design" }
		],
		overviewText:
			"Our gas gensets are built using advanced technology and stringent quality standards to deliver reliable power with reduced operational costs. The range supports continuous duty cycles and stable output for industrial, commercial, and captive power applications. Each installation is configured to site load profiles, fuel availability, and compliance requirements.",
		overviewExtraText:
			"We size the solution around your load profile, operating hours, and fuel quality to ensure dependable output and efficient running costs.",
		bannerDescription:
			"Built for continuous duty, our gas gensets combine reliable control systems and proven alternator performance to keep critical operations running without interruption.",
		bannerHeading: "Gas Gensets Advantage",
		bannerLongDescription:
			"Our gas gensets are designed for continuous duty with a focus on fuel efficiency and consistent power delivery. The control system adapts to load changes while maintaining stable output and lower emissions. Each system is configured to match site loads, fuel availability, and compliance requirements to keep critical operations running without interruption.",
		bannerImage: "/images/HomeHero/GasEnergy.png",
		fuelOptions: "Natural Gas / Biogas",
		applications: "Industrial, Commercial, Captive Power, Agriculture",
		overviewOptions: [
			{ icon: "performance", label: "Performance", value: "Continuous duty readiness" },
			{ icon: "service", label: "Service Coverage", value: "Installation + AMC support" }
		],
		faqs: [
			{
				question: "What fuel options are supported?",
				answer: "Gas gensets can operate on Natural Gas or Biogas based on site availability."
			},
			{
				question: "What is the capacity range?",
				answer: "Configured from 15 KVA up to 500 KVA for industrial and commercial loads."
			},
			{
				question: "Are they suitable for continuous duty?",
				answer: "Yes, they are engineered for continuous operation with stable output."
			},
			{
				question: "Do they meet emission norms?",
				answer: "Systems are configured to meet applicable CPCB compliance requirements."
			}
		],
		technicalSpecs: [
			{ parameter: "Capacity Range", details: "15 KVA - 500 KVA" },
			{ parameter: "Voltage", details: "415V / 3 Phase / 50Hz" },  
			{ parameter: "Emission Compliance", details: "CPCB Compliant" },
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
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/image/NewHomeHero.png",
			"/images/image/NewHomeHero.png",
			"/images/image/NewHomeHero.png"
		],
		overviewExtraText:
			"The kit is engineered for quick retrofit with minimal downtime, while keeping the generator within safe operating limits.",
		bannerDescription:
			"Dual-fuel operation lowers diesel consumption while maintaining stable power output, making it ideal for backup and continuous running applications.",
		bannerHeading: "Dual-Fuel Advantage",
		bannerLongDescription:
			"Dual-fuel kits reduce diesel consumption without sacrificing power stability. The system balances gas and diesel mix based on load and fuel availability to keep operating costs in check. It is ideal for retrofit projects where you want savings with minimal downtime and no major engine replacement.",
		bannerImage: "/images/HomeHero/DualFuel.png",
		technicalSpecs: [
			{ parameter: "Conversion Type", details: "Diesel + Gas" },
			{ parameter: "Compatibility", details: "15 KVA - 500 KVA" },
			{ parameter: "Gas Supply", details: "PNG / CNG / Biogas" },
			{ parameter: "Diesel Substitution", details: "Up to 60% (site dependent)" },
			{ parameter: "Control System", details: "Auto changeover controller" },
			{ parameter: "Installation", details: "Retrofit kit" }
		],
		fuelOptions: "Diesel + Gas",
		applications: "Generator Retrofits, Industrial Backup Power",
		overviewOptions: [
			{ icon: "performance", label: "Fuel Savings", value: "Up to 60% diesel substitution" },
			{ icon: "service", label: "Retrofit Time", value: "Minimal downtime on site" }
		],
		faqs: [
			{
				question: "How much diesel saving can I expect?",
				answer: "Typical projects achieve up to 60% diesel substitution depending on load and gas supply."
			},
			{
				question: "Is major engine replacement required?",
				answer: "No, the kit retrofits onto existing diesel generators."
			},
			{
				question: "What gas types are supported?",
				answer: "PNG, CNG, and Biogas can be used based on availability."
			},
			{
				question: "How long does installation take?",
				answer: "Most retrofits are completed with minimal downtime on site."
			}
		],
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
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/RECD.jpeg",
			"/images/HomeProductRange/RECD.jpeg",
			"/images/HomeProductRange/RECD.jpeg"
		],
		overviewExtraText:
			"Our retrofit solutions help you meet regulatory requirements while maintaining generator performance and reliability.",
		bannerDescription:
			"RECD systems are designed to reduce particulate matter and support compliance without the need to replace existing equipment.",
		bannerHeading: "Cleaner Emissions",
		bannerLongDescription:
			"RECD solutions help your generators meet regulatory requirements while keeping performance stable. The system reduces particulate matter and maintains safe back pressure within OEM limits. It is a retrofit-friendly approach for fleets that must comply with CPCB norms without full replacement.",
		bannerImage: "/images/HomeHero/RECD.png",
		technicalSpecs: [
			{ parameter: "Compliance", details: "CPCB II" },
			{ parameter: "PM Reduction", details: "Up to 99%" },
			{ parameter: "Fuel Type", details: "Diesel" },
			{ parameter: "Retrofit Type", details: "On-site installation" },
			{ parameter: "Back Pressure", details: "Within OEM limits" },
			{ parameter: "Monitoring", details: "DP gauge + soot level" }
		],
		fuelOptions: "Diesel",
		applications: "Compliance, Retrofit, Industrial Fleets",
		overviewOptions: [
			{ icon: "reliability", label: "Compliance", value: "CPCB retrofit ready" },
			{ icon: "service", label: "Maintenance", value: "Simple media handling" }
		],
		faqs: [
			{
				question: "Is the RECD system CPCB compliant?",
				answer: "Yes, the system is designed to support CPCB II compliance."
			},
			{
				question: "What particulate reduction is achieved?",
				answer: "Up to 99% particulate reduction based on site conditions."
			},
			{
				question: "Will it affect engine performance?",
				answer: "Back pressure remains within OEM limits for safe operation."
			},
			{
				question: "Is it a retrofit solution?",
				answer: "Yes, it is installed on existing diesel generators without replacement."
			}
		],
		keyBenefits: [
			"CPCB compliance support",
			"High particulate reduction",
			"Retrofit for existing fleets"
		]
	},

	{
		id: 4,
		category: "Gas Holder",
		title: "Double Membrane Gas Holder",
		description:
			"High-performance double membrane gas holders engineered for safe, reliable and efficient biogas storage in industrial renewable energy systems",
		image: "/images/HomeProductRange/doubleMembrane.jpg",
		link: "/products/double-membrane-gas-holder",
		...sharedDetails,
		heroBadge: "Advanced Biogas Storage Solution",
		heroBanner: "/images/ProductsBanner/DoubleMembraneBanner.png",
		heroBannerMobile: "/images/ProductsBanner/DoubleMembraneBanner.png",

		heroImages: [
			"/images/HomeProductRange/doubleMembrane.jpg",
			"/images/HomeProductRange/doubleMembrane.jpg",
			"/images/HomeProductRange/doubleMembrane.jpg"
		],
		overviewTitle:"Reliable Biogas Storage for Mordern Energy Systems",
		overviewText:"Inventive Gas Equipment’s Double Membrane Gas Holder is an advanced gas storage system designed to ensure safe, efficient, and consistent biogas handling in anaerobic digestion and CBG applications. Manufactured in-house using high-quality European-grade membrane materials, our gas holders are engineered to deliver stable pressure, long service life, and reliable performance under varying operating conditions.With flexible installation options and fully customized designs, our systems are suitable for a wide range of applications including STPs, industrial biogas plants, and large-scale CBG projects. ",
		overviewExtraText:
			"Stable pressure control and safe storage help maintain consistent gas supply for engines and burners.",
		bannerDescription:
			"Double membrane holders provide reliable storage with robust safety features, optimized footprint, and long service life.",
		bannerHeading: "Stable Gas Storage",
		bannerLongDescription:
			"Double membrane gas holders provide stable pressure control and safe storage for continuous operation. The design optimizes footprint while delivering reliable supply to engines or burners. Safety systems and robust membranes support long service life with minimal maintenance.",
		bannerImage: "/images/HomeProductRange/doubleMembrane.jpg",
		overviewOptions: [
			{ icon: "reliability", label: "Constant Gas Pressure", value: "Stable storage pressure" },
			{ icon: "service", label: "Weather Resistant", value: "Outdoor-ready membrane" },
			{ icon: "performance", label: "Fast Installation", value: "Quick on-site setup" },
			{ icon: "maintenance", label: "Low Maintenance", value: "Reduced upkeep" },
			{ icon: "emissions", label: "Corrosion Resistant", value: "Durable materials" },
			{ icon: "capacity", label: "Custom Engineered", value: "Project-specific sizing" }
		],
		faqs: [
			{
				question: "What storage type is used?",
				answer: "Double membrane storage with stable pressure control."
			},
			{
				question: "How is pressure managed?",
				answer: "Auto blower and control system maintain safe pressure."
			},
			{
				question: "What safety features are included?",
				answer: "Over/under pressure valves and robust membrane design."
			},
			{
				question: "Can capacity be customized?",
				answer: "Yes, capacity is configured per project requirement."
			}
		],
	technicalSpecs: [
      { parameter: "Storage Capacity", details: "Customizable" },
      { parameter: "Membrane Material", details: "PVC / PVDF Coated Fabric" },
      { parameter: "Gas Type", details: "Biogas / Methane / Biomethane" },
      { parameter: "Structure Type", details: "Double Membrane" },
      { parameter: "Pressure Control", details: "Automatic" },
      { parameter: "Installation Type", details: "Ground or Tank Mounted" },
      { parameter: "Weather Resistance", details: "Yes" },
      { parameter: "Corrosion Protection", details: "High" }
    ],
		keyBenefits: [
			"Stable storage pressure",
			"High safety with robust membranes",
			"Optimized footprint and layout"
		],
		keyFeatures: [
			{
				id: 1,
				title: "Stable Pressure Control",
				description: "Maintains uniform gas pressure for uninterrupted system operation."
			},
			{
				id: 2,
				title: "High Storage Efficiency",
				description: "Optimized design allows maximum gas storage with minimal footprint."
			},
			{
				id: 3,
				title: "Leak-Proof Construction",
				description: "Precision welded membranes ensure superior gas tightness."
			},
			{
				id: 4,
				title: "UV & Weather Resistant",
				description: "Built for harsh environmental and outdoor conditions."
			},
			{
				id: 5,
				title: "Quick Installation",
				description: "Modular design enables fast and easy on-site setup."
			},
			{
				id: 6,
				title: "Long Service Life",
				description: "Industrial-grade material built for continuous operation."
			}
		],
		advantage: {
			heading: "Double Membrane Advantage",
			description:
				"Double membrane gas holders deliver stable storage pressure with efficient footprint utilization, robust safety systems, and long service life. The design supports consistent gas supply with dependable pressure control for engines, burners, and downstream processes.",
			points: [
				"Stable pressure control for reliable gas supply",
				"High safety with over/under pressure protection",
				"Optimized footprint with efficient storage",
				"Weather-resistant membrane materials",
				"Lower maintenance with long service life"
			]
		},
		applicationsList: [
			"Biogas Plants",
			"CBG (Compressed Biogas) Projects",
			"Sewage Treatment Plants (STP)",
			"Industrial Waste-to-Energy Plants",
			"Food & Agro Processing Units"
		]
	},
	{
		id: 5,
		category: "Gas Removal",
		title: "CO2 Removal System",
		description:
			"Design and setup of CO2 removal skids to upgrade biogas quality for gensets and pipeline-ready applications.",
		image: "/images/HomeProductRange/CO2Remover.jpg",
		link: "/products/co2-removal-system",
		...sharedDetails,
		heroBadge: "GAS UPGRADING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/CO2Remover.jpg",
			"/images/HomeProductRange/CO2Remover.jpg",
			"/images/HomeProductRange/CO2Remover.jpg"
		],
		overviewExtraText:
			"Upgraded gas quality improves combustion efficiency and makes the output suitable for higher-value applications.",
		bannerDescription:
			"CO2 removal skids enhance methane concentration, delivering pipeline-ready gas or efficient genset fuel.",
		bannerHeading: "Gas Upgrading",
		bannerLongDescription:
			"CO2 removal systems improve methane concentration and overall fuel quality. The modular skid approach simplifies installation while maintaining reliable control and monitoring. The result is pipeline-ready gas or more efficient genset fuel with improved combustion performance.",
		bannerImage: "/images/HomeProductRange/CO2Remover.jpg",
		overviewOptions: [
			{ icon: "performance", label: "Methane Upgrade", value: "Up to 95% CH4" },
			{ icon: "service", label: "Skid Build", value: "Modular installation" }
		],
		faqs: [
			{
				question: "What technology is used?",
				answer: "Water scrubbing or PSA based on project requirements."
			},
			{
				question: "What methane purity is achieved?",
				answer: "Up to 95% CH4 outlet quality is possible."
			},
			{
				question: "Is it skid-mounted?",
				answer: "Yes, modular skid design simplifies installation."
			},
			{
				question: "What utilities are needed?",
				answer: "Standard power and water connections based on capacity."
			}
		],
		technicalSpecs: [
			{ parameter: "Technology", details: "Water scrubbing / PSA" },
			{ parameter: "Inlet CH4", details: "55-65%" },
			{ parameter: "Outlet CH4", details: "Up to 95%" },
			{ parameter: "Skid Type", details: "Modular skid" },
			{ parameter: "Utilities", details: "Power + water" },
			{ parameter: "Control", details: "PLC-based" }
		],
		keyBenefits: [
			"Higher methane concentration",
			"Pipeline-ready gas quality",
			"Efficient skid-based installation"
		]
	},
	{
		id: 6,
		category: "Flaring System",
		title: "Flaring System",
		description:
			"Supply and commissioning of open/closed flares for safe excess gas handling with compliant flame safety controls.",
		image: "/images/HomeProductRange/flareOpenClose.png",
		link: "/products/flaring-system",
		...sharedDetails,
		heroBadge: "SAFETY SYSTEMS",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/flareOpenClose.png",
			"/images/HomeProductRange/flareOpenClose.png",
			"/images/HomeProductRange/flareOpenClose.png"
		],
		overviewExtraText:
			"Our flare systems are engineered for safe, controlled disposal of excess gas with dependable ignition and monitoring.",
		bannerDescription:
			"Open or closed flare options provide reliable safety for biogas plants while maintaining compliance with site norms.",
		bannerHeading: "Safe Flaring",
		bannerLongDescription:
			"Flaring systems provide safe disposal of excess gas with dependable ignition and monitoring. Options include open or closed flares based on site safety and regulatory requirements. This ensures plant protection during maintenance or gas surplus conditions.",
		bannerImage: "/images/HomeProductRange/flareOpenClose.png",
		overviewOptions: [
			{ icon: "reliability", label: "Ignition", value: "Auto ignition with monitoring" },
			{ icon: "service", label: "Compliance", value: "Applicable safety norms" }
		],
		faqs: [
			{
				question: "Do you provide open and closed flares?",
				answer: "Yes, both open and closed flare options are available."
			},
			{
				question: "How is ignition handled?",
				answer: "Auto ignition with monitoring ensures safe operation."
			},
			{
				question: "Is it compliant with safety norms?",
				answer: "Designed to meet applicable safety and regulatory requirements."
			},
			{
				question: "What monitoring is included?",
				answer: "Temperature and flame sensors are integrated."
			}
		],
		technicalSpecs: [
			{ parameter: "Type", details: "Open / Closed" },
			{ parameter: "Capacity", details: "Configured per project" },
			{ parameter: "Ignition", details: "Auto ignition" },
			{ parameter: "Safety", details: "Flame arrestor" },
			{ parameter: "Monitoring", details: "Temperature + flame sensor" },
			{ parameter: "Compliance", details: "Applicable norms" }
		],
		keyBenefits: [
			"Safe excess gas handling",
			"Compliant flame arrestor controls",
			"Reliable ignition and monitoring"
		]
	},
	{
		id: 7,
		category: "H2S Scrubber",
		title: "H2S Scrubber",
		description:
			"H2S scrubbing solutions with media selection, vessel sizing, and on-site integration for low-sulfur gas output.",
		image: "/images/HomeProductRange/H2SRemover.jpg",
		link: "/products/h2s-scrubber",
		...sharedDetails,
		heroBadge: "GAS CLEANING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/H2SRemover.jpg",
			"/images/HomeProductRange/H2SRemover.jpg",
			"/images/HomeProductRange/H2SRemover.jpg"
		],
		overviewExtraText:
			"Reduced H2S levels protect engines, pipelines, and downstream equipment from corrosion and damage.",
		bannerDescription:
			"Scrubber systems are sized for your flow and media selection to deliver clean, low-sulfur gas output.",
		bannerHeading: "H2S Control",
		bannerLongDescription:
			"H2S scrubbers reduce corrosion risk and protect downstream equipment. Media selection and vessel sizing are matched to your flow rate and gas quality. The result is cleaner gas with consistent performance and simpler maintenance.",
		bannerImage: "/images/HomeProductRange/H2SRemover.jpg	",
		overviewOptions: [
			{ icon: "performance", label: "Gas Quality", value: "Low H2S output" },
			{ icon: "service", label: "Media Life", value: "Site dependent cycles" }
		],
		faqs: [
			{
				question: "What media is used for scrubbing?",
				answer: "Iron oxide or activated carbon based on site needs."
			},
			{
				question: "What outlet H2S levels can be reached?",
				answer: "Low ppm levels based on system sizing."
			},
			{
				question: "Is maintenance simple?",
				answer: "Yes, media replacement is straightforward."
			},
			{
				question: "What vessel materials are used?",
				answer: "FRP or MS vessels based on project requirements."
			}
		],
		technicalSpecs: [
			{ parameter: "Media Type", details: "Iron oxide / activated carbon" },
			{ parameter: "Inlet H2S", details: "As per site" },
			{ parameter: "Outlet H2S", details: "Low ppm" },
			{ parameter: "Vessel", details: "FRP / MS" },
			{ parameter: "Media Life", details: "Site dependent" },
			{ parameter: "Maintenance", details: "Easy media replacement" }
		],
		keyBenefits: [
			"Lower H2S for equipment protection",
			"Media optimized for long life",
			"Simple maintenance access"
		]
	},
	{
		id: 8,
		category: "Dehumidifier",
		title: "Dehumidifier",
		description:
			"Biogas dehumidification units to reduce moisture, protect downstream equipment, and improve system efficiency.",
		image: "/images/HomeProductRange/dehumidifier.webp",
		link: "/products/dehumidifier",
		...sharedDetails,
		heroBadge: "GAS DRYING",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/dehumidifier.webp",
			"/images/HomeProductRange/dehumidifier.webp",
			"/images/HomeProductRange/dehumidifier.webp"
		],
		overviewText:"Inventive Gas Equipment’s Biogas Dehumidifier System is not just another moisture removal unit—it is a fully engineered solution designed to optimize gas quality, protect downstream equipment, and enhance overall plant performance.Biogas typically contains high levels of moisture, which can lead to corrosion, reduced efficiency, and damage to critical equipment such as compressors, gas engines, pipelines, and upgrading systems. Our dehumidification systems are specifically designed to reduce gas dew point and ensure consistent, dry gas supply across the plant." ,
		overviewExtraText:
			"Built with a focus on durability, efficiency, and ease of operation, our systems are widely deployed across biogas and CBG projects.",
		bannerDescription:
			"Dehumidification units stabilize gas output and protect downstream equipment for long-term performance.",
		bannerHeading: "Moisture Management",
		bannerLongDescription:
			"Dehumidification improves gas stability and reduces moisture-related equipment issues. Systems are configured to match flow rate and target dew point for consistent output. This helps protect engines, pipelines, and instrumentation over long operating cycles.",
		bannerImage: "/images/HomeProductRange/dehumidifier.webp",
		overviewOptions: [
			{ icon: "performance", label: "Moisture Control", value: "Configured dew point" },
			{ icon: "service", label: "Integration", value: "Upstream of genset" }
		],
	
		
		faqs: [
			{
				question: "What type of dehumidification is used?",
				answer: "Chiller or adsorption based on flow and site needs."
			},
			{
				question: "Can dew point be customized?",
				answer: "Yes, configured per project requirements."
			},
			{
				question: "How is condensate handled?",
				answer: "Auto condensate drain is included."
			},
			{
				question: "Where is it installed?",
				answer: "Typically upstream of the genset or process equipment."
			}
		],
		technicalSpecs: [
			{ parameter: "Type", details: "Chiller / adsorption" },
			{ parameter: "Moisture Removal", details: "As per flow rate" },
			{ parameter: "Outlet Dew Point", details: "Configured per project" },
			{ parameter: "Drain", details: "Auto condensate drain" },
			{ parameter: "Power", details: "Single / three phase" },
			{ parameter: "Integration", details: "Upstream of genset" }
		],
		keyBenefits: [" Engineered system for effective dew point reduction",
			"Designed for continuous industrial operation",
			"Compact and easy-to-integrate design",
			"Low maintenance with high operational reliability",
			"Suitable for varied gas flow rates and compositions",
			"Built with industrial-grade components"
		]
	},
	{
		id: 9,
		category: "Water Treatment",
		title: "RO+UF Plant",
		description:
			"Turnkey RO+UF water treatment plants with sizing, installation, and operator training for reliable process water.",
		image: "/images/HomeProductRange/wtp.jpg",
		link: "/products/ro-uf-plant",
		...sharedDetails,
		heroBadge: "WATER TREATMENT",
		heroBanner: "/images/ProductsBanner/gas-genset-banner.png",
		heroBannerMobile: "/images/ProductsBanner/gas-genset-banner.png",

		heroImages: [
			"/images/HomeProductRange/wtp.jpg",
			"/images/HomeProductRange/wtp.jpg",
			"/images/HomeProductRange/wtp.jpg"
		],
		overviewExtraText:
			"The plant is configured for site-specific feed water and delivers stable process quality for continuous use.",
		bannerDescription:
			"RO+UF systems are engineered for consistent output quality with efficient recovery and reliable automation.",
		bannerHeading: "Reliable Water Treatment",
		bannerLongDescription:
			"RO+UF plants are designed for stable process water quality and efficient recovery. Automation and dosing systems keep performance consistent with low operator effort. The plant is configured to your feed water conditions and process requirements.",
		bannerImage: "/images/HomeHero/GasEnergy.png",
		technicalSpecs: [
			{ parameter: "Process", details: "UF + RO" },
			{ parameter: "Capacity", details: "Configured per project" },
			{ parameter: "Feed TDS", details: "As per site" },
			{ parameter: "Recovery", details: "Up to 75%" },
			{ parameter: "Controls", details: "Auto dosing + PLC" },
			{ parameter: "Installation", details: "Turnkey with training" }
		],
		fuelOptions: "Not Applicable",
		applications: "Industrial Water, Process Water",
		overviewOptions: [
			{ icon: "performance", label: "Recovery", value: "Up to 75%" },
			{ icon: "service", label: "Automation", value: "PLC + dosing control" }
		],
		faqs: [
			{
				question: "What treatment process is used?",
				answer: "UF + RO process with site-specific configuration."
			},
			{
				question: "What recovery can be achieved?",
				answer: "Up to 75% recovery depending on feed water."
			},
			{
				question: "How is automation handled?",
				answer: "PLC and dosing control for stable operations."
			},
			{
				question: "Is installation turnkey?",
				answer: "Yes, turnkey installation with operator training."
			}
		],
		keyBenefits: [
			"Consistent output quality",
			"Turnkey installation and training",
			"Optimized for low OPEX"
		]
	}
];

export default homeProductsRangeData;
