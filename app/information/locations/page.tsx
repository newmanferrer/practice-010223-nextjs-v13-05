import { lazy, Suspense } from 'react'
import { getAllLocations } from './services'
import { LocationPageSkeleton } from '../../../components'

const LocationCard = lazy(() => import('../../../components/LocationCard/LocationCard'))

export default async function LocationsPage() {
  const locations = await getAllLocations()

  return (
    <>
      <Suspense fallback={<LocationPageSkeleton />}>
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Suspense>
    </>
  )
}
