import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './CharacterCardSkeleton.module.scss'

const CharacterCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div>
        <Skeleton circle width={150} height={150} />
      </div>

      <div>
        <h3>
          <Skeleton count={1} width={256} />
        </h3>
      </div>

      <div>
        <h4>
          <Skeleton count={1} width={200} />
        </h4>
        <h4>
          <Skeleton count={1} width={350} />
        </h4>
      </div>
    </div>
  )
}

export const CharacterPageSkeleton = () => {
  return (
    <SkeletonTheme
      width={480}
      borderRadius={5}
      baseColor='#202020'
      highlightColor='#444'
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
