import { SkeletonTheme } from 'react-loading-skeleton'
import colors from '../../colors/colors.module.scss'
import { CharacterCardSkeleton } from '../'

export const CharacterPageSkeleton = () => {
  return (
    <SkeletonTheme
      width={480}
      borderRadius={5}
      baseColor={colors.skeletonBaseColor}
      highlightColor={colors.skeletonHighlightColor}
      enableAnimation={true}
      duration={1.5}
    >
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
      <CharacterCardSkeleton />
    </SkeletonTheme>
  )
}
