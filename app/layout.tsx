import { Navigation } from '../components'
import { font_montserrat, font_roboto } from '../fonts'
import './globals.scss'

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en' className={`${font_montserrat.variable} ${font_roboto.variable}`}>
      <head />
      <body>
        <header>
          <Navigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
