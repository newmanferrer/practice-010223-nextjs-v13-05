import Link from 'next/link'
import styles from './Navigation.module.scss'

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
    route: '/information/characters'
  },
  {
    id: 3,
    label: 'Locations',
    route: '/information/locations'
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
