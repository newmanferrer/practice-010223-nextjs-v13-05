import Image from 'next/image'
import styles from './page.module.scss'
import mountains from '../public/images/avif/mountains.avif'
import { girl_face_base64_2 } from '../public/images'

export default async function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <h1>WELCOME TO RICK AND MORTY APP</h1>
        <h2>What do you want to see ?</h2>
      </div>

      {/* Remote Image */}
      <h2 className={styles.firaCodeLocal}>Remote Image</h2>
      <Image
        className={styles.image}
        src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        alt='morty image'
        priority
        width={350} // mandatory
        height={350} // mandatory
        blurDataURL={girl_face_base64_2} // Optional
        placeholder='blur' // mandatory if we use "blurDataURL"
      />

      {/* Local Image */}
      <h2 className={styles.firaCodeLocal}>Local Image</h2>
      <Image
        className={styles.image}
        src={mountains}
        alt='mountains'
        // width={350} automatically provided
        // height={350} automatically provided
        // blurDataURL={girl_face_base64_2} // automatically provided
        placeholder='blur' // Optional blur-up while loading
      />
    </>
  )
}
