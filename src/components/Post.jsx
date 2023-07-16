import profileInfo from '../assets/profileInfo.png'
import styles from './Post.module.css'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={profileInfo} alt="" />
        <div className={styles.authorInfo}>
          <strong>Dianine Costa</strong>
          <span>Web Developer</span>
        </div>
        </div>

        <time
          title='12 de julho de 2023 às 21:45:00' 
          dateTime='2023-07-12 21:38:00'
        >
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!!</p>
        <p>
          Acabei de subir mais um commit do projeto do primeiro modulo com curso Ignit da RocketSeat no meu GitHub, corre lá e confere.
        </p>
        <p> 
          {" "} 
          <a href="https://github.com/Dianine">
            Github.com/Dianine
            </a> 
        </p>
        <p> 
          <a href="#"> #Front  </a> {" "}
          <a href="#"> #React </a> {" "}
          <a href="#"> #WebDeveloper </a> {" "}
          <a href="#"> #Ignite </a> 
        </p>
      </div>
    </article>
  )
}