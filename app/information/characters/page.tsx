import { lazy, Suspense } from 'react'
import { getAllCharacters } from './services'
import { CharacterCardSkeleton } from '../../../components'

const CharacterCard = lazy(() => import('../../../components/CharacterCard/CharacterCard'))

export default async function CharactersPage() {
  const characters = await getAllCharacters()

  return (
    <>
      <Suspense fallback={<CharacterCardSkeleton quantity={6} />}>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Suspense>
    </>
  )
}
