import profileInfo from '../assets/profileInfo.png'
import styles from './Post.module.css'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={profileInfo} alt="" />
        </div>
        <div className={styles.authorInfo}>
          <strong>Dianine Costa</strong>
          <span>Web Developer</span>
        </div>

        <time
          title='12 de julho de 2023 às 21:45:00' 
          dateTime='2023-07-12 21:38:00'
        >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subr mais um projeto no meu git</p>
        <p> <a href="https://github.com/Dianine">GitHub</a> </p>
        <p> <a href="#"> #Front #React #WebDeveloper #Ignite </a></p>
      </div>
    </article>
  )
}