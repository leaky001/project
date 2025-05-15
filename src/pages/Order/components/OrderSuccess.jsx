import {BiCart, BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";




const OrderSuccess = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 ">
      <div>
        <p className="text-green-600 text-7xl mb-5 ">
          <BiCheckCircle/>
        </p>
        <p>
         Thank you Muiz for the order
        </p>
        <p>
          Your Order ID: 12ueggsbdvsvsgsw897sh
        </p>
      </div>


      <div className="my-5">
          <p>Your order is confirmed</p>
          <p>
            Please check your email (Muiz@gmail.com) for the eBook.
          </p>
          <p className="my-5">
              Payment ID: xuz-1353435353
          </p>
      </div>


     <Link
     to="/products"
     type="button"
     className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mb-2 dark:hover:bg-blue-700 dark:bg-blue-600 focus:outline-none inline-flex items-center gap-2"
     >
      Continue Shopping 
      <BiCart/>
     </Link>
      
    </section>
  )
}

export default OrderSuccess
