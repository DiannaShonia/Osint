import Menu from '../Menu/Menu'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.LayoutContainer}>
      <div className={styles.backgroundImage}>
      </div>
      {children}
      <Menu/>
    </div>
  )
}

export default Layout