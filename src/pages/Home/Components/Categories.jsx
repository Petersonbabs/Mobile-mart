import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../../../components/layout/ProductList";
import PaginationBar from "../../../components/common/PaginationBar";

import { useProductContext } from "../../../contexts/ProductContext";

const Categories = () => {
  const { products, getProducts, loading } = useProductContext();

  // Fetch products when component mounts
  useEffect(() => {
    getProducts();
  }, []);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Show loading spinner while products are being fetched
  if (loading) {
    return (
      <div className="spinner-grow block mx-auto size-20 bg-primary-300 my-16" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  // Handle case when there are no products
  if (!products || products?.length === 0) {
    return <h1 className="text-center py-20">No products available</h1>;
  }

  return (
    <div id="categories" className="py-8">
      {/* Category wrapper */}
      <div className="w-90vw m-auto">
        {/* Text */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-center md:text-start text-3xl font-bold w-full md:w-fit">
              Categories
            </h3>
            <Link className="hidden md:inline">View all</Link>
          </div>

          <div className="overflow-x-auto flex items-center scroll-m-0">
            {["All", "Devices", "Laptops", "Phones", "Earpods", "Airpods"].map(
              (category, index) => {
                return (
                  <span
                    key={index}
                    className={`p-4 ${category === "All" ? "all" : ""}`}
                  >
                    {category}
                  </span>
                );
              }
            )}
          </div>
        </div>
        {/* End of text */}

        {/* Products list */}
        <ProductList products={currentProducts} />
        {/* End of products list */}

        {/* Pagination */}
        <PaginationBar
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {/* End of Pagination */}
      </div>
      {/* End of Category wrapper */}
    </div>
  );
};

export default Categories;
