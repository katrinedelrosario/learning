import React from 'react'
import NavBar from '../nav/nav'
import styles from './header.module.scss'

const Header = props => {

    return (
        <header className={styles.wrapper}>
            <div>
                @ logo here
            </div>
            <NavBar />
        </header>
    )
}

export default Header