import localFont from '@next/font/local'

//* -----------------------------------------------------------------
//* 1.- Fira Code
//* -----------------------------------------------------------------
export const font_firaCode = localFont({
  src: [
    {
      path: './firaCode/FiraCode-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './firaCode/FiraCode-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './firaCode/FiraCode-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './firaCode/FiraCode-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './firaCode/FiraCode-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './firaCode/FiraCode-VF.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-firaCode'
})
//* -----------------------------------------------------------------
