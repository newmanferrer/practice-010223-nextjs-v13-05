import styles from './information.layout.module.scss'

interface IProps {
  children: React.ReactNode
}

export default function InformationLayout({ children }: IProps) {
  return <div className={styles.container}>{children}</div>
}
