import { getAllLocations } from './services'
import { LocationCard } from '../../../components'

export default async function LocationsPage() {
  const locations = await getAllLocations()

  return (
    <>
      {locations.map(location => (
        <LocationCard key={location.id} data={location} />
      ))}
    </>
  )
}
