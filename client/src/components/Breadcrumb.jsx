import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeProductsRangeData from "../data/HomeProductsRangeData";
import { blogPosts } from "../data/BlogData";

const toTitleCase = (value) =>
	value
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");

const Breadcrumb = () => {
	const location = useLocation();
	const pathParts = location.pathname.split("/").filter(Boolean);

	const productBySlug = React.useMemo(() => {
		const entries = homeProductsRangeData.map((product) => {
			const slug = product.link.split("/").pop();
			return [slug, product.title];
		});
		return Object.fromEntries(entries);
	}, []);

	const blogBySlug = React.useMemo(() => {
		const entries = blogPosts.map((post) => [post.slug, post.title]);
		return Object.fromEntries(entries);
	}, []);

	const staticLabelMap = {
		products: "Products",
		blogs: "Blogs",
		blog: "Blog",
		contact: "Contact",
		"privacy-policy": "Privacy Policy",
		"terms-and-conditions": "Terms and Conditions",
		"thank-you": "Thank You",
		"new-home": "Home"
	};

	const buildLabel = (segment, index) => {
		if (index > 0 && pathParts[index - 1] === "products") {
			return productBySlug[segment] || toTitleCase(segment);
		}

		if (index > 0 && pathParts[index - 1] === "blog") {
			return blogBySlug[segment] || toTitleCase(segment);
		}

		return staticLabelMap[segment] || toTitleCase(segment);
	};

	const crumbs = [
		{ label: "Home", path: "/" },
		...pathParts.map((segment, index) => ({
			label: buildLabel(segment, index),
			path: `/${pathParts.slice(0, index + 1).join("/")}`
		}))
	];

	return (
		<div className="pointer-events-none absolute left-0 right-0 top-4 z-30">
			<div className="max-w-[1400px] mx-auto px-6 md:px-12">
				<nav
					aria-label="Breadcrumb"
					className="pointer-events-auto inline-flex flex-wrap items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm"
				>
					{crumbs.map((crumb, index) => {
						const isLast = index === crumbs.length - 1;

						return (
							<React.Fragment key={crumb.path}>
								{isLast ? (
									<span className="text-white/90">{crumb.label}</span>
								) : (
									<Link to={crumb.path} className="hover:text-[#f48131] transition-colors">
										{crumb.label}
									</Link>
								)}
								{!isLast && <span className="text-white/40">/</span>}
							</React.Fragment>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Breadcrumb;
