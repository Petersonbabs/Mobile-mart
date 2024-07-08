import { Link } from "react-router-dom";
import { useState } from "react";
import { assests} from "../../assets/assets";
import {
  ShoppingCartIcon,
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useProductContext } from "../../contexts/ProductContext";

const Nav = () => {
  const { cart } = useProductContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="nav py-3 border-b-1 border-green">
      {/* nav wrapper */}
      <nav className="w-90vw m-auto flex items-center justify-between">
        {/* mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {mobileMenuOpen ? (
            <XMarkIcon className="size-8 hover:text-primary-300" />
          ) : (
            <Bars3CenterLeftIcon className="size-8 hover:text-primary-300" />
          )}
        </button>
        {/* end of mobile menu button */}

        {/* nav logo */}
        <Link to={"/"} className="nav-logo w-28 block">
          <img src={assests.Logo} alt="Mobile mart logo" width="100%" />
        </Link>
        {/* end of nav logo */}

        {/* menu items */}
        <div className="hidden md:flex gap-8">
          <Link
            to={"/"}
            className="px-2 py-1 text-lg hover:text-primary-300 font-bold home-link"
          >
            Home
          </Link>
          {["Product", "Store", "Categories"].map((item) => (
            <a
              key={item}
              href={`#categories`}
              className={`px-3 py-2 text-lg font-400 hover:text-primary-300 active:text-primary-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        {/* end of menu items */}

        {/* shop: search & cart */}
        <div className="flex items-center gap-3">
          <Link
            to={"/cart"}
            className="bg-primary-300 text-white min-w-8 min-h-8 rounded-full flex justify-center items-center border-1 relative"
          >
            <ShoppingCartIcon className="size-4 text-white-pure" />
            {cart.length > 0 && (
              <span className="absolute z-10 text-white-pure flex justify-center items-center rounded-full p-2 text-sm bg-red-primary w-8 h-8 max-w-6 max-h-6 bottom-3 left-5">
                {cart.length || ""}
              </span>
            )}
          </Link>
        </div>
        {/* shop end : search & cart */}
      </nav>
      {/* end of nav wrapper */}

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white absolute top-14 left-0 w-full shadow-lg z-50">
          <Link
            to={"/"}
            className="px-2 py-1 text-lg hover:text-primary-300 font-bold home-link"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          {["Product", "Store", "Categories"].map((item) => (
            <a
              key={item}
              href={`#categories`}
              className={`px-3 py-2 text-lg font-400 hover:text-primary-300 active:text-primary-300`}
              onClick={toggleMobileMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
      {/* end of mobile menu */}
    </div>
  );
};

export default Nav;
