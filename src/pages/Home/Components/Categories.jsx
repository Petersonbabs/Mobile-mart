import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../../../components/layout/ProductList";
import PaginationBar from "../../../components/common/PaginationBar"

import { useProductContext } from "../../../contexts/ProductContext";

const Categories = () => {
  const {products, getProducts, token} = useProductContext()
  useEffect(()=>{
    getProducts()
  }, [token])

  if(!products){
    return <h1>No product available</h1>
  }

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(!products){
    return <div class="spinner-grow block mx-auto size-20 bg-primary-300 my-16" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  }

  return (
    <div id="categories" className="py-8">
      {/* Category wrapper */}
      <div className="w-90vw m-auto">
        {/* text */}
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
        {/* end of text */}

        {/* products list */}
        <ProductList products={currentProducts} />
        {/* end of products list */}

        {/* Pagination */}
        <PaginationBar
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {/* end of Pagination */}
      </div>
      {/* End of Category wrapper */}
    </div>
  );
};

export default Categories;
