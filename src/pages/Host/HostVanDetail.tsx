import { ContextType, useEffect, useState } from "react"
import { useParams, Link, Outlet, NavLink, useOutletContext } from "react-router-dom"

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

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState<Van>({})

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])


    if (!currentVan) {
        return <h1>Loading...</h1>
    }

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

export function useVan() {
    return useOutletContext<{ currentVan: Van }>();
}
