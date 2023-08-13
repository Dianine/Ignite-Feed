import { Header } from "./components/Header";
import SideBar from "./components/SideBar";
import Post from "./components/Post";


import styles from'./App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/Dianine.png', 
      name: 'Dianine Costa.', 
      role: 'Web Developer'
    },
    content: [
      {type:'paragraph', content: 'Fala galera!!'},
      {type:'paragraph', content:"Acabei de subir mais um commit do projeto do primeiro modulo com curso Ignit da RocketSeat no meu GitHub, corre lá e confere."},      
      { type:'link', content:'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2023-07-23 09:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/SnzDev.png', 
      name: 'Thálisson Sinézio', 
      role: 'Dev Full Stack'
    },
    content: [
      {type:'paragraph', content: 'Fala galera!!'},
      {type:'paragraph', content:"Acabei de subir mais um commit do projeto do primeiro modulo com curso Ignit da RocketSeat no meu GitHub, corre lá e confere."},      
      { type:'link', content:'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2023-07-23 09:45:00'),
  }
]

export default function App() {
  return (
  <div>
    <Header/>

   <div className={styles.wrapper}>
    <SideBar/>
    <main>
      {posts.map(post => {
       return (
       <Post
       key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        />
       )
      })
      }
    </main>
   </div>
  </div>
  )
}

