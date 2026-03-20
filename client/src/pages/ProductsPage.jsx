import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getProductsDataBySlug } from "../data/ProductsData";
import ProductsHero from "../components/products/ProductsHero";
import ProductsAbout from "../components/products/ProductsAbout";
import HomePage from "../pages/HomePage";
import Certificates from "../components/products/Certificates";
import GalleryPreview from "../components/products/GalleryPreview";
import Analysis from "../components/products/Analysis";

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
      <ProductsAbout productsData={productsData} />
      <Certificates />
      <GalleryPreview/>
      <Analysis />
    </div>
  );
};

export default ProductsPage;
