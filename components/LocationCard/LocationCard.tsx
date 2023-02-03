import { ILocation } from '../../app/information/locations/models'
import styles from './LocationCard.module.scss'

interface IProps {
  data: ILocation
}

export function LocationCard({ data }: IProps) {
  return (
    <div className={styles.container}>
      <div>
        <h3>Name: {data.name}</h3>
      </div>

      <div>
        <h4>Type: {data.type}</h4>
        <h4>Dimension: {data.dimension}</h4>
      </div>
    </div>
  )
}
