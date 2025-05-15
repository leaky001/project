import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components"; // Ensure you're importing correctly
import { useCart } from "../context";
import { getProduct } from "../services";
import { IoAdd, IoTrash } from "react-icons/io5";

const ProductDetails = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useTitle(product.name);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === product.id);
    setInCart(!!productInCart);
  }, [cartList, product.id]);

  return (
    <main className="px-4 py-8">
      <section>
        <h1 className="mb-4 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>

        <p className="mb-8 text-lg text-center text-gray-700 dark:text-slate-300">
          {product.overview}
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Product Image */}
          <div className="max-w-md">
            <img src={product.poster} className="rounded-xl shadow-lg w-full object-cover" alt={product.name} />
          </div>

          {/* Product Info */}
          <div className="max-w-xl">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-3">
              ${product.price}
            </p>

            <div className="mb-4">
              <Rating rating={product.rating} />
            </div>

            <div className="flex flex-wrap gap-3 mb-6 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-600 bg-amber-100 border border-amber-200 rounded-lg px-3 py-1">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1">
                  IN STOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-1">
                  OUT OF STOCK
                </span>
              )}
              {product.size && (
                <span className="font-semibold text-blue-500 bg-slate-100 border rounded-lg px-3 py-1">
                  Size: {product.size}
                </span>
              )}
            </div>

            <div className="mb-6">
              {!inCart ? (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center gap-2 px-5 py-2 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition ${
                    product.in_stock ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!product.in_stock}
                >
                  Add To Cart
                  <IoAdd />
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center gap-2 px-5 py-2 text-lg font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 transition ${
                    product.in_stock ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!product.in_stock}
                >
                  Remove Item
                  <IoTrash />
                </button>
              )}
            </div>

            <p className="text-lg text-gray-900 dark:text-slate-200 leading-relaxed">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
