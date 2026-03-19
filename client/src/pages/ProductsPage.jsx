import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getProductsDataBySlug } from "../data/ProductsData";
import ProductsHero from "../components/products/ProductsHero";
import HomePage from "../pages/HomePage";

const ProductsPage = () => {
  const { slug } = useParams();
  const productsData = getProductsDataBySlug(slug);

  if (!productsData) {
    return <HomePage />;
  }

  return (
    <div>
      <Helmet>
        <title>{productsData.metaTitle}</title>
        <meta name="description" content={productsData.metaDescription} />
      </Helmet>
      <ProductsHero productsData={productsData} />
    </div>
  );
};

export default ProductsPage;
