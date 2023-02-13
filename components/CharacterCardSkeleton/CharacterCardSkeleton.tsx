import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './CharacterCardSkeleton.module.scss'

export const CharacterCardSkeleton = () => {
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
