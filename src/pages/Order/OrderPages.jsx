import { useLocation } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"
import OrderSuccess from "./components/OrderSuccess"
import OrderFail from "./components/OrderFail"



const OrderPages = () => {
    useTitle("Order Summary");
    const {state} = useLocation();
  return (
    <main>
      {state.status ? <OrderSuccess /> : <OrderFail/>}
    </main>
  )
}

export default OrderPages
