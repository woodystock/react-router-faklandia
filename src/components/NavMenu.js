import { NavLink } from "react-router-dom"

const NavMenu = () => {
    return (
        <div className="nav-menu__container">
                <NavLink className="nav-menu__button" to="#">Home</NavLink>
                <NavLink className="nav-menu__button" to="#">Misdemeanours</NavLink>
                <NavLink className="nav-menu__button" to="#">Confess to Us</NavLink>
        </div>
    )
}

export default NavMenu