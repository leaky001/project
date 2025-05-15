import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  const {
    id,
    name,
    overview,
    poster,
    price,
    rating,
    best_seller,
    in_stock
  } = product;

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === id);
    setInCart(!!productInCart);
  }, [cartList, id]);

  const handleCartClick = () => {
    if (inCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const buttonText = inCart ? "Remove Item" : "Add To Cart";
  const buttonIcon = inCart ? "bi-trash3" : "bi-plus-lg";
  const buttonColor = inCart ? "bg-red-600 hover:bg-red-800" : "bg-blue-700 hover:bg-blue-800";

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64 object-cover" src={poster} alt={name} />
      </Link>

      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl dark:text-gray-200">${price}</span>
          <button
            onClick={handleCartClick}
            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-white rounded-lg ${buttonColor} ${in_stock ? "" : "cursor-not-allowed opacity-50"}`}
            disabled={!in_stock}
          >
            {buttonText}
            <i className={`ml-1 bi ${buttonIcon}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
