import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyle: React.CSSProperties = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}