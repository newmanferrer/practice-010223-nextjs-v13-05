import styles from './information.layout.module.css'

interface IProps {
  children: React.ReactNode
}

export default function InformationLayout({ children }: IProps) {
  return <div className={styles.container}>{children}</div>
}
