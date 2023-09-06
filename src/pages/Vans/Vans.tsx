import { useState } from "react"
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api.ts'

type Van = {
    id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    type: string,
}

type Error = {
    message: string,
    statusText: string,
    status: number
}

export function loader() {
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState<Error | null>(null)
    const vans = useLoaderData() as Van[]

    const typeFilter = searchParams.get('type')

    const displayedVans = typeFilter
        ? vans.filter((van: Van) => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map((van: Van) => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))


    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    className={`${typeFilter === 'simple' ? 'selected' : ''} van-type simple`}
                    onClick={() => setSearchParams({ type: "simple" })}
                >
                    Simple
                </button>
                <button
                    className={`${typeFilter === 'luxury' ? 'selected' : ''} van-type luxury`}
                    onClick={() => setSearchParams({ type: "luxury" })}
                >
                    Luxury
                </button>
                <button
                    className={`${typeFilter === 'rugged' ? 'selected' : ''} van-type rugged`}
                    onClick={() => setSearchParams({ type: "rugged" })}
                >
                    Rugged
                </button>
                {typeFilter && <button
                    className="van-type clear-filters"
                    onClick={() => setSearchParams({})}
                >
                    Clear filters
                </button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}