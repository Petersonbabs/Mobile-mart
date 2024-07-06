import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../../../components/layout/ProductList";
import { products } from "../../../data/products";


const Categories = () => {
  const categoriesProducts = products.slice(0, products.length);

  return (
    <div id="categories" className="py-8">
      {/* Category wrapper */}
      <div className="w-90vw m-auto">
        {/* text */}
        <div>
          <div className="flex items-center justify-between ">
            <h3 className="text-center md:text-start text-xl font-bold w-full md:w-fit">
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
                    className={`p-4 ${category == "All" ? "all" : ""}`}
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
        <ProductList products={categoriesProducts} />
        {/* end of products list */}
      </div>
      {/* End of Category wrapper */}
    </div>
  );
};

export default Categories;
