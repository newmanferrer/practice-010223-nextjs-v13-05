import { CharacterCard } from '../../components'
import { getAllCharacters } from './services'

export default async function CharactersPage() {
  const characters = await getAllCharacters()

  return (
    <>
      {characters.map(character => (
        <CharacterCard key={character.id} data={character} />
      ))}
    </>
  )
}
