import { useEffect, useState } from "react"
import { Link, useSearchParams } from 'react-router-dom'

type Van = {
    id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    type: string,
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')

    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter((van: Van) => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map((van: Van) => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

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