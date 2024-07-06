import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  

  return (
    <div className="grid xsm:grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-8">
      {products?.map((product) => {
        const { id, image, title, price } = product;
        return (
          <div key={id} className="rounded border border-primary-300 p-4">
            <div className=" w-full ">
              <img src={image} alt="" className="w-full " />
            </div>
            <h3 className=" text-wrap break-words font-semibold tracking-wide capitalize my-2">
              {title}
            </h3>
            <div>
              <span className="text-lg">${price}</span>
              {/* todo: increment item */}
            </div>
            <div className="flex gap-2 items-center justify-between flex-wrap mt-4">
              <button className="w-fit min-w-fit flex-1 border-none py-2 px-2 rounded bg-primary-300 hover:bg-primary-400 text-white-pure text-sm">
                Add to cart
              </button>
              <Link className="w-fit flex-1 min-w-fit py-2 px-2 rounded  border-1 border-green text-sm hover:bg-gray-primary text-center">
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
