import Menu from '../Menu/Menu'
import styles from './Layout.module.scss'
import backgroundImage from '../../assets/images/pngwing.com.png'

const Layout = ({children}) => {
  return (
    <div className={styles.LayoutContainer}>
      <div className={styles.backgroundImage}>
        <img src={backgroundImage} alt="" />
      </div>
      {children}
      <Menu/>
    </div>
  )
}

export default Layout