import styles from  './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header (){
  console.log(igniteLogo);

  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite" />
    </header>
  )
}