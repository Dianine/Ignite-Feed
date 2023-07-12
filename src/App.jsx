import Post from "./Post";
import { Header } from "./components/Header";

import styles from'./App.module.css'
import './global.css'
import SideBar from "./components/SideBar";

export default function App() {

  return (
  <div>
    <Header/>

   <div className={styles.wrapper}>
    <SideBar/>
    <main>
      <Post 
        author="Dianine Costa" 
        content="lorim ipsum"
      />
      <Post 
        author="Thomas Costa" 
        content="Segundo Post passado pela props"
      />
    </main>
   </div>
  </div>
  )
}

