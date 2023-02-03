import styles from './page.module.css'

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <h1>WELCOME TO RICK AND MORTY APP</h1>
      <h2>What do you want to see ?</h2>
    </div>
  )
}
