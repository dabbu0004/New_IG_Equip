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
		heading: "Why Choose Inventive",
		description:
			"We deliver reliable, efficient, and future-ready energy solutions with an unwavering commitment to quality, innovation, and long-term value.",
		cards: [
			{
				icon: "settings",
				title: "Customized\nSolutions",
				desc:
					"We offer tailored engineering designs to meet your unique operational needs. Whether you need custom sizing, specific utility layouts, or retrofit kits."
			},
			{
				icon: "tool",
				title: "Proven\nExecution",
				desc:
					"We understand that every project is unique. Our team has successfully delivered large-scale infrastructure projects with excellence and on-time performance."
			},
			{
				icon: "check",
				title: "Complete\nIntegration",
				desc:
					"Our expertise goes beyond standard manufacturing. We handle complete biogas system integration from initial concept to final on-site commissioning."
			},
			{
				icon: "shield",
				title: "Reliable\nSupport",
				desc:
					"Our services go beyond the installation. We offer dedicated 24/7 maintenance and support ensuring uninterrupted performance and long-term reliability."
			}
		],
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
            "15 KVA to 500 KVA natural gas and biogas-powered generators engineered for continuous industrial and commercial use.",
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
        overviewTitle: "High-Performance Gas Gensets",
        overviewText:
            "Inventive Gas Equipment offers a comprehensive range of high-performance gas generators designed to operate efficiently on Natural Gas and Biogas. Ranging from 15 KVA to 500 KVA, our gensets are built to deliver reliable, continuous, and prime power for demanding industrial, commercial, and agricultural applications.\n\nEngineered for maximum fuel efficiency and minimal environmental impact, these generators provide a sustainable alternative to traditional diesel power. They feature advanced electronic control systems that seamlessly adapt to load variations while ensuring highly stable voltage and frequency output, protecting your sensitive downstream equipment.\n\nWhether deployed for captive power generation, grid synchronization, or remote off-grid operations, our gas gensets guarantee lower operational costs (OPEX), extended service intervals, and strict compliance with the latest emission regulations.",
        overviewExtraText:
            "We custom-size the solution around your specific load profile, operating hours, and fuel quality to ensure dependable output and the fastest possible ROI.",
        bannerDescription:
            "Built for continuous duty, our gas gensets combine reliable control systems and proven alternator performance to keep critical operations running without interruption.",
        bannerHeading: "The Gas Genset Advantage",
        bannerLongDescription:
            "Our gas gensets are designed for continuous duty with a relentless focus on fuel efficiency and consistent power delivery. The microprocessor-based control system adapts to rapid load changes while maintaining stable output and significantly lower emissions compared to diesel. Each system is uniquely configured to match site loads, varying fuel availability, and local compliance requirements to keep your critical operations running seamlessly.",
        bannerImage: "/images/HomeHero/GasEnergy.png",
        fuelOptions: "Natural Gas / Biogas",
        applications: "Industrial, Commercial, Captive Power, Agriculture",
        overviewOptions: [
            { icon: "capacity", label: "Capacity Range", value: "15 KVA to 500 KVA" },
            { icon: "performance", label: "Efficiency", value: "Optimized fuel consumption" },
            { icon: "reliability", label: "Operation", value: "Continuous & Prime Duty" },
            { icon: "settings", label: "Fuel Flexibility", value: "Natural Gas & Biogas" },
            { icon: "service", label: "Control System", value: "Advanced PLC & Synchronization" },
            { icon: "support", label: "Emissions", value: "Eco-friendly, CPCB compliant" }
        ],
        faqs: [
            {
                question: "What fuel options are supported by your gensets?",
                answer: "Our gas gensets are highly versatile and can operate on Pipeline Natural Gas (PNG), Compressed Natural Gas (CNG), or purified Biogas, depending on your site's availability."
            },
            {
                question: "What is the available capacity range?",
                answer: "We manufacture and supply gas generators ranging from 15 KVA up to 500 KVA to perfectly match your specific industrial or commercial load requirements."
            },
            {
                question: "Are these gensets suitable for continuous 24/7 operation?",
                answer: "Absolutely. Unlike standby diesel generators, our gas engines are heavy-duty and specifically engineered for continuous, prime-duty running with highly stable power output."
            },
            {
                question: "Do they meet the latest emission regulations?",
                answer: "Yes, our gas generators burn fuel much cleaner than diesel and are fully configured to meet or exceed applicable CPCB emission compliance requirements."
            },
            {
                question: "Can these generators be synchronized with the local power grid?",
                answer: "Yes, our gensets come with advanced control panels that support seamless grid synchronization, allowing you to export excess power or run in parallel with the grid."
            },
            {
                question: "How does the running cost compare to a diesel generator?",
                answer: "Operating a gas genset (especially on PNG or Biogas) offers significant OPEX savings, typically reducing the cost per unit (kWh) of electricity by 30% to 50% compared to diesel."
            },
            {
                question: "What kind of maintenance is required?",
                answer: "Maintenance is straightforward and involves routine checks of spark plugs, lube oil, filters, and coolant. Gas burns cleaner than diesel, which often extends the intervals between oil changes."
            },
            {
                question: "Are the generators supplied with acoustic enclosures?",
                answer: "Yes, all our gas gensets are supplied with highly engineered, weather-proof acoustic canopies to ensure ultra-low noise levels suitable for urban and commercial environments."
            },
            {
                question: "Can the generator handle sudden load impacts?",
                answer: "Our systems utilize highly responsive electronic governing systems that instantly adjust fuel flow, ensuring stable voltage and frequency even during sudden load steps."
            },
            {
                question: "Do you provide installation and after-sales support?",
                answer: "Yes, we provide end-to-end services including site assessment, mechanical and electrical installation, commissioning, and comprehensive Annual Maintenance Contracts (AMC)."
            }
        ],
        technicalSpecs: [
            { parameter: "Capacity Range", details: "15 KVA to 500 KVA (Custom sizing available)" },
            { parameter: "Fuel Compatibility", details: "Natural Gas (PNG/CNG) & Biogas" },
            { parameter: "Electrical Output", details: "415V / 3 Phase / 50Hz (Customizable)" },
            { parameter: "Alternator Type", details: "Brushless, Self-Excited, AVR Controlled" },
            { parameter: "Control Panel", details: "Microprocessor-based AMF / Synchronization Panel" },
            { parameter: "Emission Standard", details: "Fully CPCB Compliant" }
        ],
        keyBenefits: [
            "Drastically lowers your cost per kWh, providing a rapid return on investment compared to diesel power.",
            "Delivers highly stable, continuous prime power to protect sensitive industrial equipment from voltage drops.",
            "Significantly reduces your carbon footprint and eliminates black smoke, ensuring easy environmental compliance."
        ],
        keyFeatures: [
            {
                id: 1,
                title: "Robust Prime-Duty Engine",
                description: "Built with heavy-duty internal components specifically designed to withstand continuous 24/7 industrial operation."
            },
            {
                id: 2,
                title: "Smart Fuel Regulation",
                description: "Advanced electronic governing systems precisely control the air-fuel mixture for maximum efficiency at any load."
            },
            {
                id: 3,
                title: "Grid Synchronization Ready",
                description: "Equipped with high-end controllers capable of parallel operation with other gensets or the main utility grid."
            },
            {
                id: 4,
                title: "Ultra-Silent Canopy",
                description: "Housed in a weather-proof, anti-corrosive acoustic enclosure that minimizes operational noise levels."
            },
            {
                id: 5,
                title: "Advanced Thermal Management",
                description: "Oversized radiators and optimized cooling circuits ensure safe operation even in extreme ambient temperatures."
            },
            {
                id: 6,
                title: "Remote IoT Monitoring",
                description: "SCADA-ready control panels allow you to monitor power output, fuel pressure, and engine health remotely."
            }
        ]
    },
    {
        id: 2,
        category: "Fuel Conversion",
        title: "Dual-Fuel Kits",
        description:
            "Convert existing diesel generators to run on gas + diesel simultaneously. Save up to 60% on fuel costs.",
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
        overviewTitle: "Advanced Dual-Fuel Conversion Systems",
        overviewText:
            "Inventive Gas Equipment’s Dual-Fuel Conversion Kits provide an innovative and cost-effective solution to seamlessly run your existing diesel generators on a mixture of diesel and gas (Natural Gas or Biogas). This retrofit technology allows industries to slash their fuel costs while fully utilizing their current capital equipment.\n\nOur intelligent dual-fuel control systems automatically balance the gas-to-diesel ratio in real-time based on engine load and gas availability. The system is meticulously engineered to maximize gas substitution—achieving up to 60% depending on site conditions—without sacrificing engine stability, load acceptance, or overall power output.\n\nInstallation is non-invasive and rapid, ensuring minimal plant downtime. Furthermore, in the event of a gas supply interruption, the system instantaneously and automatically reverts to 100% diesel operation, guaranteeing zero power disruption for your critical operations.",
        overviewExtraText:
            "The kit is engineered for quick retrofit with minimal downtime, ensuring your generator remains completely within OEM safe operating limits.",
        bannerDescription:
            "Dual-fuel operation lowers expensive diesel consumption while maintaining stable power output, making it ideal for continuous running applications.",
        bannerHeading: "The Dual-Fuel Advantage",
        bannerLongDescription:
            "Dual-fuel kits reduce diesel consumption without sacrificing power stability. The system intelligently balances the gas and diesel mix based on current electrical load and gas pipeline pressure to keep operating costs strictly in check. It is the ideal retrofit solution for projects where you want massive OPEX savings with minimal downtime and absolutely no major engine replacement.",
        bannerImage: "/images/HomeHero/DualFuel.png",
        fuelOptions: "Diesel + Gas",
        applications: "Generator Retrofits, Industrial Backup Power",
        overviewOptions: [
            { icon: "performance", label: "Substitution", value: "Up to 60% Gas Ratio" },
            { icon: "reliability", label: "Fail-Safe", value: "Auto-revert to 100% Diesel" },
            { icon: "settings", label: "Gas Types", value: "PNG, CNG, Biogas" },
            { icon: "service", label: "Installation", value: "Non-invasive Retrofit" },
            { icon: "capacity", label: "Compatibility", value: "15 KVA to 500 KVA" },
            { icon: "support", label: "ROI", value: "Rapid payback via savings" }
        ],
        faqs: [
            {
                question: "How much diesel saving can I realistically expect?",
                answer: "Depending on your average load profile and gas supply pressure, typical industrial projects achieve a continuous diesel substitution rate of 40% to 60%."
            },
            {
                question: "Does this require modifying the engine's internal components?",
                answer: "No, the dual-fuel kit is a non-invasive retrofit. We do not alter the engine block, pistons, or original fuel injection system, keeping the core engine completely intact."
            },
            {
                question: "What types of gas can be used with this kit?",
                answer: "The system is highly flexible and can be calibrated to run on Pipeline Natural Gas (PNG), Compressed Natural Gas (CNG), or purified Biogas."
            },
            {
                question: "What happens if the gas supply suddenly stops?",
                answer: "The intelligent controller detects the pressure drop and instantaneously switches the engine back to 100% diesel mode without any interruption to your power output."
            },
            {
                question: "Will converting to dual-fuel void my generator's warranty?",
                answer: "Because the retrofit is external and non-invasive, it generally does not void warranties, though we recommend reviewing terms with your specific OEM."
            },
            {
                question: "How long does the installation process take?",
                answer: "Installation is incredibly fast. Most standard generator retrofits are completed, tested, and commissioned within 1 to 2 days with minimal plant downtime."
            },
            {
                question: "Does dual-fuel operation reduce the generator's power capacity?",
                answer: "No. The system is precisely mapped to ensure the engine delivers its full rated KVA output, matching its performance on 100% diesel."
            },
            {
                question: "Is dual-fuel operation safer for the engine?",
                answer: "Yes, gas burns cleaner than diesel. Running in dual-fuel mode actually reduces carbon buildup inside the cylinders, which can extend engine life and oil change intervals."
            },
            {
                question: "How does the system prevent engine knocking?",
                answer: "Our advanced controllers utilize anti-knock sensors and continuous exhaust temperature monitoring to dynamically adjust the gas ratio and protect the engine at all times."
            },
            {
                question: "Are these kits compliant with safety standards?",
                answer: "Absolutely. The integrated gas train features highly reliable double-solenoid shutoff valves, zero-pressure regulators, and flame arrestors to ensure absolute operational safety."
            }
        ],
        technicalSpecs: [
            { parameter: "Conversion Technology", details: "Electronic Air-Gas Fumigation" },
            { parameter: "Diesel Substitution Rate", details: "40% - 60% (Load dependent)" },
            { parameter: "Compatible Gases", details: "PNG, CNG, Biogas" },
            { parameter: "Changeover Mechanism", details: "Seamless, Automatic (Zero lag)" },
            { parameter: "Engine Protection", details: "Knock sensors & EGT monitoring" },
            { parameter: "Telemetry & Control", details: "PLC with data logging & diagnostics" }
        ],
        keyBenefits: [
            "Delivers massive reductions in operational fuel costs without the capital expense of buying a new generator.",
            "Provides unparalleled reliability with an automatic fail-safe that instantly reverts to 100% diesel if gas runs out.",
            "Lowers harmful emissions and particulate matter, significantly improving your facility's environmental footprint."
        ],
        keyFeatures: [
            {
                id: 1,
                title: "Intelligent Load Tracking",
                description: "The microprocessor instantly calculates engine load and injects the exact, optimal amount of gas required."
            },
            {
                id: 2,
                title: "Zero-Lag Auto Changeover",
                description: "Automatically falls back to pure diesel operation in milliseconds if gas pressure drops, preventing blackouts."
            },
            {
                id: 3,
                title: "OEM Engine Preservation",
                description: "External retrofit design ensures that all original OEM engine components and settings remain entirely intact."
            },
            {
                id: 4,
                title: "Integrated Safety Gas Train",
                description: "Features industrial-grade double shutoff valves and zero-pressure regulators to prevent gas leaks or pooling."
            },
            {
                id: 5,
                title: "Real-Time Telemetry",
                description: "Monitor your exact diesel substitution rates, fuel savings, and engine health live via the digital interface."
            },
            {
                id: 6,
                title: "Dynamic Engine Protection",
                description: "Utilizes exhaust gas temperature (EGT) and vibration sensors to protect the engine from knocking or overheating."
            }
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
        overviewTitle: "Retrofit Emission Control Devices (RECD)",
        overviewText:
            "Inventive Gas Equipment offers highly efficient Retrofit Emission Control Devices (RECD) designed to drastically reduce Particulate Matter (PM) and hazardous emissions from existing diesel generators. Our systems are engineered to help industries achieve strict CPCB environmental compliance without the massive capital expenditure of replacing older gensets.\n\nUtilizing advanced Catalyzed Diesel Particulate Filter (CDPF) technology, our RECD units capture and combust up to 99% of harmful soot and particulate emissions. The internal geometry is rigorously calculated to ensure that engine exhaust backpressure remains strictly within OEM tolerances, safeguarding engine health, preventing overheating, and maintaining fuel efficiency.\n\nEquipped with smart electronic monitoring, the system constantly tracks differential pressure and temperature. Depending on your operational profile, we offer both passive and active regeneration systems, ensuring the filter remains clean and fully functional even under low-load running conditions.",
        overviewExtraText:
            "Our retrofit solutions help you meet stringent regulatory requirements seamlessly, while maintaining your generator's peak performance and reliability.",
        bannerDescription:
            "RECD systems are expertly designed to reduce particulate matter and support legal compliance without the need to replace existing heavy equipment.",
        bannerHeading: "Cleaner Emissions, Assured Compliance",
        bannerLongDescription:
            "RECD solutions help your existing generators meet strict regulatory requirements while keeping performance highly stable. The system effectively traps particulate matter and maintains safe exhaust back pressure within OEM limits. It is a retrofit-friendly, highly economical approach for industrial fleets that must comply with national CPCB norms without full equipment replacement.",
        bannerImage: "/images/HomeHero/RECD.png",
        fuelOptions: "Diesel",
        applications: "Compliance, Retrofit, Industrial Fleets",
        overviewOptions: [
            { icon: "performance", label: "PM Reduction", value: "Up to 99% Efficiency" },
            { icon: "reliability", label: "Compliance", value: "Meets CPCB II Norms" },
            { icon: "settings", label: "Backpressure", value: "Safely within OEM Limits" },
            { icon: "service", label: "Regeneration", value: "Active & Passive Options" },
            { icon: "capacity", label: "Application", value: "DG Sets & Heavy Equip" },
            { icon: "support", label: "Monitoring", value: "Smart IoT Control Panel" }
        ],
        faqs: [
            {
                question: "Is your RECD system officially CPCB compliant?",
                answer: "Yes, our devices are rigorously tested and certified to support CPCB II compliance, ensuring you meet government environmental mandates."
            },
            {
                question: "What level of particulate reduction is actually achieved?",
                answer: "Utilizing high-grade filter substrates, the system captures and eliminates between 90% and 99% of harmful particulate matter (soot) from the exhaust."
            },
            {
                question: "Will installing this device affect my engine's performance?",
                answer: "No. The system is custom-sized for your specific engine to ensure that exhaust backpressure remains well within the safe limits specified by the engine OEM."
            },
            {
                question: "Is this a complete replacement or a retrofit solution?",
                answer: "It is a highly cost-effective retrofit solution. It is installed directly onto the exhaust line of your existing diesel generators without replacing the engine."
            },
            {
                question: "What is the difference between active and passive regeneration?",
                answer: "Passive systems use exhaust heat to burn off soot automatically. Active systems use external electrical heaters to burn off soot when engine loads (and exhaust temps) are too low."
            },
            {
                question: "How do I know when the filter needs cleaning?",
                answer: "The system features a smart control panel with differential pressure sensors. It will automatically alert you via a digital display or alarm if backpressure rises."
            },
            {
                question: "Does the RECD require regular maintenance?",
                answer: "Maintenance is minimal. The system burns off most soot automatically. A periodic physical ash cleaning is only required after thousands of hours of operation."
            },
            {
                question: "Can this be installed on any brand of diesel generator?",
                answer: "Yes, our RECD units are brand-agnostic. We custom-engineer the housing and flanges to fit Cummins, Caterpillar, Kirloskar, Perkins, and all other major OEMs."
            },
            {
                question: "Does the RECD also reduce engine noise?",
                answer: "Yes, the robust stainless-steel housing and internal filter matrix act as a highly effective secondary silencer, noticeably reducing exhaust noise levels."
            },
            {
                question: "What materials are used to construct the RECD?",
                answer: "To survive extreme exhaust temperatures and corrosive gases, the entire housing and internal structures are manufactured from heavy-duty Stainless Steel (SS304 or SS316)."
            }
        ],
        technicalSpecs: [
            { parameter: "Technology Core", details: "Catalyzed Diesel Particulate Filter (CDPF)" },
            { parameter: "Particulate Reduction", details: "> 90% to 99% Efficiency" },
            { parameter: "Compliance Standard", details: "CPCB Approved / Certified" },
            { parameter: "Regeneration Method", details: "Passive Auto / Electrical Active" },
            { parameter: "Monitoring System", details: "Differential Pressure & Temp Sensors" },
            { parameter: "Material of Construction", details: "High-Grade Stainless Steel (SS304/316)" }
        ],
        keyBenefits: [
            "Ensures your facility strictly complies with government pollution norms, avoiding heavy fines or operational shutdowns.",
            "Massively improves local air quality for your workforce by eliminating up to 99% of toxic black smoke and soot.",
            "Saves immense capital expenditure by upgrading your existing generators instead of purchasing entirely new equipment."
        ],
        keyFeatures: [
            {
                id: 1,
                title: "High-Efficiency DPF Substrate",
                description: "Utilizes advanced catalyzed honeycomb filters designed to trap micro-particles without choking exhaust flow."
            },
            {
                id: 2,
                title: "Smart Backpressure Management",
                description: "Continuously monitors exhaust dynamics to guarantee engine performance and fuel efficiency remain unaffected."
            },
            {
                id: 3,
                title: "Automated Regeneration",
                description: "Intelligently burns off accumulated soot either passively through exhaust heat or actively via electrical triggers."
            },
            {
                id: 4,
                title: "Custom Exhaust Integration",
                description: "Engineered with tailored flanges and piping to seamlessly fit into your existing generator room layout."
            },
            {
                id: 5,
                title: "IoT-Enabled Control Panel",
                description: "Digital HMI interface provides real-time data on filter health, pressure drops, and exhaust temperatures."
            },
            {
                id: 6,
                title: "Acoustic Attenuation",
                description: "The heavy-duty stainless steel casing acts as an excellent secondary muffler, lowering overall site noise."
            }
        ]
    },

	{
		id: 4,
		category: "Gas Holder",
		title: "Double Membrane Gas Holder",
		description:
			"High-performance double membrane gas holders engineered for safe, reliable and efficient biogas storage in industrial renewable energy systems",
		image: "/images/HomeProductRange/doubleMembrane.png",
		link: "/products/double-membrane-gas-holder",
		...sharedDetails,
		heroBadge: "Advanced Biogas Storage Solution",
		heroBanner: "/images/ProductsBanner/DoubleMembraneBanner.png",
		heroBannerMobile: "/images/ProductsBanner/DoubleMembraneBanner.png",

		heroImages: [
			"/images/HomeProductRange/doubleMembrane.png",
			"/images/HomeProductRange/doubleMembrane.png",
			"/images/HomeProductRange/doubleMembrane.png"
		],
		overviewTitle:"Reliable Biogas Storage for Mordern Energy Systems",
		overviewText:"Inventive Gas Equipment’s Double Membrane Gas Holder is an advanced gas storage system designed to ensure safe, efficient, and consistent biogas handling in anaerobic digestion and CBG applications. Manufactured in-house using high-quality European-grade membrane materials, our gas holders are engineered to deliver stable pressure, long service life, and reliable performance under varying operating conditions.With flexible installation options and fully customized designs, our systems are suitable for a wide range of applications including STPs, industrial biogas plants, and large-scale CBG projects. ",
		overviewExtraText:
			"Stable pressure control and safe storage help maintain consistent gas supply for engines and burners.",
		bannerDescription:
			"Double membrane holders provide reliable storage with robust safety features, optimized footprint, and long service life.",
		bannerHeading: "Stable Gas Storage",
		bannerLongDescription:
			"Double membrane gas holders provide stable pressure control and safe storage for continuous operation. The design optimizes footprint while delivering reliable supply to engines or burners. Safety systems and robust membranes support long service life with minimal maintenance and consistent performance under varying conditions. This makes them ideal for biogas plants, CBG projects, and STPs where dependable gas storage is critical.",
		bannerImage: "/images/HomeProductRange/doubleMembrane.png",
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
				"Stable pressure control for reliable gas supply",
				"High safety with over/under pressure protection",
				"Optimized footprint with efficient storage"
			
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
			"Advanced VPSA and Membrane-based CO2 removal skids to upgrade biogas into high-purity biomethane for CBG applications.",
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
		overviewTitle: "Advanced CO₂ Removal Systems for CBG Plants",
		overviewText:
			"Inventive Gas Equipment offers advanced CO₂ removal systems designed to upgrade biogas into high-purity biomethane suitable for CBG applications.\n\nWith expertise in both VPSA (Vacuum Pressure Swing Adsorption) and Membrane-based separation technologies, we provide tailored solutions based on plant requirements, operational priorities, and return expectations.\n\nOur approach goes beyond equipment supply—we focus on system integration, performance optimization, and long-term operational reliability.",
		overviewExtraText:
			"Upgraded gas quality maximizes energy yield and ensures strict compliance with national grid and automotive fuel standards.",
		bannerDescription:
			"High-efficiency CO2 removal skids enhance methane concentration, delivering pipeline-ready biomethane with minimal methane slip.",
		bannerHeading: "Gas Upgrading Solutions",
		bannerLongDescription:
			"Our CO2 removal systems are engineered to separate carbon dioxide from raw biogas, yielding high-purity biomethane (CBG). By utilizing either VPSA or Membrane technologies, we match the process to your specific CAPEX and OPEX goals. The modular skid approach simplifies on-site installation while robust PLC automation ensures reliable, continuous plant operation with optimal methane recovery.",
		bannerImage: "/images/HomeProductRange/CO2Remover.jpg",
		overviewOptions: [
			{ icon: "performance", label: "Methane Upgrade", value: "Up to 98% CH4 Purity" },
			{ icon: "settings", label: "Technology", value: "VPSA & Membrane options" },
			{ icon: "service", label: "Skid Build", value: "Modular, plug-and-play installation" },
			{ icon: "capacity", label: "Recovery", value: "Maximized CH4 recovery rates" },
			{ icon: "reliability", label: "Control", value: "Fully automated PLC & SCADA" },
			{ icon: "support", label: "Integration", value: "Seamless pre-treatment syncing" }
		],
		faqs: [
			{
				question: "What technologies do you offer for CO2 removal?",
				answer: "We offer both VPSA (Vacuum Pressure Swing Adsorption) and Membrane-based separation technologies, tailored to your project's scale and economics."
			},
			{
				question: "What methane purity can be achieved?",
				answer: "Our systems upgrade raw biogas to biomethane with a purity of up to 98% CH4, fully meeting CBG and pipeline injection standards."
			},
			{
				question: "How do I choose between VPSA and Membrane technology?",
				answer: "The choice depends on specific plant parameters including capacity, allowable CAPEX/OPEX, power availability, and targeted methane recovery rates. Our engineering team assists in selecting the optimal route."
			},
			{
				question: "What is the typical methane recovery rate?",
				answer: "Our systems are highly efficient, typically achieving a methane recovery rate between 95% and >99%, depending on the selected technology and operating conditions."
			},
			{
				question: "Is pre-treatment required before the CO2 removal skid?",
				answer: "Yes, raw biogas must be conditioned to remove moisture (via dehumidifiers) and H2S (via scrubbers) to protect the media or membranes and ensure a long service life."
			},
			{
				question: "What happens to the separated CO2?",
				answer: "The separated tail gas (mostly CO2) can be safely vented to the atmosphere, or routed to an additional liquefaction plant to produce food-grade liquid CO2 for secondary revenue streams."
			},
			{
				question: "How is the system controlled and monitored?",
				answer: "The skids feature fully automated, advanced PLC controls with HMI interfaces. They are ready for seamless SCADA integration, allowing for remote monitoring and minimal operator intervention."
			},
			{
				question: "What are the installation requirements?",
				answer: "Our systems are built as modular, pre-tested skids. This 'plug-and-play' design significantly reduces on-site civil work, piping complexity, and commissioning time."
			},
			{
				question: "Can this system be integrated into an existing biogas plant?",
				answer: "Absolutely. Our skids are designed for easy retrofitting, allowing existing power-generation biogas plants to pivot to lucrative CBG production."
			},
			{
				question: "What kind of maintenance is required?",
				answer: "Maintenance is predictable and manageable, involving routine checks of compressors/blowers, sensor calibration, and scheduled replacement of VPSA media or Membrane modules over their multi-year lifespan."
			}
		],
		technicalSpecs: [
			{ parameter: "Separation Technology", details: "VPSA / Membrane-based" },
			{ parameter: "Inlet CH4 Concentration", details: "50% - 65% (Typical Biogas)" },
			{ parameter: "Outlet CH4 Purity", details: "Up to 98% (CBG Compliant)" },
			{ parameter: "Methane Recovery", details: "> 95% to 99% (Tech dependent)" },
			{ parameter: "System Configuration", details: "Pre-assembled Modular Skid" },
			{ parameter: "Automation & Control", details: "PLC-based with SCADA integration" }
		],
		keyBenefits: [
			"Upgrades biogas to high-value, pipeline-quality biomethane (CBG) with up to 98% purity.",
			"Provides flexible technology options (VPSA or Membrane) to optimize your specific CAPEX and OPEX goals.",
			"Features a modular, skid-mounted design for rapid deployment, seamless integration, and minimal downtime."
		],
		keyFeatures: [
			{
				id: 1,
				title: "Technology Agnostic Approach",
				description: "Expertise in both VPSA and Membrane separation to match specific project economics and yield requirements."
			},
			{
				id: 2,
				title: "High Methane Recovery",
				description: "Optimized process design ensures maximum CH4 recovery with minimal methane slip, boosting plant profitability."
			},
			{
				id: 3,
				title: "Skid-Mounted Modular Design",
				description: "Factory pre-assembled and tested skids drastically reduce on-site installation time and piping complexity."
			},
			{
				id: 4,
				title: "Advanced PLC Automation",
				description: "Fully automated control systems allow for continuous, unmanned operation and remote SCADA monitoring."
			},
			{
				id: 5,
				title: "Energy Efficient Operation",
				description: "Engineered to minimize specific power consumption per cubic meter of upgraded biomethane."
			},
			{
				id: 6,
				title: "Robust Pre-treatment Integration",
				description: "Seamlessly syncs with upstream H2S scrubbers and dehumidification units to protect membranes and media."
			}
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
		overviewTitle:"Biogas & Industrial Flare Systems",
		overviewText: "Inventive Gas Equipment offers high-performance flare systems designed for the safe combustion of excess or unusable gases across a wide range of applications—from biogas plants to large-scale industrial and oil & gas installations. Our flare systems are engineered to ensure complete combustion, environmental compliance, and operational safety. With strong in-house design and manufacturing capabilities, we deliver both open and enclosed flare systems tailored to specific flow rates, gas compositions, and site requirements.",
		overviewExtraText:
			"Our flare systems are engineered for safe, controlled disposal of excess gas with dependable ignition and monitoring.While widely used in biogas and CBG projects, our engineering expertise and execution capabilities are fully aligned to deliver large-capacity flare systems for industrial and oil & gas sector applications",
		bannerDescription:
			"Open or closed flare options provide reliable safety for biogas plants while maintaining compliance with site norms.",
		bannerHeading: "Safe Flaring",
		bannerLongDescription:
			"Flaring systems provide safe disposal of excess gas with dependable ignition and monitoring. Options include open or closed flares based on site safety and regulatory requirements. This ensures plant protection during maintenance or gas surplus conditions. And while widely used in biogas and CBG projects, our engineering expertise and execution capabilities are fully aligned to deliver large-capacity flare systems for industrial and oil & gas sector applications.",
		bannerImage: "/images/HomeProductRange/flareOpenClose.png",
	overviewOptions: [
      { icon: "reliability", label: "Ignition", value: "Auto ignition with monitoring" },
      { icon: "service", label: "Compliance", value: "Applicable environmental & safety norms" },
      { icon: "performance", label: "Combustion", value: "High-efficiency complete combustion" },
      { icon: "capacity", label: "Flare Types", value: "Open and enclosed configurations" },
      { icon: "settings", label: "Customization", value: "Tailored to specific flow rates" },
      { icon: "support", label: "Applications", value: "Biogas, CBG, Industrial & Oil & Gas" }
    ],
		types: [
			{
				title: "Open Flare System",
				content:
					"Open flare systems are designed for efficient combustion of waste gases in an open environment. These systems are ideal for applications where vertical clearance is available and cost-effective solutions are required.",
				features: [
					"Simple and robust design",
					"Reliable ignition system",
					"Suitable for continuous and intermittent operation",
					"Cost-effective for large gas volumes"
				]
			},
			{
				title: "Enclosed Flare System",
				content:
					"Enclosed flare systems combust gases within a controlled chamber, minimizing visible flame, noise, and thermal radiation. These systems are ideal for installations with environmental or space constraints.",
				features: [
					"Controlled and smokeless combustion",
					"Low noise and radiation",
					"Compact footprint",
					"Suitable for sensitive industrial locations"
				]
			}
		],
		faqs: [
      {
        question: "Do you provide both open and enclosed flare systems?",
        answer: "Yes, we design and manufacture both open (elevated) and enclosed (ground) flare systems. The choice depends on your specific site requirements, emission regulations, and flame visibility concerns."
      },
      {
        question: "How is the ignition process handled?",
        answer: "Our flares feature a fully automated, PLC-controlled pilot ignition system. It continuously monitors gas flow and automatically ignites the burner to ensure instantaneous, safe combustion without manual intervention."
      },
      {
        question: "Are your flare systems compliant with industrial safety norms?",
        answer: "Absolutely. Our systems are engineered to meet stringent environmental and safety regulations, incorporating crucial fail-safes like integrated flame arrestors, flashback prevention, and automated shut-off valves."
      },
      {
        question: "What kind of flame monitoring is included?",
        answer: "The systems are equipped with advanced UV flame scanners and high-temperature thermocouples. These sensors provide real-time feedback to the control panel to confirm stable ignition and monitor combustion temperatures."
      },
      {
        question: "What industries or applications are these flares suitable for?",
        answer: "Our flare systems are highly versatile and rugged, designed for biogas plants, Compressed Biogas (CBG) facilities, Sewage Treatment Plants (STP), landfills, and large-scale Oil & Gas operations."
      },
      {
        question: "Can the flare handle fluctuating gas flow rates?",
        answer: "Yes, our flare burners are engineered with a high turndown ratio. This means they can safely and efficiently combust gas even when flow rates or pipeline pressures fluctuate significantly during plant operations."
      },
      {
        question: "What materials are used for the burner and flare stack?",
        answer: "We utilize high-grade, heat-resistant stainless steel (such as SS304 or SS316L) for the burner components, ensuring maximum durability and a long service life even under continuous extreme temperatures."
      },
      {
        question: "Do you provide custom-sized flare systems?",
        answer: "Yes, every flare system is custom-engineered. We calculate the exact stack sizing and burner configuration based on your plant’s peak gas flow rate, precise gas composition, and required combustion temperature."
      },
      {
        question: "How do you prevent flashback into the main gas pipeline?",
        answer: "We integrate high-quality, certified deflagration flame arrestors and auto-shutoff valves directly into the gas train. This creates a physical barrier that prevents any flame from traveling backward into your process lines."
      },
      {
        question: "Is remote monitoring and SCADA integration available?",
        answer: "Yes, our flares come with a dedicated local PLC control panel equipped with an HMI touchscreen. We can seamlessly integrate this panel with your plant’s main SCADA or DCS for comprehensive remote monitoring and operation."
      }
    ],
	technicalSpecs: [
      { parameter: "System Type", details: "Open & Enclosed Flare Configurations" },
      { parameter: "Combustion Efficiency", details: "Engineered for complete combustion (>99%)" },
      { parameter: "Ignition Control", details: "Fully automatic pilot ignition with PLC" },
      { parameter: "Safety Mechanisms", details: "Integrated flame arrestors & flashback prevention" },
      { parameter: "Flame Monitoring", details: "UV flame scanners & temperature thermocouples" },
      { parameter: "Burner Material", details: "High-temperature Stainless Steel (SS304/SS316)" }
    ],
		keyBenefits: [
      "Guarantees safe, automated disposal of excess gas with >99% combustion efficiency.",
      "Ensures strict environmental and safety compliance across diverse industries.",
      "Features robust, fail-safe ignition and continuous flame monitoring systems."
    ],
	keyFeatures: [
        {
            id: 1,
            title: "Automated Pilot Ignition",
            description: "PLC-controlled auto-ignition ensures instantaneous, safe start-ups without manual intervention."
        },
        {
            id: 2,
            title: "Complete Combustion",
            description: "Engineered for >99% combustion efficiency to ensure strict environmental and emissions compliance."
        },
        {
            id: 3,
            title: "Advanced Safety Mechanisms",
            description: "Integrated flame arrestors and auto-shutoff valves prevent flashback and protect upstream equipment."
        },
        {
            id: 4,
            title: "High Turndown Ratio",
            description: "Safely and efficiently handles fluctuating gas flow rates and varying pipeline pressures."
        },
        {
            id: 5,
            title: "Continuous Flame Monitoring",
            description: "Equipped with advanced UV scanners and thermocouples for real-time combustion feedback."
        },
        {
            id: 6,
            title: "Industrial-Grade Durability",
            description: "Constructed from high-temperature stainless steel built to withstand continuous extreme heat."
        }
    ],
	},
	{
		id: 7,
		category: "H2S Scrubber",
		title: "H₂S Scrubber",
		description:
			"Advanced H₂S scrubbing solutions with custom media selection, vessel sizing, and moisture removal for ultimate equipment protection.",
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
		overviewTitle: "H₂S Removal Systems for Biogas",
		overviewText:
			"With over 10 years of expertise in biogas engineering, Inventive Gas Equipment manufactures a complete range of H₂S removal systems (scrubbers) designed to handle varying hydrogen sulfide concentrations in biogas.\n\nH₂S, when combined with moisture (H₂O), becomes highly corrosive and acts like poison for critical equipment such as compressors, pipelines, gas engines, and upgrading systems. Effective removal of these contaminants is essential for safe, efficient, and long-term plant operation.\n\nOur systems are engineered to remove both H₂S and associated moisture, ensuring maximum protection and reliable performance across the plant.",
		overviewExtraText:
			"By effectively stripping corrosive H₂S from the biogas stream, our scrubbers drastically reduce maintenance costs and extend the lifespan of your capital equipment.",
		bannerDescription:
			"Custom-engineered H₂S scrubber systems sized for your specific flow rates and contamination levels, delivering clean, pipeline-ready gas.",
		bannerHeading: "Corrosion Protection & Gas Cleaning",
		bannerLongDescription:
			"Hydrogen sulfide poses a severe threat to industrial equipment. Our H₂S scrubbers are designed utilizing carefully selected media—such as iron oxide or activated carbon—to optimize removal efficiency. Combined with integrated moisture separation, these systems reduce corrosion risks, ensure consistent plant performance, and provide straightforward maintenance access for media replacement.",
		bannerImage: "/images/HomeProductRange/H2SRemover.jpg",
		overviewOptions: [
			{ icon: "performance", label: "H₂S Reduction", value: "Down to safe ppm levels" },
			{ icon: "settings", label: "Media Selection", value: "Iron Oxide / Activated Carbon" },
			{ icon: "capacity", label: "Custom Sizing", value: "Optimized contact time" },
			{ icon: "reliability", label: "Protection", value: "Prevents severe corrosion" },
			{ icon: "maintenance", label: "Maintenance", value: "Ergonomic media handling" },
			{ icon: "service", label: "Moisture Control", value: "Integrated H₂O knockout" }
		],
		faqs: [
			{
				question: "What media is used for H₂S scrubbing?",
				answer: "We select the optimal media based on your site's gas profile, typically utilizing highly reactive Iron Oxide (Iron Sponge) or specialized Activated Carbon."
			},
			{
				question: "How do you determine the size of the scrubber vessel?",
				answer: "Vessels are custom-engineered based on your peak biogas flow rate, inlet H₂S concentration, and the necessary media contact time to ensure maximum absorption."
			},
			{
				question: "What outlet H₂S levels can be achieved?",
				answer: "Depending on the system configuration, our scrubbers can reliably reduce H₂S concentrations down to <50 ppm, making it perfectly safe for gas engines and upgrading systems."
			},
			{
				question: "Does the system also remove moisture?",
				answer: "Yes, our scrubber vessels are designed with integrated moisture knockout capabilities to handle highly saturated gas and remove damaging free water alongside H₂S."
			},
			{
				question: "How long does the scrubbing media last?",
				answer: "Media life is highly dependent on your site's H₂S load and flow rates. We size our vessels to provide several months of continuous operation between changeouts."
			},
			{
				question: "Is it difficult to replace the exhausted media?",
				answer: "No. Our vessels are designed with user-friendly access hatches, quick-opening closures, and easy-empty ports to make media replacement straightforward and safe."
			},
			{
				question: "What materials are the scrubber vessels made of?",
				answer: "To withstand highly corrosive environments, vessels are constructed from FRP (Fiberglass Reinforced Plastic), Stainless Steel, or MS with industrial-grade internal epoxy coatings."
			},
			{
				question: "Can the system handle high fluctuations in H₂S?",
				answer: "Yes, the bed depth and vessel geometry are designed with an adequate buffer capacity to absorb sudden spikes in hydrogen sulfide concentration."
			},
			{
				question: "How does H₂S damage gas engines if left untreated?",
				answer: "When combusted, H₂S turns into sulfur dioxide (SO₂). This mixes with condensation to form sulfuric acid, which rapidly degrades engine oil and aggressively corrodes engine internals."
			},
			{
				question: "Do you offer multi-stage configurations?",
				answer: "Yes, for plants requiring zero downtime, we offer lead-lag (series) configurations. This allows you to bypass and replace the media in one vessel while the other continues to clean the gas."
			}
		],
		technicalSpecs: [
			{ parameter: "Removal Technology", details: "Chemical Absorption (Iron Oxide / Carbon)" },
			{ parameter: "Vessel Construction", details: "FRP / SS / Epoxy-coated MS" },
			{ parameter: "Inlet H₂S Capacity", details: "Configured per site baseline" },
			{ parameter: "Outlet Guarantee", details: "As low as <50 ppm" },
			{ parameter: "Moisture Handling", details: "Integrated condensate knockout" },
			{ parameter: "Maintenance Setup", details: "Ergonomic top-fill / bottom-empty ports" }
		],
		keyBenefits: [
			"Drastically reduces equipment corrosion, preventing premature failure of gas engines, compressors, and pipelines.",
			"Extends engine oil life and reduces maintenance downtime, significantly lowering overall OPEX.",
			"Custom vessel sizing ensures optimal gas-to-media contact time, maximizing media lifespan for cost-effective operation."
		],
		keyFeatures: [
			{
				id: 1,
				title: "Tailored Media Selection",
				description: "We match the specific chemical media to your exact gas profile for the highest absorption efficiency."
			},
			{
				id: 2,
				title: "Optimized Vessel Geometry",
				description: "Internal design ensures uniform gas distribution, preventing channeling and maximizing media utilization."
			},
			{
				id: 3,
				title: "Dual Contaminant Removal",
				description: "Engineered to simultaneously strip corrosive H₂S and drop out damaging free moisture from the gas stream."
			},
			{
				id: 4,
				title: "Corrosion-Resistant Build",
				description: "Vessels constructed from FRP or specially coated steel guarantee decades of reliable service in harsh conditions."
			},
			{
				id: 5,
				title: "Lead-Lag Configuration Options",
				description: "Available in multi-stage setups allowing for continuous operation without plant shutdowns during media changes."
			},
			{
				id: 6,
				title: "Safe & Ergonomic Servicing",
				description: "Designed with oversized access ports and strategic valves to make routine media extraction and refilling safe and easy."
			}
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
		overviewTitle: "Biogas Dehumidifier System",
		overviewText:
			"Inventive Gas Equipment’s Biogas Dehumidifier System is not just another moisture removal unit—it is a fully engineered solution designed to optimize gas quality, protect downstream equipment, and enhance overall plant performance. Biogas typically contains high levels of moisture, which can lead to corrosion, reduced efficiency, and damage to critical equipment such as compressors, gas engines, pipelines, and upgrading systems. Our dehumidification systems are specifically designed to reduce gas dew point and ensure consistent, dry gas supply across the plant.",
		overviewExtraText:
			"Built with a focus on durability, efficiency, and ease of operation, our systems are widely deployed across biogas and CBG projects.",
		bannerDescription:
			"Dehumidification units stabilize gas output and protect downstream equipment for long-term performance.",
		bannerHeading: "Moisture Management",
		bannerLongDescription:
			"Dehumidification improves gas stability and reduces moisture-related equipment issues. Systems are configured to match flow rate and target dew point for consistent output. This helps protect engines, pipelines, and instrumentation over long operating cycles.",
		bannerImage: "/images/HomeProductRange/dehumidifier.webp",
		overviewOptions: [
			{ icon: "performance", label: "Moisture Control", value: "Configured target dew point" },
			{ icon: "reliability", label: "Asset Protection", value: "Prevents pipeline corrosion" },
			{ icon: "capacity", label: "Flow Capacity", value: "Handles varied gas volumes" },
			{ icon: "service", label: "Drainage", value: "Auto condensate drain system" },
			{ icon: "settings", label: "Technology", value: "Chiller or Adsorption based" },
			{ icon: "support", label: "Integration", value: "Compact, plug-and-play design" }
		],
		faqs: [
			{
				question: "What type of dehumidification technology is used?",
				answer: "We utilize industrial chiller (refrigeration) or adsorption-based drying technologies, selected specifically based on your flow rates and site needs."
			},
			{
				question: "Can the outlet dew point be customized?",
				answer: "Yes, the system is engineered to hit exact moisture reduction targets to meet your specific downstream equipment requirements."
			},
			{
				question: "How is the accumulated condensate handled?",
				answer: "Our systems feature reliable, automatic condensate drain valves for continuous, hands-free moisture removal."
			},
			{
				question: "Where is the dehumidifier typically installed in the plant?",
				answer: "It is usually installed directly upstream of the gas genset, compressor, or H₂S scrubber to protect these critical assets."
			},
			{
				question: "Why is moisture removal critical for biogas operations?",
				answer: "Moisture combines with H₂S to form corrosive acids that rapidly degrade engine oil, destroy internal engine components, and corrode pipelines."
			},
			{
				question: "Can the system handle fluctuating gas flow rates?",
				answer: "Yes, the units are engineered to adapt smoothly to varying loads without compromising the final outlet gas quality."
			},
			{
				question: "What are the power requirements for the unit?",
				answer: "Depending on the cooling capacity and scale of the plant, systems are available in both single-phase and three-phase power configurations."
			},
			{
				question: "Is the dehumidifier suitable for outdoor installation?",
				answer: "Absolutely. The units are constructed with weather-resistant materials designed for robust outdoor industrial environments."
			},
			{
				question: "How does dehumidification improve overall plant efficiency?",
				answer: "Dry biogas burns much more efficiently, yielding higher energy output, preventing misfires, and significantly reducing maintenance downtime."
			},
			{
				question: "What routine maintenance is required?",
				answer: "Maintenance is minimal, primarily involving periodic checks of the auto-drain functionality and routine cleaning of the heat exchanger coils."
			}
		],
		technicalSpecs: [
			{ parameter: "Technology Type", details: "Chiller / Adsorption" },
			{ parameter: "Moisture Removal Rate", details: "Calculated as per peak flow rate" },
			{ parameter: "Target Outlet Dew Point", details: "Custom configured per project" },
			{ parameter: "Condensate Drain", details: "Fully automatic electronic drain" },
			{ parameter: "Power Supply", details: "Single Phase / Three Phase" },
			{ parameter: "System Integration", details: "Upstream of engines / compressors" }
		],
		keyBenefits: [
			"Protects critical downstream equipment like gas engines and compressors from acid-induced corrosion and premature wear.",
			"Increases overall combustion efficiency and energy yield by delivering consistent, dry biogas.",
			"Reduces operational downtime and maintenance costs with fully automated condensate drainage and robust industrial design."
		],
		keyFeatures: [
			{
				id: 1,
				title: "Precision Dew Point Control",
				description: "Engineered to hit exact moisture reduction targets to meet stringent OEM engine specifications."
			},
			{
				id: 2,
				title: "Automated Condensate Drainage",
				description: "Equipped with reliable auto-drain valves for continuous, unmanned moisture removal."
			},
			{
				id: 3,
				title: "Advanced Heat Exchangers",
				description: "Utilizes high-efficiency, corrosion-resistant heat exchangers designed specifically for harsh biogas environments."
			},
			{
				id: 4,
				title: "Compact Modular Design",
				description: "Space-saving footprint that easily integrates into existing plant layouts and piping structures."
			},
			{
				id: 5,
				title: "Variable Load Handling",
				description: "Adapts smoothly to fluctuating gas flow rates without compromising the final outlet gas quality."
			},
			{
				id: 6,
				title: "Industrial-Grade Build",
				description: "Manufactured with heavy-duty components for 24/7 continuous operation in demanding CBG and biogas facilities."
			}
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
