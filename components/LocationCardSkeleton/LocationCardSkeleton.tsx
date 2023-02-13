'use client'

import { Skeleton } from '@mui/material'
import styles from './LocationCardSkeleton.module.scss'
import colors from '../../colors/colors.module.scss'

export const LocationCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div>
        <Skeleton
          width={250}
          height={45}
          sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
          animation='pulse'
        />
      </div>

      <div>
        <Skeleton
          width={350}
          height={25}
          sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
          animation='pulse'
        />
        <Skeleton
          width={350}
          height={25}
          sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
          animation='pulse'
        />
        <Skeleton
          width={350}
          height={25}
          sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
          animation='pulse'
        />
      </div>
    </div>
  )
}
