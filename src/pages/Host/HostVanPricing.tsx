import { useVanContext } from './HostVanDetail'

export default function HostVanPricing() {
    const { currentVan } = useVanContext()

    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}