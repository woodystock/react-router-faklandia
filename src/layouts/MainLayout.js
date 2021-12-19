import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import NavMenu from "../components/NavMenu"

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <NavMenu />
            <Outlet />
        </div>
    )
}


export default MainLayout