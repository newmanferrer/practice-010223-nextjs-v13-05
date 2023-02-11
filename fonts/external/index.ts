import { Montserrat, Roboto } from '@next/font/google'

//* -----------------------------------------------------------------
//* 1.- Global Font
//* -----------------------------------------------------------------
export const font_montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat'
})
//* -----------------------------------------------------------------

//* -----------------------------------------------------------------
//* 2.- Paragraph Font
//* -----------------------------------------------------------------
export const font_roboto = Roboto({
  display: 'optional',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto'
})
//* -----------------------------------------------------------------
