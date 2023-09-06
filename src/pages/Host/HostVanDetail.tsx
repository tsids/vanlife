import { Link, Outlet, NavLink, useOutletContext, useLoaderData } from "react-router-dom"
// @ts-ignore
import { getHostVans } from '../../api'

type Van = {
    id?: string,
    name?: string,
    price?: number,
    description?: string,
    imageUrl?: string,
    type?: string,
}

const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

export function loader({ params }: { params: any }) {
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const currentVan = useLoaderData() as Van

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }: { isActive: boolean }) => isActive ? activeStyle : undefined}
                    >
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={{ currentVan } satisfies { currentVan: Van }} />
            </div>
        </section>
    )
}

export function useVanContext() {
    return useOutletContext<{ currentVan: Van }>();
}
