import { Link, NavLink } from "react-router-dom";
import imageUrl from '../assets/images/avatar-icon.png'

const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}