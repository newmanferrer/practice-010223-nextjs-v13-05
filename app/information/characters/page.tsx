import { getAllCharacters } from './services'
import { CharacterCard } from '../../../components'

export default async function CharactersPage() {
  const characters = await getAllCharacters()

  return (
    <>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
  )
}
