import { useVan } from './HostVanDetail'

export default function HostVanPricing() {
    const { currentVan } = useVan()

    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}