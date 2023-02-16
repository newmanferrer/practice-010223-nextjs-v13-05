'use client'

import { Skeleton, Typography } from '@mui/material'
import colors from '../../colors/colors.module.scss'
import styles from './CharacterCardSkeletonMU.module.scss'

interface IProps {
  quantity?: number
}

export const CharacterCardSkeletonMU = ({ quantity = 1 }: IProps) => {
  return (
    <>
      {[...Array(quantity)].map(index => (
        <div className={styles.container} key={index}>
          <div>
            <Skeleton
              width={150}
              height={150}
              variant='circular'
              sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
              animation='pulse'
            />
          </div>

          <div>
            <Typography variant='h3'>
              <Skeleton
                variant='text'
                width={200}
                sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
                animation='pulse'
              />
            </Typography>
          </div>

          <div>
            <Typography variant='h4'>
              <Skeleton
                variant='text'
                width={200}
                sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
                animation='pulse'
              />
            </Typography>
            <Typography variant='h4'>
              <Skeleton
                variant='text'
                width={350}
                sx={{ bgcolor: `${colors.skeletonBaseColor}` }}
                animation='pulse'
              />
            </Typography>
          </div>
        </div>
      ))}
    </>
  )
}
