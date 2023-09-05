import { Link, NavLink } from "react-router-dom";

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
            </nav>
        </header>
    )
}