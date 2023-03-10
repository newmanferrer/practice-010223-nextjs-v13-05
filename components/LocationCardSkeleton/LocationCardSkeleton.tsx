import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './LocationCardSkeleton.module.scss'
import colors from '../../colors/colors.module.scss'

interface IProps {
  quantity?: number
}

export const LocationCardSkeleton = ({ quantity = 1 }: IProps) => {
  return (
    <SkeletonTheme
      width={480}
      borderRadius={5}
      baseColor={colors.skeletonBaseColor}
      highlightColor={colors.skeletonHighlightColor}
      enableAnimation={true}
      duration={1.5}
    >
      {[...Array(quantity)].map(index => (
        <div className={styles.container} key={index}>
          <div>
            <h3>
              <Skeleton count={1} width={256} />
            </h3>
          </div>

          <div>
            <h4>
              <Skeleton count={1} width={350} />
            </h4>
            <h4>
              <Skeleton count={1} width={350} />
            </h4>
            <h4>
              <Skeleton count={1} width={350} />
            </h4>
          </div>
        </div>
      ))}
    </SkeletonTheme>
  )
}
