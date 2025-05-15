
import DashboardCard from "./components/DashboardCard"
import DashboardEmpty from "./components/DashboardEmpty"
import { useTitle } from "../../hooks/useTitle"
const DashboardPage = () => {

    const orders = true 
    useTitle("Dashboard")
  return (
    <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline-offset-8">
                My Dashboard

            </p>
        </section>

        <section>
            {orders && (
                <DashboardCard/>
            )}
        </section>
        
        <section>
            {!orders && <DashboardEmpty/>}
        </section>
    </main>
  )
}

export default DashboardPage
