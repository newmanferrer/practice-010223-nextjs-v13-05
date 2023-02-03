import styles from './characters.layout.module.css'

interface IProps {
  children: React.ReactNode
}

export default function CharacterLayout({ children }: IProps) {
  return <div className={styles.container}>{children}</div>
}
