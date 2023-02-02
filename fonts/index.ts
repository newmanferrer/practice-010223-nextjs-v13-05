import { Montserrat, Roboto } from '@next/font/google'

//* Global Font
export const font_montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat'
})

//* Paragraph Font
export const font_roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto'
})
