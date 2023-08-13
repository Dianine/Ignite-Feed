import styles from './Avatar.module.css'


export default function Avatar({hasBorder = true, src}) {

  return (

    <img 
    className={hasBorder ? styles.avatarWhitBorder : styles.avatar} 
    src={src} 
    />
  )
}