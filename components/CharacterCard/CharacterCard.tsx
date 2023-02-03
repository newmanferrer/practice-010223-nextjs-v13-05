import Image from 'next/image'
import { ICharacter } from '../../app/information/characters/models'
import styles from './CharacterCard.module.scss'

interface IProps {
  data: ICharacter
}

export function CharacterCard({ data }: IProps) {
  //* Using Logical Assignment "||="
  const formattedType = (data.type ||= 'N/A')

  return (
    <div className={styles.container}>
      <div>
        <Image width='150' height='150' src={data.image} alt={data.name} />
      </div>

      <div>
        <h3>Name: {data.name}</h3>
      </div>

      <div>
        <h4>Type: {formattedType}</h4>
        <h4>Created: {data.created}</h4>
      </div>
    </div>
  )
}
