'use client'

import { Skeleton } from '@mui/material'
import styles from './LocationCardSkeletonMU.module.scss'
import colors from '../../colors/colors.module.scss'

interface IProps {
  quantity?: number
}

export const LocationCardSkeletonMU = ({ quantity = 1 }: IProps) => {
  return (
    <>
      {[...Array(quantity)].map(index => (
        <div className={styles.container} key={index}>
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
      ))}
    </>
  )
}
