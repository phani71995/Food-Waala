import NavBar from "../components/NavBar"
import ItemContainer from "../components/ItemContainer"
import Chains from "../components/Chains"
import FirmCollection from "../components/FirmCollection"
import { Route, Routes } from "react-router"
import Product from "../components/Product"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
function LandingPage() {
    return (<>

        <NavBar />
        <Carousel />
        <div className="container">
            <ItemContainer />
            <Chains />
            <FirmCollection />

        </div>
        <Footer />
    </>)
}
export default LandingPage