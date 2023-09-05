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
                    to="."
                    end
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }: { isActive: boolean }) => isActive ? style : undefined}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}