import { useCart } from "../../../context";
import { useTitle } from "../../../hooks/useTitle";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";



const CartPage = () => {
    const {cartList} = useCart()
    useTitle(`Cart (${cartList.length})`)
  return (
    <main>
      {cartList.length ? <CartList/>:<CartEmpty/>}
    </main>
  )
}

export default CartPage
