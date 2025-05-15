import { useState } from "react";
import { useCart } from "../../../context";
import CartCard from "./CartCard";
import CheckOut from "./CheckOut";
import { BiRightArrowAlt } from "react-icons/bi";

const CartList = () => {
  const [checkOut, setCheckOut] = useState(false);
  const { cartList, total } = useCart();

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline-offset-8">
          My Cart ({cartList.length})
        </p>
      </section>

      <section>
        {cartList.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Your cart is empty.
          </p>
        ) : (
          cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))
        )}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>

        <div className="text-right my-5">
          <button
            onClick={() => setCheckOut(true)}
            type="button"
            aria-label="Proceed to checkout"
            disabled={cartList.length === 0}
            className={`inline-flex items-center gap-2 font-medium rounded-lg text-base px-7 py-2.5 mr-2 text-white 
              ${
                cartList.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-700"
              }`}
          >
            PLACE ORDER <BiRightArrowAlt />
          </button>
        </div>
      </section>

      {checkOut && <CheckOut setCheckOut={setCheckOut} />}
    </>
  );
};

export default CartList;
