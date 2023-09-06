import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from '../../api.ts'
import { requireAuth } from '../../utils'

type Van = {
    id?: string,
    name?: string,
    price?: number,
    description?: string,
    imageUrl?: string,
    type?: string,
}

export async function loader() {
    await requireAuth()
    return getHostVans()
}

export default function HostVans() {
    const vans = useLoaderData() as Van[]

    const hostVansEls = vans.map((van: Van) => (
        <Link
            to={van.id || ''}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>
        </section>
    )
}