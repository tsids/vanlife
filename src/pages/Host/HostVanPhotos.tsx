import { useVanContext } from './HostVanDetail'

export default function HostVanPhotos() {
    const { currentVan } = useVanContext()

    return (
        <img src={currentVan.imageUrl} className='host-van-detail-image' />
    )
}