import Image from 'next/image'
import { ICharacter } from '../../app/information/characters/models'
import { rick_and_morty_base64 } from '../../public/images'
import styles from './CharacterCard.module.scss'

interface IProps {
  character: ICharacter
}

export default function CharacterCard({ character }: IProps) {
  //* Using Logical Assignment "||="
  const formattedSpecies = (character.species ||= 'N/A')

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={character.image}
          alt={character.name}
          width='150'
          height='150'
          blurDataURL={rick_and_morty_base64}
          placeholder='blur'
        />
      </div>

      <div>
        <h3>{character.name}</h3>
      </div>

      <div>
        <h4>Species: {formattedSpecies}</h4>
        <h4>Created: {character.created}</h4>
      </div>
    </div>
  )
}
