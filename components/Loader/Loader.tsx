import styles from './loader.module.scss'

interface IProps {
  text?: string
}

export function Loader({ text }: IProps) {
  return (
    <div className={styles.container}>
      {text && <h3>{text}</h3>}
      <span />
    </div>
  )
}
