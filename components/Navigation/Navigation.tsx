import Link from 'next/link'
import styles from './Navigation.module.css'

interface ILink {
  id: number
  label: string
  route: string
}

const links: ILink[] = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'Characters',
    route: '/characters'
  },
  {
    id: 3,
    label: 'Planets',
    route: '/planets'
  }
]

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
