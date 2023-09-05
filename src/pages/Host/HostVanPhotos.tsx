import { useVan } from './HostVanDetail'

export default function HostVanPhotos() {
    const { currentVan } = useVan()

    return (
        <img src={currentVan.imageUrl} className='host-van-detail-image' />
    )
}