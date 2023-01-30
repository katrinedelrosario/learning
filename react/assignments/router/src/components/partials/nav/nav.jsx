import { NavLink } from "react-router-dom"
import styles from './nav.module.scss'

const NavBar = (props) => {

    return (
        <nav className={styles.wrapper}>
            <ul>
                <li><NavLink className={styles.nav} to='/'>frontpage</NavLink></li>
                <li><NavLink className={styles.nav} to='/goals'>goals</NavLink></li>
                <li><NavLink className={styles.nav} to='/about'>about</NavLink></li>
                <li><NavLink className={styles.nav} to='/contact'>contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar