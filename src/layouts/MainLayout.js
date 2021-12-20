import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavMenu from "../components/NavMenu"

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    )
}


export default MainLayout