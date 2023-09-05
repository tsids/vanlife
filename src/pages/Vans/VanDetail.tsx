import { useEffect, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom"

type Van = {
    id?: string,
    name?: string,
    price?: number,
    description?: string,
    imageUrl?: string,
    type?: string,
}

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()

    const [van, setVan] = useState<Van>({})

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="van-detail-container">
            <Link
                to={`..${location.state?.search || ''}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {location.state?.type || 'all'} vans</span></Link>

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}