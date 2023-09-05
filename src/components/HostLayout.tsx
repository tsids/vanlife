import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const style: React.CSSProperties = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/host/income"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Income
                </NavLink>
                <NavLink
                    to="/host/vans"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="/host/reviews"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}