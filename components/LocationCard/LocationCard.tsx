import { ILocation } from '../../app/information/locations/models'
import styles from './LocationCard.module.scss'

interface IProps {
  location: ILocation
}

export function LocationCard({ location }: IProps) {
  return (
    <div className={styles.container}>
      <div>
        <h3>Name: {location.name}</h3>
      </div>

      <div>
        <h4>Type: {location.type}</h4>
        <h4>Dimension: {location.dimension}</h4>
        <h4>Created: {location.created}</h4>
      </div>
    </div>
  )
}
